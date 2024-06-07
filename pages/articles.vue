<template>
  <h1>Browse</h1>
  <div>
    <h2 v-if="pending">Loading...</h2>
    <ArticleCard
      v-for="(article, idx) in articles"
      v-else-if="!error"
      :key="idx"
      :article-card="article"
    />
    <p v-else>{{ error.status?.toString() }}</p>
  </div>
</template>

<script setup lang="ts">
  import ArticleCard from '~/components/ArticleCard.vue';
  import { toArticleCards } from '~/types/models/article_models';

  const {
    data: articles,
    pending,
    error,
  } = await useLazyFetch('/api/articles', { transform: toArticleCards });
</script>

<style scoped lang="scss">
  h1 {
    margin-top: 0;
  }
  div {
    display: grid;
    grid-template-columns: 100%;
    gap: 3em;
    place-items: center;
  }
</style>
