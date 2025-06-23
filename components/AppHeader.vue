<script setup lang="ts">
const links = [
  { name: "About", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Contact", path: "/" },
];

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 h-[55px] lg:h-[65px] bg-white text-[#0D141C] z-50"
    role="banner"
    aria-label="Header"
    aria-hidden="true"
    aria-controls="menu-mobile"
  >
    <div
      class="max-w-screen-xl mx-auto flex justify-between items-center px-[25px] lg:px-[40px] h-full"
    >
      <div class="space-x-[12px] flex items-center">
        <img src="@/assets/img/logo.svg" alt="Logo" class="size-[16px]" />
        <NuxtLink
          class="text-[18px] font-bold tracking-[0px] leading-[23px]"
          to="/"
          >Neith</NuxtLink
        >
      </div>

      <!-- Desktop links -->
      <nav
        class="hidden md:flex items-center space-x-[36px] text-[14px] leading-[0px] tracking-[0px] font-medium"
        aria-label="Navigation principale"
      >
        <NuxtLink v-for="(link, i) in links" :key="i" :to="link.path">
          {{ link.name }}
        </NuxtLink>
        <!-- v-model="$i18n.locale" -->
        <select
          aria-label="Change language"
          class="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <button
          class="w-[86px] h-[40px] rounded-full flex items-center justify-center bg-gray-300 cursor-pointer text-[14px] font-bold text-[#0D141C]"
          aria-label="Log In"
        >
          Log In
        </button>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex items-center justify-center p-2 cursor-pointer"
        aria-label="Show mobile menu"
        aria-controls="menu-mobile"
        @click="toggleMobileMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-align-justify-icon lucide-align-justify"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu overlay -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-[#18181878] z-40 lg:hidden"
      aria-hidden="true"
      @click="toggleMobileMenu"
    ></div>

    <nav
      v-if="mobileMenuOpen"
      id="menu-mobile"
      class="fixed top-0 right-0 z-50 w-64 h-full ml-auto bg-white flex flex-col p-6 space-y-4 shadow-lg transform transition-transform duration-300 ease-in-out"
      :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      aria-label="Menu mobile"
    >
      <button
        class="self-end mb-4 cursor-pointer"
        aria-label="Fermer le menu de navigation"
        @click="toggleMobileMenu"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
            stroke="#0D141C"
            stroke-width="2"
          />
          <line
            x1="18"
            y1="6"
            x2="6"
            y2="18"
            stroke="#0D141C"
            stroke-width="2"
          />
        </svg>
      </button>
      <NuxtLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        class="text-[18px] font-medium py-2"
        @click="toggleMobileMenu"
      >
        {{ link.name }}
      </NuxtLink>
      <select
        aria-label="Change language"
        class="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
      <button
        class="w-full h-[40px] rounded-full flex items-center justify-center bg-[#E8EDF5] cursor-pointer text-[16px] font-bold text-[#0D141C] mt-4"
        aria-label="Log In"
      >
        Log In
      </button>
    </nav>
  </header>
</template>
