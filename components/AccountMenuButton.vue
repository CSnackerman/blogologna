<template>
  <div class="account-menu-button-container">
    <div
      class="account-menu-button"
      @click="handleClick"
      @blur="isOpen = false"
    >
      <Icon
        class="icon"
        name="material-symbols:settings-account-box-sharp"
        size="1.4em"
      />
      <div
        v-if="isOpen"
        class="dropdown"
      >
        <NuxtLink to="/profile">Profile</NuxtLink>
        <NuxtLink to="/settings">Settings</NuxtLink>
        <NuxtLink to="/logout">Log out</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isOpen = ref<boolean>(false);
  function handleClick() {
    isOpen.value = !isOpen.value;
  }
</script>

<style scoped lang="scss">
  .account-menu-button-container {
    z-index: 200;
  }

  .account-menu-button {
    all: unset;
    cursor: pointer;
    position: relative;
  }

  .dropdown {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: end;
    text-align: end;
    position: absolute;
    top: calc(100% + 0.2em);
    right: 0;
    font-size: 1rem;
    font-weight: normal;

    background-color: lightgreen;
    border-radius: 0.3rem;
    box-shadow: 3px 3px 7px chocolate;

    cursor: pointer;

    & > a {
      color: black;
      padding: 0.3rem 0.7rem;
      text-decoration: none;

      &:visited {
        color: unset;
      }
    }

    & > a:hover {
      background-color: greenyellow;
      border-radius: 0.3rem;
    }
  }

  .icon {
    color: rgb(5, 5, 5);

    &:hover {
      filter: brightness(1000%);
      scale: 1.1;
    }
  }
</style>
