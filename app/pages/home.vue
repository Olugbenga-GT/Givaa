<template>
  <section class="py-6">
    <header class="flex justify-between items-center pb-16">
      <aside>
        <p class="font-light text-sm text-[#1D1D1DB2]">Hey Gastt 👋</p>
        <p class="text-xl">Welcome Back</p>
      </aside>
      <aside>
        <Button class="bg-blue-400" @click="showModal = true">
          + Curate Gifts
        </Button>
      </aside>
    </header>
    <main>
      <section class="flex justify-between border-b-1]">
        <h1 class="text-2xl font-semibold">Top Pick</h1>
        <aside>Left</aside>
      </section>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="card in catalogue"
            :key="card.id"
            :card-id="card.id"
            :title="card.title"
            :subtitle="card.subtitle"
            :image="card.image"
            :image-type="card.imageType"
          />
        </div>
      </section>
    </main>
    <Modal :is-open="showModal" @close="showModal = false">
      <template #content>
        <section>
          <h1>Modal Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
            labore ratione culpa laudantium? Non aliquid soluta debitis
            inventore alias, perferendis nemo deleniti? Possimus minima
            repudiandae quo cupiditate odio repellat doloribus fuga animi fugit,
            dolorum quaerat, molestias rem illum a, provident nobis vel eos.
            Tempora numquam facere minus quod pariatur quo alias deleniti dolore
            hic qutae sed, a aspernatur inventore aliquid nostrum
            delenitdignissimos dolorum facere. Doloremque consequuntur ipsam
            quis aut. Dolor, consectetur amet excepturi omnis doloribus nesciunt
            sint laudantium eum eius ab voluptates illum possimus! Illo commodi
            corrupti esse culpa!
          </p>
        </section>
      </template>
    </Modal>
  </section>
</template>
<script setup>
import Card from "../components/reuseables/Card.vue";
import Button from "../components/Form/Button.vue";
import Modal from "../components/Form/Modal.vue";

definePageMeta({
  layout: "home",
});
const showModal = ref(false);

const catalogue = [
  {
    id: 1,
    title: "Valentine Gift",
    subtitle: "Curated by Valentine",
    image: "",
    imageType: "nature",
    tags: ["romance", "gifts", "special"],
    rating: 4.8,
    price: 49.99,
  },
  {
    id: 2,
    title: "Summer Collection",
    subtitle: "Best summer outfits 2024",
    image: "",
    imageType: "portrait",
    tags: ["fashion", "summer", "trendy"],
    rating: 4.5,
    price: 79.99,
  },
  {
    id: 3,
    title: "Gourmet Delights",
    subtitle: "Fine dining experiences",
    image: "",
    imageType: "food",
    tags: ["food", "gourmet", "dining"],
    rating: 4.9,
    price: 120.0,
  },
  {
    id: 4,
    title: "Travel Adventures",
    subtitle: "Explore the world",
    image: "",
    imageType: "travel",
    tags: ["travel", "adventure", "explore"],
    rating: 4.7,
    price: 299.99,
  },
  {
    id: 5,
    title: "Urban Photography",
    subtitle: "City life captured",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    imageType: "random",
    tags: ["photography", "urban", "city"],
    rating: 4.6,
    price: 89.99,
  },
];
</script>
