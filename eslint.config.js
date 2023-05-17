import js from '@eslint/js';
import typeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import markdown from 'eslint-plugin-markdown';

export default [
    // reslint recommended
    {
        ignores: ['node_modules'],
        linterOptions: {
            noInlineConfig: true,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // support react
                },
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-console': 'error',
        },
    },

    // prettier
    {
        plugins: {
            prettier,
        },
        rules: {
            ...prettier.configs.recommended.rules,
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    semi: true,
                    singleQuote: true,
                    bracketSameLine: false,
                    singleAttributePerLine: true,
                },
            ],
        },
    },

    // comment/jsdoc
    {
        plugins: {
            jsdoc: jsdoc,
        },
        rules: {
            ...jsdoc.configs.recommended.rules,
        },
    },

    // typescript
    {
        files: ['**/*.{ts,tsx|mts|mtsx}'],
        languageOptions: {
            parser: parserTypeScript,
            parserOptions: {
                project: ['./tsconfig.json'],
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                    globalReturn: true,
                },
                ecmaVersion: 'latest',
            },
        },
        plugins: {
            '@typescript-eslint': typeScript,
        },
        rules: {
            ...typeScript.configs['recommended'].rules,
            ...typeScript.configs['recommended-requiring-type-checking'].rules,
        },
    },

    // react
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            ...react.configs.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
        rules: {
            ...react.configs['jsx-runtime'].rules,
            ...react.configs['recommended'].rules,
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // markdown
    {
        files: ['**/*.md'],
        plugins: {
            markdown,
        },
        processor: 'markdown/markdown',
    },
];
