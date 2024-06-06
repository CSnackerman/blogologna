// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// prettier-ignore
export default withNuxt({
  rules: { 
    'vue/no-multiple-template-root': 0, 
    'vue/html-self-closing': 0,
  },
});
