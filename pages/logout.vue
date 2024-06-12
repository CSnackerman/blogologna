<template>
  <div class="logout-page">logging out...</div>
</template>

<script setup lang="ts">
  const supabase = useSupabaseClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('sign out error', error.message);
  } else {
    navigateTo({
      path: '/',
    });
  }
</script>
