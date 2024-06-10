<template>
  <div class="login-page">
    <form id="login-form">
      <span class="title">LOG IN</span>
      <div :class="errorClass">{{ error }}</div>
      <div class="email-container">
        <label
          for="email-input"
          :class="{ pulsing: isEmailFocused }"
        >
          email
        </label>
        <input
          id="email-input"
          v-model="email"
          type="email"
          placeholder="enter your email"
          @focus="isEmailFocused = true"
          @focusout="isEmailFocused = false"
        />
      </div>
      <div class="password-container">
        <label
          for="password-label"
          :class="{ pulsing: isPasswordFocused }"
        >
          password
        </label>
        <div class="password-input-container">
          <input
            id="password-input"
            ref="passwordInput"
            v-model="password"
            :type="isPasswordVisible === true ? 'text' : 'password'"
            placeholder="enter your password"
            @focus="isPasswordFocused = true"
            @focusout="isPasswordFocused = false"
          />
          <button
            id="eyeball"
            @click.prevent="togglePasswordVisible"
          >
            <Icon
              v-if="isPasswordVisible"
              name="fluent:eye-20-filled"
            />
            <Icon
              v-else
              name="fluent:eye-hide-20-filled"
            />
          </button>
        </div>
        <div class="login-btn-container">
          <button
            class="login-btn"
            @click.prevent="login"
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  // state refs
  const email = ref<string>('');
  const password = ref<string>('');
  const isPasswordVisible = ref<boolean>(false);
  const isEmailFocused = ref<boolean>(false);
  const isPasswordFocused = ref<boolean>(false);
  const error = ref<string | null>(null);

  // element refs
  const passwordInput = ref<HTMLInputElement>();

  // computed styles
  const errorClass = computed(() => ({
    error: true,
    hidden: error.value === null,
  }));

  function login() {
    try {
      const issues = [];
      if (email.value.length === 0 || !isValidEmail(email.value)) {
        issues.push('invalid email');
      }
      if (password.value.length < 10) {
        issues.push('password requires 10 characters');
      }

      if (issues.length > 0) {
        throw createError(issues.join(' & '));
      } else {
        error.value = null;
      }
    } catch (err) {
      if (err instanceof Error) {
        const message = err.message.replace(/Error: /g, '');
        error.value = message;
      }
    }
  }

  function togglePasswordVisible() {
    isPasswordVisible.value = !isPasswordVisible.value;
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    to {
      transform: translate(-25%, -25%) rotate(360deg);
    }
    from {
      transform: translate(-25%, -25%) rotate(0deg);
    }
  }

  @keyframes pulse {
    to {
      transform: scale(1.1);
    }
  }

  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: min-content;
    // padding: 1em;
  }

  .login-page::after {
    content: '';
    position: absolute;
    background-image: url('~/assets/svg/logo.svg');
    background-repeat: no-repeat;
    padding: 3em;
    width: 150%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    top: 0;
    left: 0;
    z-index: -10;

    animation: spin 30s linear infinite;
  }

  .title {
    position: relative;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, olive, yellow);
    filter: drop-shadow(2px 2px 1px green);
  }

  #login-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    & > div {
      display: flex;
      flex-direction: column;
      max-width: fit-content;
      padding: 0.2em;
    }
  }

  label {
    user-select: none;
    font-size: 0.8em;
    font-weight: bold;
    color: greenyellow;
    text-shadow: black 1px 2px 1px;
    margin-bottom: 2px;
  }

  input[type='email'],
  input[type='password'],
  input[type='text'] {
    height: 1.4em;
    padding: 0.3em;
    background-color: goldenrod;
    border: 2px solid transparent;
    border-radius: 0.2em;
    transition: all 300ms ease-in-out;

    &::placeholder {
      color: darkslategray;
    }

    &:focus {
      border: 2px solid pink;
      outline: none;
    }
  }

  .pulsing {
    transform-origin: bottom left;
    animation: pulse 300ms ease-in-out infinite alternate;
  }

  #eyeball {
    all: unset;
    display: grid;
    place-content: center;
    position: absolute;
    right: 0;
    bottom: 50%;
    padding: 5px;
    cursor: pointer;
    transform: translateY(50%);
  }

  .password-container {
    width: fit-content;
  }

  .password-input-container {
    position: relative;
  }

  .login-btn-container {
    display: flex;
    justify-content: end;
    padding: 0.7em;
    padding-right: 0;
  }

  .login-btn {
    all: unset;
    font-size: 0.8em;
    padding: 0.3em 0.5em;
    width: fit-content;
    background-color: aquamarine;
    border: 1px solid blue;
    border-radius: 0.5em;
    cursor: pointer;
  }

  .error {
    height: 2em;
    max-width: min-content;
    font-size: 0.7em;
    text-align: end;
    color: red;
    text-shadow: 0px 1px 1px black;
    text-decoration: dashed underline;
    text-decoration-thickness: 1px;
    text-decoration-color: red;
    text-underline-offset: 3px;
  }

  .hidden {
    opacity: 0;
  }
</style>
