/* eslint-disable no-magic-numbers */
module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    rules: {
        "indent": [
            "error", 
            4,
            { "MemberExpression": 1 }
        ],
        "semi": 'error',
        "no-await-in-loop": "error",
        "arrow-body-style": ["error", "as-needed"],
        "no-duplicate-imports": [
            "error", 
            {
                "includeExports": true
            }
        ],
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "block-scoped-var": "error",
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignoreInlineComments": true,
                "ignoreConsecutiveComments": true
            }
        ],
        "complexity": ["warn", 4],
        "consistent-return": "error",
        "vue/html-indent": [
            "error", 4,
            {
                "attribute": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
            }
        ],
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": ["error"],
        "dot-notation": "error",
        "eqeqeq": ["error", "always"],
        "max-classes-per-file": ["error", 1],
        "max-depth": ["error", 3],
        "max-lines": ["error", 250],
        "max-params": ["error", 7],
        "multiline-comment-style": ["error", "starred-block"],
        "no-alert": "warn",
        "no-console": "warn",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-magic-numbers": "error",
        "no-nested-ternary": "error",
        "no-useless-return": "error",
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": false,
                "object": true
            },
            "AssignmentExpression": {
                "array": true,
                "object": false
            }
        }, {
            "enforceForRenamedProperties": false
        }]
    },
};
