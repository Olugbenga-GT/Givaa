<template>
  <main class="relative h-[80vh] flex flex-col lg:flex-row">
    <section class="w-1/2 pt-24 pb-8">
      <img src="../assets/logo.svg" alt="logo" />
      <h1 class="text-[4rem] font-bold py-8">Givva.</h1>
      <p class="font-bold text-[2rem] mb-10">
        Find the perfect gift in seconds!
      </p>
      <Button class="bg-black" @click="navigateTo('/home')">Get Started</Button>
    </section>
    <section class="w-1/2">
      <img src="../assets/boy.svg" alt="" />
    </section>
  </main>
</template>
<script setup>
import Button from "../components/Form/Button.vue";
definePageMeta({
  layout: "default",
});
</script>
