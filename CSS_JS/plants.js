/*
*CA 1
*@Vinícius Araújo dos Santos
*Student ID: 23409622
*14/11/24
*/

// Import Vue 3
const { createApp, ref } = Vue;

// Vue app configuration
const app = createApp({
  setup() {
    // Define data
    const plants = ref([
      { id: 1, name: "Red Ground Cover Rose Plant (2L Pot)", description: "Red Fairy, Low Spreading Carpet Rose", price: 5.99, image: "Pictures/ground-cover-rose-plants-red.jpg", quantity: 1 },
      { id: 2, name: "White Ground Cover Rose Plant (1.5L Pot)", description: "Low Spreading Carpet Rose With White blooms", price: 8.99, image: "Pictures/ground-cover-roses.jpg", quantity: 1 },
      { id: 3, name: "Red Ground Cover Rose Plant (Fairy King)", description: "Low Spreading Carpet Rose With Red blooms", price: 7.99, image: "Pictures/red-ground-cover-rose.jpg", quantity: 1 },
      { id: 4, name: "Yellow Ground Cover Rose Plant (3.5L Pot)", description: "Low Spreading Carpet Rose With Long Lasting Yellow Blooms", price: 9.99, image: "Pictures/Ground_Cover_Rose.jpg", quantity: 1 },
      { id: 5, name: "Yellow Climbing Rose Plant (2.25L Pot)", description: "Yellow Coloured Climbing Rose", price: 12.99, image: "Pictures/climbing-rose-plants.jpg", quantity: 1 },
      { id: 6, name: "White Climbing Rose Plant (3L Pot)", description: "Unusual White Climbing Rose Plant", price: 12.99, image: "Pictures/climber-rose-plant-white-1.jpg", quantity: 1 },
      { id: 7, name: "Light Pink Climbing Rose Plant (2.25L Pot)", description: "Potted Light Pink Flowering Climbing Rose Plant", price: 12.99, image: "Pictures/pink-climbing-rose.jpg", quantity: 1 },
      { id: 8, name: "Pink Climbing Rose Plant (2.25L Pot)", description: "Large Pink Coloured Climbing Rose Plant", price: 16.99, image: "Pictures/rose-climbing-plant.jpg", quantity: 1 },
      { id: 9, name: "White Standard Rose Plant (5L Pot)", description: "Standard White Flowering Rose", price: 58.99, image: "Pictures/standard-rose-plants.jpg", quantity: 1 },
      { id: 10, name: "Red Standard Rose Plant 'Wanderer' (5L Pot)", description: "Standard Rose - Red Flowering", price: 58.99, image: "Pictures/red-standard-rose-plant.jpg", quantity: 1 },
      { id: 11, name: "White Standard Rose Plant 'Helga' (5L Pot)", description: "Standard Rose - White Flowering", price: 58.99, image: "Pictures/white-standard-rose-plant.jpg", quantity: 1 },
      { id: 12, name: "Climbing Pink Rose New Dawn (2.25L Pot)", description: "Pink Flowering Climbing Rose Plant", price: 12.99, image: "Pictures/climbing-rose.jpg", quantity: 1 },
      { id: 13, name: "Pink Rose Plant 'Leonardo da Vinci' (3L Pot)", description: "Pink Potted Rose Plant", price: 17.49, image: "Pictures/potted-rose-plant.jpg", quantity: 1 },
      { id: 14, name: "Pink Rose Plant Pink Meilove (3L Pot)", description: "Pink Potted Rose Plant", price: 16.99, image: "Pictures/rose-plants.jpg", quantity: 1 },
      { id: 15, name: "Red Rose Plant Zepeti (3L Pot)", description: "Red Flowering Shrub Rose, Repeat Bloomer", price: 19.99, image: "Pictures/Potted_Rose_Plant.jpg", quantity: 1 },
      { id: 16, name: "White Rose Plant 'Schneewittchen' (3L Pot)", description: "White Flowering Potted Rose", price: 15.49, image: "Pictures/rose.jpg", quantity: 1 },
      { id: 17, name: "Orange Rose Plant 'Fragrant Delight' (3L Pot)", description: "Light Orange Coloured Rose Plants", price: 13.49, image: "Pictures/potted-rose.jpg", quantity: 1 },
      { id: 18, name: "Pink Rose Plants (Heidetraum) (3L Pot)", description: "Bare Root Pink Rose Plant", price: 21.49, image: "Pictures/pink-rose_5g4r-ga.jpg", quantity: 1 },
      { id: 19, name: "Red Rose Plants (Rouge Meilove) (7.5L Pot)", description: "Standard Red Flowering Rose", price: 24.99, image: "Pictures/Standard_Rose_Plant.jpg", quantity: 1 },
      { id: 20, name: "Standard Rose Plant Mix (5L Pot)", description: "Pink Flowering Standard Rose Plant", price: 24.99, image: "Pictures/Standard_Rose_Plants_cq1k-1w.jpg", quantity: 1 },
      { id: 21, name: "Pink & White Rose Plant 'Double Delight' (3L Pot)", description: "Bi-colour Pink & White Rose", price: 10.60, image: "Pictures/rose-plant-2.jpg", quantity: 1 }
    ]);

    // Return data
    return { plants };
  }
});

// Mount the Vue app
app.mount('#plant-list');