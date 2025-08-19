<template>
  <div class="cursor-pointer group">
    <div
      class="relative rounded-2xl h-[12rem] w-[20rem] bg-gray-200 overflow-hidden"
    >
      <p
        class="absolute top-4 right-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center z-10 font-bold shadow-lg"
      >
        {{ cardId }}
      </p>

      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        @error="handleImageError"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
      ></div>
    </div>
    <div class="mt-3">
      <p class="font-semibold text-xl">{{ title }}</p>
      <p class="text-[#9C9C9E]">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  cardId: {
    type: [Number, String],
    default: 1,
  },
  title: {
    type: String,
    default: "Valentine Gift",
  },
  subtitle: {
    type: String,
    default: "Curated by Valentine",
  },
  image: {
    type: String,
    default: "",
  },
  imageType: {
    type: String,
    default: "nature",
    validator: (value) =>
      ["nature", "food", "travel", "portrait", "random"].includes(value),
  },
});

const imageUrl = ref("");
const imageError = ref(false);

const imageCategories = {
  nature: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
  ],
  food: [
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
  ],
  travel: [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
  ],
  portrait: [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=300&fit=crop",
  ],
  random: [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
  ],
};

const getRandomImage = () => {
  const category = imageCategories[props.imageType];
  const randomIndex = Math.floor(Math.random() * category.length);
  return category[randomIndex];
};

const handleImageError = () => {
  imageError.value = true;
  // Fallback to a placeholder image
  imageUrl.value =
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=400&h=300&fit=crop";
};

onMounted(() => {
  if (props.image) {
    imageUrl.value = props.image.startsWith("http")
      ? props.image
      : `/images/${props.image}`;
  } else {
    imageUrl.value = getRandomImage();
  }
});

watch(
  () => props.imageType,
  () => {
    imageUrl.value = getRandomImage();
    imageError.value = false;
  }
);
</script>

<style scoped>
.z-10 {
  z-index: 10;
}
</style>
