<template>
  <ul class="password-requirements">
    <li>Password Requirements</li>
    <li>
      <div :style="{ color: errors.tooShort ? redColor : greenColor }">10+ characters</div>
      <input
        type="checkbox"
        checked="true"
        :style="{ opacity: errors.tooShort ? 0 : 1 }"
      />
    </li>
    <li>
      <div :style="{ color: errors.missingCapital ? redColor : greenColor }">
        1+ capital letters
      </div>
      <input
        type="checkbox"
        checked="true"
        :style="{ opacity: errors.missingCapital ? 0 : 1 }"
      />
    </li>
    <li>
      <div :style="{ color: errors.missingNumeric ? redColor : greenColor }">
        1+ number characters
      </div>
      <input
        type="checkbox"
        checked="true"
        :style="{ opacity: errors.missingNumeric ? 0 : 1 }"
      />
    </li>
    <li>
      <div :style="{ color: errors.missingSpecial ? redColor : greenColor }">
        1+ special characters
      </div>
      <input
        type="checkbox"
        checked="true"
        :style="{ opacity: errors.missingSpecial ? 0 : 1 }"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps<{
    errors: RegisterPasswordError;
  }>();

  const redColor = 'red';
  const greenColor = 'lightgreen';
</script>

<style scoped lang="scss">
  * {
    pointer-events: none;
    transition: all 200ms ease-in-out;
  }

  .password-requirements {
    padding: 0.5em;
    margin: 0;
    width: max-content;
    list-style: none;

    & > li {
      display: flex;
      justify-content: space-between;
    }

    & > :first-child {
      font-weight: bold;
      color: orange;
      text-shadow: 1px 1px 0px black;
      text-decoration: underline;
      text-underline-offset: 3px;
      padding: 5px;
    }

    & > li:not(:first-child) {
      color: red;
      text-shadow: 1px 1px 0px black;
    }
  }
  input[type='checkbox'] {
    scale: 1.2;
  }
</style>
