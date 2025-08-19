<template>
  <button
    :class="[
      'px-8 py-1.5 text-white rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
      classes,
      disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:scale-105 active:scale-95',
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
