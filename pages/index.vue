<script setup lang="ts"></script>

<template>
  <main class="px-[20px] md:px-[40px] lg:px-[160px] py-[20px] flex flex-col">
    <div class="p-4 lg:p-[24px] flex items-center justify-center">
      <div class="flex flex-col items-center justify-center space-y-[24px]">
        <img
          src="@/assets/img/image1.svg"
          alt="Image 1"
          class="w-[360px] h-[203px]"
        >
        <div
          class="flex flex-col space-y-[8px] items-center justify-center text-[#0D141C]"
        >
          <h3 class="font-bold text-[18px] tracking-[0px] leading-[21px]">
            Check if a link is safe
          </h3>
          <p class="font-normal text-[14px] tracking-[0px] leading-[21px]">
            Paste any link to analyze its trust level in seconds.
          </p>
        </div>

        <NuxtLink to="/verify" class="bg-[#E8EDF5] h-[40px] w-[108px] rounded-full font-bold text-[14px] tracking-[0px] leading-[21px] cursor-pointer flex items-center justify-center">
          Check Link
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
