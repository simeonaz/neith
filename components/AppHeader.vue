<script setup lang="ts">
const links = [
  { name: "About", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Contact", path: "/" },
];
</script>

<template>
  <header
    class="absolute top-0 inset-x-0 h-[55px] lg:h-[65px] flex justify-between items-center px-[25px] lg:px-[40px] bg-transparent text-[#0D141C]"
  >
    <div class="space-x-[12px] flex items-center">
      <img src="@/assets/img/logo.svg" alt="Logo" class="w-[16px] h-[16px]" />

      <NuxtLink class="text-[18px] font-bold" to="/">Neith</NuxtLink>
    </div>
    <div
      class="hidden lg:flex items-center space-x-[36px] text-[14px] leading-[0px] tracking-[0px] font-medium"
    >
      <NuxtLink v-for="(link, i) in links" :key="i" :to="link.path">{{
        link.name
      }}</NuxtLink>

      <button
        class="w-[86px] h-[40px] rounded-full flex items-center justify-center bg-gray-300 cursor-pointer text-[14px] font-bold text-[#0D141C]"
      >
        Log In
      </button>
    </div>
  </header>
</template>
