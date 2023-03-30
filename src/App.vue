<template>
  <nav class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>

  <RouterView />
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #333;

    a {
      text-decoration: none;
      color: white;
    }
  }
</style>
