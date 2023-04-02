<template>
  <div class="home-container">
    <div class="animation-container">
      <h1 class="title">100 reasons why</h1>
    
      <img 
        src="src/images/hearts.png"
        class="hearts"
      >
    
      <img 
        src="src/images/pot.png"
        class="pot" 
      >
    </div>

    <div class="reasons-container">
      <ReasonsMenu />
    </div>
  </div>
</template>

<script setup>
import ReasonsMenu from '@/components/ReasonsMenu.vue'
</script>

<style scoped>

.home-container {
  display: flex;
}

.reasons-container {
  margin: 5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.animation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.pot {
  width: 400px;
  height: fit-content;
  align-self: center;
  transition: all 0.3s ease;
  animation: float 4s ease-in-out infinite;
  margin-top: -300px;
}

.hearts {
  width: 800px;
  height: fit-content;
  animation: vertical-floating 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes vertical-floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
