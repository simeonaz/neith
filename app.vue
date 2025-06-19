<template>
  <div class="max-w-screen-xl mx-auto min-h-svh relative">
    <NoScript />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage class="pt-[56px] lg:pt-[66px]" />
  </div>
</template>

<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title,
  description: config.description,
  ogTitle: config.title,
  ogDescription: config.description,
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
