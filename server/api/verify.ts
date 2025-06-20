type ThreatMatch = {
  threatType: "MALWARE" | "SOCIAL_ENGINEERING" | "UNWANTED_SOFTWARE" | string;
  platformType: string;
  threat: {
    url: string;
  };
};

export default defineEventHandler(async (event) => {
  const body = await readBody<{ url: string }>(event);
  const config = useRuntimeConfig();
  const apiKey = config.googleSafeBrowsingApiKey;

  //   Validate the request body
  const url = body.url?.trim();

  if (!url) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "URL is required" })
    );
  }

  try {
    new URL(url); // Validate URL format
  } catch {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid URL" })
    );
  }

  //   Check if the API key is configured
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Google Safe Browsing API key is not configured",
    });
  }

  //   Construct the API request
  const response = await fetch(
    `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client: {
          clientId: "neith-checker",
          clientVersion: "1.0.0",
        },
        threatInfo: {
          threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url: body.url }],
        },
      }),
    }
  );

  const data = await response.json();
  // console.log("Response from Google Safe Browsing API:", data);

  //   if no matches are found, return safe status
  if (!data.matches) {
    return { url: body.url, status: "Safe" };
  }

  //   If matches are found, return unsafe status
  const matches = data.matches as ThreatMatch[];
  const threatTypes = matches.map((match) => match.threatType);

  if (
    threatTypes.includes("UNWANTED_SOFTWARE") &&
    !threatTypes.includes("MALWARE") &&
    !threatTypes.includes("SOCIAL_ENGINEERING")
  ) {
    return { url: body.url, status: "Suspicious", threats: data.matches };
  }

  return { url: body.url, status: "Dangerous", threats: data.matches };
});
