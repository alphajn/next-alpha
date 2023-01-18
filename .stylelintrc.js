module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-styled-components'
    ],
    customSyntax: 'postcss-scss',
    overrides: [
        {
            files: ['**/*.tsx'],
            customSyntax: '@stylelint/postcss-css-in-js',
        },
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': [
                    'extends',
                    'each'
                ]
            }
        ],
        'scss/at-rule-no-unknown': true,
        'no-empty-source': true,
        'indentation': 4,
        'max-nesting-depth': 4,
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
    }
}
