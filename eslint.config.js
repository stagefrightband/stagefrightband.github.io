import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactApp from 'eslint-config-react-app';

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  js.configs.recommended,
  react.configs.recommended,
  ...compat.config({
    extends: ['react-app', 'react-app/jest'],
  }),
];