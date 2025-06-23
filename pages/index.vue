<template>
  <main
    class="px-[20px] md:px-[40px] lg:px-[160px] py-[20px] flex flex-col"
    role="main"
    aria-label="Main content"
  >
    <div class="p-4 lg:p-[24px] flex items-center justify-center">
      <div class="flex flex-col items-center justify-center space-y-[24px]">
        <img
          src="@/assets/img/image1.svg"
          alt="Illustration of a safe link"
          class="w-[360px] h-[203px]"
        />
        <div
          class="flex flex-col space-y-[8px] items-center justify-center text-[#0D141C]"
        >
          <h1
            class="font-bold text-[18px] tracking-[0px] leading-[21px] text-center"
          >
            Check if a link is safe
          </h1>
          <p
            class="font-normal text-[14px] tracking-[0px] leading-[21px] text-center"
          >
            Paste any link to analyze its trust level in seconds.
          </p>
        </div>

        <NuxtLink
          to="/verify"
          class="bg-[#E8EDF5] h-[40px] w-[108px] rounded-full font-bold text-[14px] tracking-[0px] leading-[21px] cursor-pointer flex items-center justify-center"
          aria-label="Check a link"
        >
          Check Link
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// SEO for the homepage
useHead({
  title: "Check if a link is safe | Neith",
  meta: [
    {
      name: "description",
      content:
        "Instantly analyze the trustworthiness of any link with Neith. Protect yourself from suspicious links and online scams.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      property: "og:title",
      content: "Check if a link is safe | Neith",
    },
    {
      property: "og:description",
      content: "Instantly analyze the trustworthiness of any link with Neith.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>
