#!/usr/bin/env bash

# Because of a long-running npm issue (https://github.com/npm/npm/issues/3059)
# prepublish runs after `npm install` and `npm pack`.
# In order to only run prepublish before `npm publish`, we have to check argv.
if node -e "process.exit(($npm_config_argv).original[0].indexOf('pu') === 0)"; then
  exit 0;
fi

# Publishing to NPM is currently supported by Travis CI, which ensures that all
# tests pass first and the deployed module contains the correct file struture.
# In order to prevent inadvertently circumventing this, we ensure that a CI
# environment exists before continuing.
if [ "$CI" != true ]; then
  echo "\n\n\n  \033[101;30m Only Travis CI can publish to NPM. \033[0m" 1>&2;
  echo "  Ensure git is left is a good state by backing out any commits and deleting any tags.\n\n\n" 1>&2;
  exit 1;
fi;

# Build before Travis CI publishes to NPM
npm run build;