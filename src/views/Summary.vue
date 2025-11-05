<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <p>ชื่อผู้ใช้: {{username}}</p>
    <p>จำนวนคอร์สที่ถูกใจ: {{favorites.length}}</p>
    <router-link to="/">กลับไปหน้า Home</router-link>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";
const favoriteStore = useFavoriteStore();
const username = favoriteStore.username;
const favorites = favoriteStore.favorites;
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
