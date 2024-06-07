<template>
  <h2>Welcome to Blogologna</h2>
  <p>
    Pronounced
    <span class="pronounced">
      <i>
        <strong>Blog-uh-log-nuh</strong>
      </i>
    </span>
    or
    <i><strong>Blog-uh-lōn-ee</strong></i>
    or any way you please.
  </p>
  <p>These days journalism/blog sites are corrupted and polluted by ads, pop-ups, and pay-walls.</p>
  <p>Enjoy a simple, straightforward, and tidy experience as both publisher and reader.</p>
  <p>No registration required.</p>
  <p class="ads">
    <span class="zero">Zer<span class="zero-o">ø</span></span>
    ads.
  </p>
  <p>
    Data is open and free. You can view statistics about authors, articles, comments, and
    commenters.
  </p>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .pronounced {
    font-size: 1.1em;
  }

  .ads {
    margin-left: 2em;
  }

  .zero {
    font-size: 1.5em;
    display: flex;
    align-content: center;
    display: inline-block;
    color: rgb(105, 141, 52);
    transform: rotate(37deg);
    font-weight: bold;
    // background-color: rgb(93, 96, 23);
    background-image: linear-gradient(30deg, rgb(93, 96, 23), rgb(51, 52, 12));
    padding: 0.3em;
    border-radius: 100%;
    aspect-ratio: 1/0.8;
    box-shadow: 0 5px 10px rgba(33, 33, 33, 0.636);
  }

  .zero-o {
    color: rgb(187, 58, 58);
  }
</style>
