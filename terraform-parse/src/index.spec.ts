/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import path from 'path'
import {parseModule} from '.'

it('should correctly parse HCL module', async () => {
  const metadata = await parseModule(path.join(__dirname, '../support/module'))
  expect(metadata).toMatchSnapshot()
})

it('should error when parsing a broken HCL module', async () => {
  const metadata = parseModule(path.join(__dirname, '../support/broken-module'))
  return expect(metadata).rejects.toMatchSnapshot()
})
