<template>
  <div class="lab-item">
    <h3>{{ lab.title }}</h3>
    <p>{{ lab.description }}</p>
    <button @click="$emit('launch', lab.link)">Запустить</button>
  </div>
</template>

<script>
export default {
  name: "LabItem",
  props: {
    lab: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.lab-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
}

.lab-item h3 {
  margin: 0 0 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>