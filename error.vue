<template>
  <NuxtLayout>
    <div class="error-page">
      <h2>Status: {{ props.error?.statusCode }}</h2>
      <p>{{ props.error?.message }}</p>
      <button @click="handleError">Go Home</button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { clearError, type NuxtError } from 'nuxt/app';

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    error: Object as () => NuxtError,
  });

  function handleError() {
    clearError({ redirect: '/' });
  }
</script>

<style scoped lang="scss">
  .error-page {
    font-size: 1.5em;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.3em;
    & > h2 {
      margin: 0;
      color: darkred;
      text-shadow: 1px 1px 2px black;
    }

    & > p {
      margin: 0;
    }

    & > button {
      all: unset;
      width: max-content;
      padding: 0.3em 0.7em;
      background-color: darkturquoise;
      border: 2px solid transparent;
      border-radius: 0.5em;
      box-shadow: 6px 7px 10px black;
      cursor: pointer;
      transition: all 100ms ease-in-out;
      margin-top: 1em;

      align-self: center;

      &:hover {
        background-color: turquoise;
        border: 2px solid cyan;
      }
    }
  }
</style>
