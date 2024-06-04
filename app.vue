<template>
  <NuxtLayout>
    <template #header>
      <NavigationHeader />
    </template>
    <template #main>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Blogologna',
    meta: [
      { name: 'charset', content: 'UTF-8' },
      { name: 'author', content: 'Colby Ackerman' },
      { name: 'description', content: 'A buncha baloney' },
      {
        name: 'keywords',
        content:
          'Bologna, Boloney, Blog, Realm, Metaphysics, Jungle, Depression, ADHD, Bipolar, Disorder, Help, Self, Alone, Lonely, Psychosis',
      },
    ],
  });
</script>
