<template>
  <div class="container">
    <button class="base-btn">
      See random reason
    </button>

    <button class="base-btn">
      Select reason
    </button>

    <button class="base-btn">
      See complete list
    </button>

    <button class="base-btn">
      Add reason
    </button>
  </div>
</template>

<script setup>
  
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #333;
    padding: 5rem;
    border-radius: 10px;
    gap: 1rem;
  }

  .base-btn {
    width: 100%;
  }
</style>
