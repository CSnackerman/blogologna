<template>
  <h1>Browse</h1>
  <div>
    <ArticleCard
      v-for="(article, idx) in articles"
      :key="idx"
      :article-card="article"
    />
  </div>
</template>

<script setup lang="ts">
  import ArticleCard, {
    type ArticleCardProps,
  } from '@/components/ArticleCard.vue';

  const articles: ArticleCardProps[] = [
    {
      title: 'Bizarre Beliefs',
      author: 'Col Ackerman',
      summary:
        'An accounting about strange and uncommon beliefs that I have come to hold over the years.',
      thumbnail: '/thumbnails/Dio_Brando.jpg',
    },
    {
      title: 'Journey into the Jungle',
      author: 'Col Ackerman',
      summary: 'On parallel realms and how to find them.',
      thumbnail: '/thumbnails/palm_tree.jpg',
    },
    {
      title: 'Metaphysical Experiments',
      author: 'Col Ackerman',
      summary:
        'Application of the scientific method to metaphyiscal hypotheses.',
      thumbnail: '/thumbnails/metaphysics.webp',
    },
    {
      title: 'Heart of Hatred',
      author: 'Col Ackerman',
      summary: "It ain't easy being cheesy.",
      thumbnail: '/thumbnails/burning_heart.jpg',
    },
  ];
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
