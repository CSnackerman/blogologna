<template>
  <div class="whoami-page">
    <h2>Who am I?</h2>
    <p>Hey there :) my name is Colby—sometimes I go by Col.</p>
    <p>
      I have lived in Missouri for my entire life—mostly in the greater St. Louis area. I also lived
      in Rolla and Springfield for a few years while I was in university.
    </p>

    <p>
      I graduated with my bachelors in computer science at the
      <span style="text-decoration: underline; text-decoration-thickness: 1px"
        >University of Missouri - St. Louis (UMSL)</span
      >
    </p>
    <p>
      <span>I like playing and making games.</span>
      <span class="shrink">(mostly playing haha)</span>
    </p>
    <div style="margin-left: 2rem; font-size: 0.9rem">
      <label>Lately I've been playing</label>
      <ul>
        <li>Elden Ring (DLC)</li>
        <li>Cocoon</li>
      </ul>
    </div>

    <p>
      Lately I have just been working on a pair of projects.
      <span class="shrink">(this is one of them)</span>
    </p>
    <div class="check-it-out">
      <label>Check it out!</label>
      <a href="https://resume-fishing.web.app/">Gone Fishing</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .check-it-out {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > label {
      position: relative;
      font-weight: bold;

      &::after {
        content: '*work in progress';
        padding-left: 2px;
        color: green;
        position: absolute;
        width: max-content;
        top: 0;
        left: 100%;
        font-size: 0.55em;
        font-weight: normal;
      }
    }

    & > a {
      all: unset;
      padding: 1em;
      color: blue;
      transition: all 150ms ease-in;

      &:hover {
        color: cyan;
        font-size: 1.2em;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        text-decoration: underline;
        text-underline-offset: 7px;
        text-decoration-thickness: 2px;
        cursor: pointer;

        &::after {
          content: '🎣';
        }
        &::before {
          content: '🐟';
        }
      }
    }
  }

  .note {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    font-size: 0.7em;
  }

  .shrink {
    font-size: 0.7em;
  }
</style>
