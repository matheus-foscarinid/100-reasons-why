<template>
  <nav class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0;
    background-color: #333;

    a {
      text-decoration: none;
      color: white;
    }
  }
</style>