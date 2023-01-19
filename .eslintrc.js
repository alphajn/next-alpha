module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.tsx', '.json'],
            },
        },
    },
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        React: true,
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        indent: [2, 4],
        // 每行最大长度
        'max-len': [
            2,
            {
                code: 150,
            },
        ],
        quotes: ['error', 'single'],
        'react/react-in-jsx-scope': 0,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                parser: 'flow',
            },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['jsx', 'global'],
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
            },
        ],
    },
};
