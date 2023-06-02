<template>
  <div class="container">
    <button 
      class="base-btn"
      @click="seeRandomReason"
    >
      See random reason
    </button>

    <button 
      class="base-btn"
      @click="openReasonSelection"
    >
      Select reason
    </button>

    <button 
      class="base-btn"
      @click="seeAllReasons"
    >
      See complete list
    </button>

    <button
      class="base-btn"
      @click="openAddReason"
    >
      Add reason
    </button>
  </div>
</template>

<script setup>
const seeRandomReason = () => {
  console.log('seeRandomReason')
}

const openReasonSelection = () => {
  console.log('openReasonSelection')
}

const seeAllReasons = () => {
  console.log('seeAllReasons')
}

const openAddReason = () => {
  console.log('openAddReason')
}
  
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
