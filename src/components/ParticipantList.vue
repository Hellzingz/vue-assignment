<script setup>
import { ref } from "vue";
const name = ref("");
const participants = ref([]);
const addParticipant = () => {
  participants.value.push(name.value);
  name.value = "";
};
</script>

<template>
  <div class="assignment-container">
    <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
    <input v-model="name" placeholder="กรอกชื่อผู้เข้าร่วม" />
    <button @click="addParticipant">เพิ่มชื่อ</button>

    <div class="participant-list">
      <p v-if="participants.length === 0">ยังไม่มีผู้เข้าร่วม</p>
      <ul v-else="participants.length > 0">
        <li v-for="(participant, index) in participants">{{ participant }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: #333;
}
.assignment-container {
  max-width: 400px;
  margin: auto;
  padding: 12px;
  border-radius: 8px;
  background: #f9f9f9;
}
li {
  list-style-type: none;
  padding: 6px 0;
  border-bottom: 1px solid #ddd;
  color: #333;
}
p {
  text-align: center;
  color: #777;
}
button {
  margin-left: 8px;
}
</style>
