

<template>
  <div>
    <h4>Test Web Components</h4>
    <Dashboard msg="Welcome to Your Vue.js App" />
  </div>
</template>


<script>
import Dashboard from "./components/dashboard.vue";

export default {
  name: "app",
  components: {
    Dashboard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
