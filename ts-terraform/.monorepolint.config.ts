import {Config} from '@monorepolint/core'

const tsconfig: Config = {
  rules: {
    ':standard-tsconfig': {
      options: {
        templateFile: './support/tsconfig.template.json',
      },
      excludePackages: ['@ts-terraform/config-typescript'],
    },
  },
}

const config: Config = {
  rules: {
    ...tsconfig.rules,

    ':file-contents': {
      options: {
        file: '.gitignore',
        templateFile: './support/template.gitignore',
      },
    },

    ':consistent-dependencies': true,

    ':package-script': {
      options: {
        scripts: {
          clean: 'rm -rf dist *.tsbuildinfo',
          build: 'tsc -b',
          watch: 'tsc -b -w',
        },
      },
      excludePackages: ['@ts-terraform/config-typescript'],
    },

    ':package-entry': [
      {
        options: {
          entries: {
            license: 'MIT',
            // funding: {
            //   type: 'GitHub',
            //   url: 'https://github.com/sponsors/jacobwgillespie',
            // },
            // publishConfig: {
            //   access: 'public',
            // },
          },
        },
      },
      {
        options: {
          entries: {
            main: './dist/index.js',
            types: './dist/index.d.ts',
            // files: ['dist'],
          },
        },
        excludePackages: ['@ts-terraform/config-typescript'],
      },
    ],

    ':alphabetical-dependencies': true,
    './support/alphabeticalScripts': true,

    ':package-order': {
      options: {
        order: [
          'name',
          'version',
          'description',
          'author',
          'contributors',
          'url',
          'license',
          'private',
          'engines',
          'bin',
          'main',
          'module',
          'types',
          'typings',
          'style',
          'sideEffects',
          'workspaces',
          'husky',
          'lint-staged',
          'files',
          'scripts',
          'publishConfig',
          'resolutions',
          'dependencies',
          'peerDependencies',
          'devDependencies',
          'optionalDependencies',
        ],
      },
    },
  },
}

module.exports = process.env.TSBUILD ? tsconfig : config
