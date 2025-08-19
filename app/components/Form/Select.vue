<template>
  <div class="relative">
    <div
      class="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer bg-white flex items-center justify-between transition-all duration-200"
      :class="[
        isOpen
          ? 'ring-2 ring-blue-500 border-transparent'
          : 'hover:border-gray-400',
        disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : '',
      ]"
      @click="toggleDropdown"
    >
      <span :class="[selectedOption ? 'text-gray-900' : 'text-gray-400']">
        {{ selectedOption || placeholder }}
      </span>
      <Icon
        name="heroicons:chevron-up-down"
        class="w-5 h-5 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>

    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="transform opacity-0 scale-95 -translate-y-2"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      >
        <div class="max-h-60 overflow-y-auto">
          <div
            v-for="(option, index) in options"
            :key="index"
            class="px-4 py-3 cursor-pointer transition-colors duration-150"
            :class="[
              option === selectedOption
                ? 'bg-blue-100 text-blue-900'
                : 'hover:bg-gray-100 text-gray-900',
            ]"
            @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedOption = ref(props.modelValue);

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit("update:modelValue", option);
  isOpen.value = false;
};

const closeDropdown = (event) => {
  if (!event.target.closest(".relative")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>
