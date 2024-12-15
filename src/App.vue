<template>
  <div id="app" class="container">
    <h1>Лабораторные работы</h1>
    <LabItem
      v-for="lab in labs"
      :key="lab.id"
      :lab="lab"
      @launch="launchLab"
    />
  </div>
</template>

<script>
import LabItem from "./components/LabItem.vue";
import { labs } from "./data/labs.js";

export default {
  name: "App",
  components: { LabItem },
  data() {
    return {
      labs,
    };
  },
  methods: {
  launchLab(link) {
    window.open(link, "_blank");
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}
</style>