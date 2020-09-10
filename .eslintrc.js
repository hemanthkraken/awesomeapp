module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'detox'],
    rules: {
        'prettier/prettier': 'error',
        'react-native/no-inline-styles': 0,
    },
    env: {
        jest: true,
    },
};
