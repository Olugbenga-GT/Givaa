<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
    >
      <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
    </div>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
        disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-white',
        error ? 'border-red-500 focus:ring-red-500' : '',
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
