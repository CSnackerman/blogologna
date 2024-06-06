<script setup lang="ts">
  export interface ArticleCardProps {
    title: string;
    author: string;
    summary: string;
    thumbnail: string;
  }
  const props = defineProps<{ articleCard: ArticleCardProps }>();

  const { title, author, summary, thumbnail } = props.articleCard;
</script>

<template>
  <NuxtLink :to="`/article/${toLowerKebab(title)}`">
    <img
      :src="thumbnail"
      :alt="thumbnail.split('/').slice(-1)[0]"
    />
    <div>
      <h3>{{ title }}</h3>
      <p>{{ summary }}</p>
      <i>{{ author }}</i>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  * {
    margin: 0;
    font-size: clamp(0.8em, min(2vw, 2vh), 1.5em);
  }

  a {
    all: unset;
    cursor: pointer;
    display: flex;

    height: min-content;
    width: 95%;
    background-color: rgba(194, 245, 107, 0.6);
    border-radius: 0.5em;
    padding: 0 1em;
    padding-left: 0;

    transition: all 100ms ease-in-out;
    box-shadow: 5px 10px 5px 5px rgba(26, 94, 60, 0.25);
    filter: saturate(0.7);

    &:hover {
      scale: 1.03;
      filter: brightness(1.1);
      filter: saturate(1);
      box-shadow: 5px 10px 20px 5px rgba(26, 94, 60, 0.25);
    }
  }

  img {
    max-height: 15vh;
    height: 100%;
    width: auto;
    aspect-ratio: 1 / 1;
    border-radius: 0.5em;
    padding-right: 0.7em;
  }

  div {
    width: 100%;
    position: relative;
    padding: 3px;
  }

  h3 {
    padding-bottom: 3px;
  }

  i {
    position: absolute;
    bottom: 10%;
    right: 3%;
    font-size: 0.7em;
    padding: 2px;
  }
</style>
