import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,tsx}"],
        ignores: ["dist/**", "eslint.config.js"], // Полностью исключаем папку dist
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                project: ["./tsconfig.app.json", "./tsconfig.node.json"], // TSConfigs
            },
            globals: {
                ...globals.browser,
                React: "readonly",
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/ban-ts-comment": "warn",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
        settings: {
            react: {
                version: "detect", // Автоматически определяет версию React
            },
        },
    },
];