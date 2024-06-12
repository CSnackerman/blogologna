<template>
  <div class="email-password-form-container">
    <div
      :class="{
        'email-password-form': true,
        'mode-login': mode === 'login',
        'mode-register': mode === 'register',
      }"
    >
      <div class="title">{{ title.toLocaleUpperCase() }}</div>
      <form
        id="login-form"
        @submit.prevent
        @keydown.enter.prevent="mode === 'login' ? login() : register()"
      >
        <div class="email-container">
          <label for="email-input">
            <span
              class="error-message"
              :style="{ opacity: isEmailErrorVisible ? 1 : 0 }"
            >
              {{ emailErrorMessage }}
            </span>
            <div :class="{ pulsing: isEmailFocused }">email</div>
          </label>
          <input
            id="email-input"
            v-model="email"
            type="email"
            placeholder="enter your email"
            tabindex="0"
            @focus="isEmailFocused = true"
            @focusout="isEmailFocused = false"
          />
        </div>
        <div class="password-container">
          <label for="password-label">
            <span
              class="error-message"
              :style="{ opacity: isPasswordErrorVisible ? 1 : 0 }"
            >
              {{ passwordErrorMessage }}
            </span>
            <div :class="{ pulsing: isPasswordFocused }">password</div>
          </label>
          <div class="password-input-container">
            <input
              id="password-input"
              v-model="password"
              :type="isPasswordVisible === true ? 'text' : 'password'"
              placeholder="enter your password"
              tabindex="0"
              @focus="isPasswordFocused = true"
              @focusout="isPasswordFocused = false"
            />
            <button
              id="eyeball"
              ref="eyeballRef"
              tabindex="-1"
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
              tabindex="0"
              @click.prevent="mode === 'login' ? login() : register()"
            >
              {{ title }}
            </button>
          </div>
        </div>
      </form>
    </div>
    <PasswordRequirements
      class="requirements-checklist"
      :errors="passwordError"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Database } from '~/types/database.types';

  const props = defineProps<{
    mode: 'login' | 'register';
  }>();

  // supabase
  const supabaseClient = useSupabaseClient<Database>();

  // element refs
  const eyeballRef = ref<HTMLButtonElement | null>();

  // state refs

  const title = computed(() => (props.mode === 'login' ? 'Log in' : 'Register'));
  const email = ref<string>('');
  const password = ref<string>('');
  const isPasswordVisible = ref<boolean>(false);
  const isEmailFocused = ref<boolean>(false);
  const isPasswordFocused = ref<boolean>(false);
  const emailError = ref<RegisterEmailError>(defaultRegisterEmailError);
  const passwordError = ref<RegisterPasswordError>(defaultRegisterPasswordError);
  const isPasswordErrorVisible = ref<boolean>(false);
  const isEmailErrorVisible = ref<boolean>(false);
  const emailErrorMessage = ref<string>('');
  const passwordErrorMessage = ref<string>('');
  const supabaseErrorMessage = ref<string | null>(null);

  // watches
  watch(password, validateRegisterPassword);

  // lifecycle hooks
  onMounted(() => {
    validateRegisterEmail();
    validateRegisterPassword();
  });

  // functions
  function validateRegisterEmail() {
    emailError.value = getRegisterEmailErrors(email.value);
  }

  function validateRegisterPassword() {
    passwordError.value = getRegisterPasswordErrors(password.value);
  }

  function isValidRegistrant() {
    validateRegisterEmail();
    validateRegisterPassword();

    let isValid = true;

    if (emailError.value.errorCount > 0) {
      updateRegisterEmailErrorMessages();
      isValid = false;
    }

    if (passwordError.value.errorCount > 0) {
      updateRegisterPasswordErrorMessages();
      isValid = false;
    }

    return isValid;
  }

  function updateRegisterEmailErrorMessages() {
    isEmailErrorVisible.value = true;
    emailErrorMessage.value = getRegisterEmailErrorMessage(emailError.value);

    if (supabaseErrorMessage.value) {
      emailErrorMessage.value = supabaseErrorMessage.value;
    }
  }

  function updateRegisterPasswordErrorMessages() {
    isPasswordErrorVisible.value = true;
    passwordErrorMessage.value = getRegisterPasswordErrorMessage(passwordError.value);
  }

  function clearErrors() {
    isEmailErrorVisible.value = false;
    emailErrorMessage.value = '';

    isPasswordErrorVisible.value = false;
    passwordErrorMessage.value = '';

    supabaseErrorMessage.value = null;
  }

  async function register() {
    clearErrors();

    // client-side guard
    if (!isValidRegistrant()) {
      return;
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: password.value,
      });

      if (!error) {
        console.log('success');
        console.log('data', data);
      } else {
        isEmailErrorVisible.value = true;
        supabaseErrorMessage.value = error.message;
        updateRegisterEmailErrorMessages();

        throw createError(error.message);
      }
    } catch (err) {
      err;
    }
  }

  async function login() {
    // const { error } = await supabaseClient.auth.signInWithPassword({
    //   email: email.value,
    //   password: password.value,
    // });
    // if (error) console.log(error);
  }

  function togglePasswordVisible(e: Event) {
    // hacky fix for weird toggle behavior on enter press
    // aka i suck at bubble/capture
    const t = e.target as HTMLElement;
    if (t !== eyeballRef.value && !['svg', 'path'].includes(t.nodeName)) {
      return;
    }

    isPasswordVisible.value = !isPasswordVisible.value;
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  @keyframes pulse {
    to {
      transform: scale(1.1);
    }
  }

  .requirements-checklist {
    position: fixed;
    top: 65%;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(0, 128, 0, 0.143);
    border-radius: 0.5em;
    // aspect-ratio: 1/1;
    padding: 1.2em;

    // display: grid;
    // place-content: center;
  }

  .email-password-form {
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    max-width: min-content;
  }

  .email-password-form::after {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    padding: 3em;
    width: 14em;
    aspect-ratio: 1/1;
    border-radius: 100%;
    top: 40%;
    left: 50%;
    z-index: -10;

    animation: spin 30s linear infinite;
  }

  .mode-login::after {
    background-image: url('~/assets/svg/logo.svg');
  }

  .mode-register::after {
    background-image: url('~/assets/svg/logo.svg');
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

    & *:focus:not(button) {
      border: 2px solid white;
      border-radius: 0.2em;
    }

    & button:focus {
      border: 1px solid white;
      border-radius: 0.5em;
    }

    & button:active {
      filter: invert(70%);
      text-shadow: 1px 1px 3px purple;
    }

    & button:hover:not(:active) {
      filter: hue-rotate(90deg);
    }

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
    border: 1px solid green;
    border-radius: 0.2em;
    transition: all 200ms ease-in-out;

    &::placeholder {
      color: darkslategray;
    }

    &:focus {
      border: 2px solid rgb(255, 212, 219);
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

    &:focus {
      border: none;
    }
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
    background-color: salmon;
    border: 1px solid green;
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

  .error-message {
    font-size: 0.7em;
    text-align: end;
    color: red;
    text-shadow: 0px 1px 1px black;
    text-decoration: dashed underline;
    text-decoration-thickness: 1px;
    text-decoration-color: red;
    text-underline-offset: 3px;
    overflow: visible;
    text-wrap: wrap;
  }
</style>
