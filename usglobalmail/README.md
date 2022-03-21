# `usglobalmail`

An unofficial Node API module for interacting with the [US Global Mail](https://www.usglobalmail.com/) mail forwarding service.

**NOTE:** this module is unofficial and is in no way endorsed by US Global Mail.

### TODO

- Support reading inbox, trash, bundles, etc
- Add ability to take action on mail items
- Add ability to read billing invoices

## Installation

```
$ yarn add usglobalmail
```

## Usage

```typescript
import USGlobalMail from 'usglobalmail'
;(async () => {
  const usGlobalMail = new USGlobalMail()
  await usGlobalMail.login('username', 'password')

  console.log('US Address', usGlobalMail.address)
  console.log('Account Names', usGlobalMail.accountNames.map(person => person.name))
})()
```

## TypeScript

This library is built with TypeScript and provides its own types bundled with the package itself.

## License

MIT License - see `LICENSE`.
