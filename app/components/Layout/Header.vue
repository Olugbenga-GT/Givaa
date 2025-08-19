<template>
  <header class="flex items-center space-x-2 justify-between pb-14">
    <aside class="flex items-center space-x-2 space-x-8">
      <NuxtLink
        to="/"
        class="flex items-center space-x-2 space-x-2 transition-all duration-100 hover:font-semibold"
        active-class="font-semibold"
      >
        <img src="./../../assets/home.svg" alt="home" />
        <p
          class="text-sm font-light"
          :class="{ 'font-semibold': isActive('/') }"
        >
          Home
        </p>
      </NuxtLink>

      <NuxtLink
        to="/ideas"
        class="flex items-center space-x-2 transition-all duration-100 hover:font-semibold"
        :class="{ 'font-semibold': isActive('/ideas') }"
        active-class="font-semibold"
      >
        <img src="./../../assets/idea.svg" alt="idea" />
        <p
          class="text-sm font-light"
          :class="{ 'font-semibold': isActive('/ideas') }"
        >
          Ideas
        </p>
      </NuxtLink>

      <NuxtLink
        to="/collections"
        class="flex items-center space-x-2 transition-all duration-100 hover:font-semibold"
        :class="{ 'font-semibold': isActive('/collections') }"
        active-class="font-semibold"
      >
        <img src="./../../assets/collections.svg" alt="collections" />
        <p
          class="text-sm font-light"
          :class="{ 'font-semibold': isActive('/collections') }"
        >
          Collections
        </p>
      </NuxtLink>

      <NuxtLink
        to="/explore"
        class="flex items-center space-x-2 transition-all duration-100 hover:font-semibold"
        :class="{ 'font-semibold': isActive('/explore') }"
        active-class="font-semibold"
      >
        <img src="./../../assets/explore.svg" alt="explore" />
        <p
          class="text-sm font-light"
          :class="{ 'font-semibold': isActive('/explore') }"
        >
          Explore
        </p>
      </NuxtLink>

      <NuxtLink
        to="/profile"
        class="flex items-center space-x-2 transition-all duration-100 hover:font-semibold"
        :class="{ 'font-semibold': isActive('/profile') }"
        active-class="font-semibold"
      >
        <img src="./../../assets/profile.svg" alt="profile" />
        <p
          class="text-sm font-light"
          :class="{ 'font-semibold': isActive('/profile') }"
        >
          Profile
        </p>
      </NuxtLink>
    </aside>

    <aside class="flex items-center space-x-2 space-x-4">
      <img
        src="./../../assets/user.png"
        alt="user"
        class="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-primary transition-all cursor-pointer"
      />
      <img
        src="./../../assets/bell.svg"
        alt="user"
        class="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-primary transition-all cursor-pointer"
      />
    </aside>
  </header>
</template>

<script setup>
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.router-link-active {
  @apply bg-gray-100 text-red-500;
}
</style>
