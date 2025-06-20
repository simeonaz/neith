<script setup lang="ts">
const linkToCheck = ref("");
const loading = ref(false);
const showError = ref(false);
const verifiedLinks = ref([]);

function validateUrl(input: string): boolean {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
}

const handleSubmit = async () => {
  showError.value = false;
  if (
    linkToCheck.value &&
    linkToCheck.value.trim() !== "" &&
    validateUrl(linkToCheck.value.trim())
  ) {
    loading.value = true;
    try {
      const { data } = await useFetch("/api/verify", {
        method: "POST",
        body: {
          url: linkToCheck.value.trim(),
        },
      });
      //   console.log(data.value);
      verifiedLinks.value.push(data.value);
    } catch (error: unknown) {
      showError.value = true;
      console.error(error);
    } finally {
      loading.value = false;
    }
  } else {
    showError.value = true;
    console.error("Please enter a valid URL.");
  }
};
</script>

<template>
  <main class="px-[20px] md:px-[40px] lg:px-[160px] py-[20px] flex flex-col">
    <div class="p-8 lg:p-[32px] flex flex-col">
      <!-- input -->
      <div class="relative w-full">
        <button
          class="absolute left-3 inset-y-0 cursor-pointer"
          @click="handleSubmit"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_33_26)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5306 20.4694L16.8366 15.7762C19.6629 12.383 19.3204 7.36693 16.0591 4.38935C12.7978 1.41176 7.77134 1.526 4.64867 4.64867C1.526 7.77134 1.41176 12.7978 4.38935 16.0591C7.36693 19.3204 12.383 19.6629 15.7762 16.8366L20.4694 21.5306C20.7624 21.8237 21.2376 21.8237 21.5306 21.5306C21.8237 21.2376 21.8237 20.7624 21.5306 20.4694ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25C6.77379 17.2459 3.75413 14.2262 3.75 10.5Z"
                fill="#4F7396"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_26">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <input
          id="url"
          v-model="linkToCheck"
          type="url"
          name="url"
          class="w-full bg-[#E8EDF2] h-[48px] flex items-center pl-12 pr-16 focus:outline-none rounded-[8px] text-[16px] font-normal tracking-[0px] leading-[24px] text-[#0D141C] placeholder:text-[#4F7396]"
          placeholder="Paste link here"
          required
          @keyup.enter="handleSubmit"
        />
        <div
          v-if="showError === true"
          class="absolute left-0 top-full mt-2 text-red-500 text-sm"
        >
          <p>Please enter a valid url.</p>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <button
          class="bg-[#1A80E5] text-[#F7FAFC] h-[40px] w-[104px] flex items-center justify-center rounded-[12px] text-[14px] font-bold tracking-[0px] leading-[21px] cursor-pointer mt-6"
          :disabled="loading"
          @click="handleSubmit"
        >
          Check link
        </button>
      </div>

      <!-- Title -->
      <div class="flex py-[20px]">
        <h3 class="text-[#0D141C] text-[18px] font-bold">Result</h3>
      </div>

      <!-- Result -->
      <div v-if="loading" class="flex items-center justify-center">
        <LdrsRingLoader />
      </div>
      <div v-else>
        <div
          v-if="verifiedLinks.length === 0"
          class="flex items-center justify-center"
        >
          <p class="text-[#4F7396] text-[16px] font-normal">
            No links verified yet.
          </p>
        </div>

        <div v-else>
          <LinkResult
            v-for="(link, i) in verifiedLinks"
            :key="i"
            :verified-link="link"
          />
        </div>
      </div>
    </div>
  </main>
</template>
