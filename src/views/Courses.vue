<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <p>❤️ ถูกใจแล้ว {{favorite.length}} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <input v-model="favoriteStore.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <CourseCard 
      v-for="course in courses" :key="course.id"
      :title="course.title" :price="course.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
import axios from "axios";
import { useFavoriteStore } from "../stores/favorite";


const courses = ref([]);
const username = ref("");
const favoriteStore = useFavoriteStore();
const favorite = favoriteStore.favorites;
onMounted(async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    courses.value = response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
});

</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
