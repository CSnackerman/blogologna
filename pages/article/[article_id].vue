<template>
  <h2 v-if="pending">Loading...</h2>
  <div v-else-if="!error">
    <h2>{{ article?.title }}</h2>
    <p>{{ article?.content }}</p>
  </div>
  <p v-else>{{ error.status?.toString() }}</p>
</template>

<script setup lang="ts">
  const route = useRoute();

  const {
    data: article,
    pending,
    error,
  } = await useLazyFetch(`/api/article/${route.params.article_id}`);
</script>
