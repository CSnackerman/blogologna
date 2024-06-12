<template>
  <div class="account-page">
    <h2 class="page-header">Profile</h2>
    <div>
      <label name="email">email</label>
      <code>{{ user?.email }}</code>
    </div>
    <div>
      <label name="phone">phone</label>
      <code>{{ user?.phone }}</code>
    </div>
    <div>
      <label name="first-name">first name</label>
      <code>{{ user?.user_metadata?.first_name }}</code>
    </div>
    <div>
      <label name="last-name">last name</label>
      <code>{{ user?.user_metadata?.last_name }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
  const user = useSupabaseUser();
</script>

<style scoped lang="scss">
  label {
    margin: 2rem;
  }
</style>
