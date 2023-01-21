module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime'
    ],
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        '@typescript-eslint/interface-name-prefix': 'on',
        '@typescript-eslint/explicit-function-return-type': 'on',
        '@typescript-eslint/explicit-module-boundary-types': 'on',
        '@typescript-eslint/no-explicit-any': 'on',
    },
}