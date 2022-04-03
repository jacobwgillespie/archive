module.exports = {
  root: true,
  extends: [require.resolve('@ts-terraform/config-eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./packages/*/tsconfig.json', './packages/@ts-terraform/*/tsconfig.json'],
  },
}
