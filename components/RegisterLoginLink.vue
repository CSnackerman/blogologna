<template>
  <div class="register-login-btn">
    <NuxtLink
      v-if="$props.buttonType === 'login'"
      class="login"
      to="/login"
    >
      Login
    </NuxtLink>

    <NuxtLink
      v-else
      class="register"
      to="/register"
    >
      Register
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  export type LoginOrRegister = 'login' | 'register';

  defineProps<{
    buttonType: LoginOrRegister;
  }>();
</script>

<style scoped lang="scss">
  a {
    font-size: 0.7em;
    font-weight: normal;
    text-decoration: none;
    // border: 1px solid black;
    background-image: linear-gradient(to top, yellowgreen, wheat);
    padding: 0.3em;
    border-radius: 0.3em;
    border: 1px solid pink;
    &:hover {
      background-image: linear-gradient(to right, yellowgreen, yellow);
    }

    &:visited {
      color: unset;
    }
  }
</style>
