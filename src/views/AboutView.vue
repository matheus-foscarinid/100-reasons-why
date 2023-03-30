<template>
  <div class="about-container">
    <h1 class="title">About</h1>
    <div class="text-container">
      <p>Well, for now this is just a simple project to learn the changes in Vue 3. I'm using the Composition API and the Pinia, a state management library.</p>
      <p>I'm really used to Vue 2, and soon we'll start migrating our projects to Vue 3, so I'm trying to learn as much as I can about the new features.</p>
      <p>Soon I'll add more stuff to this project, and even start another one with TypeScript.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
  }

  & .text-container {
    font-size: 1.2rem;
    color: #333;
    text-align: center;
    line-height: 1.5;
    max-width: 600px;
  }
}
</style>
