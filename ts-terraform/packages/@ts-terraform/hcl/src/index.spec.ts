// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="jest" />

import 'jest'

import {parse} from '.'

const examples = [
  'block {}\n',
  'block {}',
  'block {}block {}\n',
  'block { block {} }\n',
  'block "foo" {}\n',
  'block foo {}\n',
  'block "invalid ${not_allowed_here} foo" {}\n',
  'a = 1\n',
  'a = 1',
  'a = "hello ${true}"\n',
  'a = "hello $${true}"\n',
  'a = "hello %%{true}"\n',
  'a = "hello $$"\n',
  'a = "hello $"\n',
  'a = "hello %%"\n',
  'a = "hello %"\n',
  'a = "hello!"\n',
  'a = "\\u2022"\n',
  'a = "\\uu2022"\n',
  'a = "\\U0001d11e"\n',
  'a = "\\u0001d11e"\n',
  'a = "\\U2022"\n',
  'a = "\\u20m2"\n',
  'a = "\\U00300000"\n',
  'a = "\\Ub2705550"\n',
  'a = <<EOT\nHello\nEOT\nb = "Hi"',
  'a = foo.bar\n',
  'a = foo.0.1.baz\n',
  'a = "${var.public_subnets[count.index]}"\n',
  'a = "${var.public_subnets[*]}"\n',
  'a = 1 # line comment\n',
  'a = [for k, v in foo: v if true]\n',
  'a = [for k, v in foo: k => v... if true]\n',
  'a = 1,',
  'a = `str`',
  'a = sort(data.first.ref.attr)[count.index]\n',
  `
thing = {"hello" = {"world" = "world"}}

resource "example" "thing" {
  prop = "123"
  prop2 = 321
}
`,
]

it('should correctly parse HCL', async () => {
  for (const example of examples) {
    const result = await parse('example.hcl', example)
    expect(result).toMatchSnapshot()
  }
})
