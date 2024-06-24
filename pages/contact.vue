<template>
  <div class="contact-page">
    <h2>Contact</h2>
    <div class="contact-item">
      <label>Email</label>
      <a href="mailto:colbyackerman@gmail.com">colbyackerman@gmail.com</a>
    </div>
    <div class="contact-item">
      <label>Phone</label>
      <a href="tel:+16366992060">+1-636-699-2060</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .contact-item {
    margin-left: 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: baseline;

    & > label {
      width: 5rem;
      font-size: 1.2em;
      font-weight: bold;
    }
  }
</style>
