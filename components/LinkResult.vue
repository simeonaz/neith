<script setup>
defineProps({
  verifiedLink: {
    type: Object,
    default: () => {
      return {
        url: "",
        status: "",
      };
    },
  },
});

const showModal = ref(false);
const pendingUrl = ref("");

const openLink = (url, status) => {
  if (!url) {
    console.error("Invalid URL");
    return;
  }
  if (status === "Safe") {
    window.open(url, "_blank");
  } else {
    pendingUrl.value = url;
    showModal.value = true;
  }
};

const confirmOpen = () => {
  window.open(pendingUrl.value, "_blank");
  showModal.value = false;
  pendingUrl.value = "";
};

const cancelOpen = () => {
  showModal.value = false;
  pendingUrl.value = "";
};
</script>

<template>
  <div class="w-full h-[80px] flex items-center justify-between">
    <div class="flex items-center space-x-[8px]">
      <div
        class="bg-[#E8EDF2] size-[48px] flex items-center justify-center rounded-[8px]"
      >
        <svg
          v-if="verifiedLink.status === 'Safe'"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V10.7606C3 19.1616 10.1081 21.9488 11.5312 22.4222C11.8352 22.5256 12.1648 22.5256 12.4688 22.4222C13.8937 21.9488 21 19.1616 21 10.7606V5.25C21 4.42157 20.3284 3.75 19.5 3.75ZM19.5 10.7616C19.5 18.1134 13.2797 20.5697 12 20.9972C10.7316 20.5744 4.5 18.12 4.5 10.7616V5.25H19.5V10.7616ZM7.71938 13.2806C7.42632 12.9876 7.42632 12.5124 7.71938 12.2194C8.01243 11.9263 8.48757 11.9263 8.78063 12.2194L10.5 13.9388L15.2194 9.21937C15.5124 8.92632 15.9876 8.92632 16.2806 9.21937C16.5737 9.51243 16.5737 9.98757 16.2806 10.2806L11.0306 15.5306C10.8899 15.6715 10.6991 15.7506 10.5 15.7506C10.3009 15.7506 10.1101 15.6715 9.96937 15.5306L7.71938 13.2806Z"
            fill="#22C55E"
          />
        </svg>
        <svg
          v-else-if="verifiedLink.status === 'Suspicious'"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_33_56)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V10.7597C3 19.1616 10.1081 21.9478 11.5312 22.4203C11.8351 22.5243 12.1649 22.5243 12.4688 22.4203C13.8938 21.9469 21 19.1606 21 10.7587V5.25C21 4.42157 20.3284 3.75 19.5 3.75ZM19.5 10.7616C19.5 18.1134 13.2806 20.5697 12 20.9972C10.7316 20.5753 4.5 18.1209 4.5 10.7616V5.25H19.5V10.7616ZM11.25 12.75V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75ZM10.875 16.125C10.875 15.5037 11.3787 15 12 15C12.6213 15 13.125 15.5037 13.125 16.125C13.125 16.7463 12.6213 17.25 12 17.25C11.3787 17.25 10.875 16.7463 10.875 16.125Z"
              fill="#FACC15"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_56">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          v-else-if="verifiedLink.status === 'Dangerous'"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_33_72)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V10.7597C3 19.1606 10.1081 21.9478 11.5312 22.4212C11.8352 22.5246 12.1648 22.5246 12.4688 22.4212C13.8938 21.9478 21 19.1606 21 10.7597V5.25C21 4.42157 20.3284 3.75 19.5 3.75ZM19.5 10.7616C19.5 18.1134 13.2797 20.5697 12 20.9972C10.7316 20.5744 4.5 18.12 4.5 10.7616V5.25H19.5V10.7616Z"
              fill="#EF4444"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_72">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="flex flex-col max-w-[60vw] overflow-hidden">
        <div
          class="text-[16px] font-medium tracking-[0px] leading-[24px] truncate"
          :title="verifiedLink?.url"
        >
          {{ verifiedLink?.url }}
        </div>
        <div
          class="font-normal text-[14px] tracking-[0px] leading-[21px]"
          :class="{
            'text-[#22C55E]': verifiedLink.status === 'Safe',
            'text-[#FACC15]': verifiedLink.status === 'Suspicious',
            'text-[#EF4444]': verifiedLink.status === 'Dangerous',
          }"
        >
          {{ verifiedLink?.status }}
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        @click="openLink(verifiedLink.url, verifiedLink.status)"
      >
        <g clip-path="url(#clip0_33_64)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7806 14.5306L16.0306 21.2806C15.7376 21.5737 15.2624 21.5737 14.9694 21.2806C14.6763 20.9876 14.6763 20.5124 14.9694 20.2194L20.4397 14.75H5.75C5.33579 14.75 5 14.4142 5 14C5 13.5858 5.33579 13.25 5.75 13.25H20.4397L14.9694 7.78062C14.6763 7.48757 14.6763 7.01243 14.9694 6.71938C15.2624 6.42632 15.7376 6.42632 16.0306 6.71938L22.7806 13.4694C22.9215 13.6101 23.0006 13.8009 23.0006 14C23.0006 14.1991 22.9215 14.3899 22.7806 14.5306Z"
            :fill="
              verifiedLink.status === 'Safe'
                ? '#22C55E'
                : verifiedLink.status === 'Suspicious'
                  ? '#FACC15'
                  : '#EF4444'
            "
          />
        </g>
        <defs>
          <clipPath id="clip0_33_64">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
  >
    <div class="bg-white rounded-lg p-6 max-w-xs w-full shadow-lg text-center">
      <div
        class="mb-4 text-lg font-semibold"
        :class="{
          'text-[#FACC15]': verifiedLink.status === 'Suspicious',
          'text-[#EF4444]': verifiedLink.status === 'Dangerous',
        }"
      >
        {{
          verifiedLink.status === "Suspicious"
            ? "Suspicious link"
            : "Dangerous link"
        }}
      </div>
      <div class="mb-6 text-sm text-gray-700">
        This link is marked as
        <span
          :class="{
            'text-[#FACC15]': verifiedLink.status === 'Suspicious',
            'text-[#EF4444]': verifiedLink.status === 'Dangerous',
          }"
        >
          {{
            verifiedLink.status === "Suspicious" ? "suspicious" : "dangerous"
          }} </span
        >.
        <br />
        Are you sure you want to continue?
      </div>
      <div class="flex justify-center gap-4">
        <button
          class="px-4 py-2 rounded bg-gray-200 text-gray-800 font-medium cursor-pointer"
          @click="cancelOpen"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 rounded text-white font-medium cursor-pointer"
          :class="{
            'bg-[#EF4444]': verifiedLink.status === 'Dangerous',
            'bg-[#FACC15]': verifiedLink.status === 'Suspicious',
          }"
          @click="confirmOpen"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
