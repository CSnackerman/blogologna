<template>
  <nav>
    <div
      class="links"
      style="margin-right: 1em"
    >
      <NuxtLink to="/">
        <img
          alt="Bologna"
          class="logo"
          src="~/assets/svg/logo.svg"
          width="125"
          height="125"
        />
      </NuxtLink>
      <NuxtLink to="/why">Why?</NuxtLink>
      <NuxtLink to="/articles">Articles</NuxtLink>
    </div>
    <div class="links account">
      <RegisterLoginLink button-type="register" />
      <RegisterLoginLink button-type="login" />
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
  }

  .links {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1em;
  }

  @media only screen and (max-width: 600px) {
    .links {
      font-size: 0.7em;
    }
  }

  @mixin on-hover($scale-max) {
    transition: scale 125ms ease-in-out;
    &:hover {
      scale: $scale-max;
    }
  }

  @mixin set-logo {
    $size: 2em;
    width: $size;
    height: $size;
  }

  img {
    display: grid;
    place-content: center;
    @include set-logo;
    @include on-hover(1.2);
  }

  a {
    all: unset;
    cursor: pointer;

    @include on-hover(1.05);

    &:hover {
      color: maroon;
      text-decoration: underline;
    }

    transition: all 50ms ease-in-out;
  }

  @keyframes hover {
    to {
      transform: translateY(-5px);
    }
  }

  .router-link-active {
    rotate: (-5deg);
    animation: hover 1s ease-in-out infinite alternate;
  }
</style>
