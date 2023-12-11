<template>
  <div class="parent">
    <registerPage />
  </div>
</template>

<script>

 import registerPage from './components/RegisterPage.vue';

export default {
  components: {
    registerPage :registerPage,
  }
};
</script>

<style>
  .parent{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
  }
</style>

