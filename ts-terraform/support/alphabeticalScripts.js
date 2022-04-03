// @ts-check
const utils = require('@monorepolint/utils')
const jestDiff = require('jest-diff').default
const r = require('runtypes')

module.exports = {
  check: function expectAlphabeticalDependencies(context) {
    checkAlpha(context, 'scripts')
  },
  optionsRuntype: r.Undefined,
}

function checkAlpha(context, block) {
  const packageJson = context.getPackageJson()
  const packagePath = context.getPackageJsonPath()
  const dependencies = packageJson[block]
  if (dependencies === undefined) {
    return
  }
  const actualOrder = Object.keys(dependencies)
  const expectedOrder = actualOrder.slice().sort() // sort mutates, so we need to copy the previous result
  if (!arrayOrderCompare(actualOrder, expectedOrder)) {
    context.addError({
      file: packagePath,
      message: `Incorrect order of ${block} in package.json`,
      longMessage: jestDiff(expectedOrder, actualOrder, {expand: true}),
      fixer: () => {
        const expectedDependencies = {}
        expectedOrder.forEach((dep) => {
          expectedDependencies[dep] = dependencies[dep]
        })
        const newPackageJson = {...packageJson}
        newPackageJson[block] = expectedDependencies
        utils.writeJson(packagePath, newPackageJson)
      },
    })
  }
}

function arrayOrderCompare(a, b) {
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      return false
    }
  }
  return true
}
