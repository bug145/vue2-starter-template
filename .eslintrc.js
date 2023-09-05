module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/base',
    'eslint:recommended',
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:nuxt/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue', 'import'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
      },
    ],
    'func-names': ['error', 'as-needed'],
    'vue/require-prop-types': ['error'],
    'vue/require-default-prop': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/attributes-order': ['error'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
      },
    ],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-lone-template': [
      'error',
      {
        ignoreAccessible: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'vue/order-in-components': ['error'],
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'max-len': ['error', { code: 130 }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['b', 'del', 'em', 'i', 's', 'small', 'span', 'strong', 'sub', 'sup', 'u'],
      },
    ],
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 100,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'vm', 'app'],
      },
    ],
    'no-cond-assign': ['error', 'always'],
    'no-unsafe-optional-chaining': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'location',
        message: 'Use window.location instead.',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: 'MemberExpression[property.name=$store]',
            message:
              'Error: Prefer using Vuex mapping methods '
              + '(mapGetters, mapMutations, mapActions) instead of direct $store access in components.',
          },
        ],
      },
    },
  ],
  globals: {
    location: 'writable',
    $nuxt: 'writable',
    app: true,
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': [],
  },
};
