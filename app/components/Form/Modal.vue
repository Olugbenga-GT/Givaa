<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="closeOnBackdrop && close()"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      ></div>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="transform opacity-0 scale-95 translate-y-10"
        enter-to-class="transform opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="transform opacity-100 scale-100 translate-y-0"
        leave-to-class="transform opacity-0 scale-95 translate-y-10"
      >
        <div
          v-if="isOpen"
          class="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          @click.stop
        >
          <button
            @click="close"
            class="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <!-- <Icon name="heroicons:x-mark" class="w-6 h-6" /> -->
            &times;
          </button>

          <div
            v-if="$slots.header || title"
            class="px-6 py-4 border-b border-gray-200"
          >
            <slot name="header">
              <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
            </slot>
          </div>

          <div class="px-6 py-4">
            <slot name="content"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  showCloseButton: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:isOpen", "close"]);

const close = () => {
  emit("update:isOpen", false);
  emit("close");
};

const handleEscape = (event) => {
  if (event.key === "Escape" && props.isOpen) {
    close();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>
