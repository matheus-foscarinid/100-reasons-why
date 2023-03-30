<template>
  About route
</template>

<style scoped>

.home-container {
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
