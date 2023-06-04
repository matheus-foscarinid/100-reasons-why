<template>
  <div>
    <div class="home-container">
      <div
        v-if="!showReasonsMenu"
        class="animation-container"
      >
        <h1 class="title">100 reasons why</h1>

        <img 
          src="src/images/hearts.png"
          class="hearts"
        >

        <img 
          src="src/images/pot.png"
          class="pot" 
        >

        <button
          @click="showReasonsMenu = true"
          class="show-reasons-button"
        >
          Show reasons
        </button>
      </div>

      <div
        v-else
        class="reasons-container"
      >
        <ReasonsMenu />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReasonsMenu from '@/components/ReasonsMenu.vue'
import { ref } from 'vue'

const showReasonsMenu = ref(false)
</script>

<style scoped lang="scss">

.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reasons-container {
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

  .pot {
    width: 300px;
    height: fit-content;
    align-self: center;
    transition: all 0.3s ease;
    animation: float 4s ease-in-out infinite;
    margin-top: -300px;
  }

  .hearts {
    width: 600px;
    height: fit-content;
    animation: vertical-floating 6s ease-in-out infinite;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
  }

  .show-reasons-button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;

    &:hover {
      background-color: #444;
      transform: scale(1.1);
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.15);
    }
  }
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
