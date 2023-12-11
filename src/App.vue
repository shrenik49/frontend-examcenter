<template>
  <div class="parent">
    <LoginPage />
  </div>
</template>

<script>

 import LoginPage from './components/LoginPage.vue';

export default {
  components: {
    LoginPage :LoginPage,
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

