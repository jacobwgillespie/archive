import cheerio from 'cheerio'
import FormData from 'form-data'
import got from 'got'
import {CookieJar} from 'tough-cookie'

function extractText(el: CheerioElement) {
  const textChild = el.childNodes.find(el => el.type === 'text')
  return textChild ? textChild.nodeValue : ''
}

function extractAllText(el: CheerioElement): string {
  return `${el.nodeValue ? el.nodeValue : ''}${(el.childNodes || [])
    .map(node => extractAllText(node))
    .join('')}`
}

interface Data {
  username: string
  email: string
  plan: string
  term: string
  status: string
  address: string
  pmb: number
  accountNames: {
    name: string
    type: string
    status: string
  }[]
  accountID: number
}

const emptyData: Data = {
  username: '',
  email: '',
  plan: '',
  term: '',
  status: '',
  address: '',
  pmb: 0,
  accountNames: [],
  accountID: 0,
}

export class USGlobalMail {
  private _cookieJar = new CookieJar()
  private _loggedIn = false
  private _data = emptyData

  async login(username: string, password: string) {
    // Clear cookies
    this._cookieJar = new CookieJar()

    const form = new FormData()
    form.append('username', username)
    form.append('password', password)
    await got.post('https://account.usglobalmail.com/accounts/login/', {
      body: form,
      cookieJar: this._cookieJar,
      throwHttpErrors: false,
    })

    const res = await got('https://account.usglobalmail.com/membership/redirect/', {
      cookieJar: this._cookieJar,
    })

    const body = cheerio.load(res.body)
    if (body('.login-box form.form').length) {
      throw new Error('Invalid login credentials')
    }

    const sections = body('div>h2').toArray()

    const loginDetailsHeader = sections.find(
      header => extractText(header).toLowerCase() === 'login details',
    )
    if (!loginDetailsHeader) {
      throw new Error('Unable to find login details')
    }
    let match = extractAllText(cheerio('p', loginDetailsHeader.parent).toArray()[0]).match(
      /Username: ([^\s]+).*Email: ([^\s]+)/is,
    )
    if (match) {
      this._data.username = match[1]
      this._data.email = match[2]
    }

    const planPreferencesHeader = sections.find(
      header => extractText(header).toLowerCase() === 'plan & preferences',
    )
    if (!planPreferencesHeader) {
      throw new Error('Unable to find plan preferences')
    }
    match = extractAllText(cheerio('p', planPreferencesHeader.parent).toArray()[0]).match(
      /Plan: ([^\n]+)\n.*Term: ([^\n]+)\n.*Status: ([^\n]*)/is,
    )
    if (match) {
      this._data.plan = match[1]
      this._data.term = match[2]
      this._data.status = match[3]
    }

    const mailingAddressHeader = sections.find(
      header => extractText(header).toLowerCase() === 'us mailing address',
    )
    if (!mailingAddressHeader) {
      throw new Error('Unable to find mailing address')
    }
    match = extractAllText(cheerio('p', mailingAddressHeader.parent).toArray()[0]).match(
      /(([\d\s\w.]+) (PMB:\s+(\d+)) ([\d\w\s.,]+)) PMB stands for/is,
    )
    if (match) {
      this._data.address = `${match[2]}\n${match[3]}\n${match[5]}`.replace(/\s{2,}/, ' ')
      this._data.pmb = parseInt(match[4], 10)
    }

    const accountNamesHeader = sections.find(
      header => extractText(header).toLowerCase() === 'account names',
    )
    if (!accountNamesHeader) {
      throw new Error('Unable to find account names')
    }
    const accountNames = []
    for (const row of cheerio('tr', accountNamesHeader.parent).toArray()) {
      const cells = cheerio('td', row)
        .toArray()
        .map(cell => extractText(cell))

      if (cells[0]) {
        accountNames.push({
          name: cells[0],
          type: cells[1],
          status: cells[2],
        })
      }
    }
    this._data.accountNames = accountNames

    const inboxLink = body('a')
      .toArray()
      .find(el => el.attribs.href.includes('/warehouse/inbox/'))
    if (!inboxLink) {
      throw new Error('Unable to find account ID')
    }
    match = inboxLink.attribs.href.match(/\/warehouse\/inbox\/(\d+)\//)
    if (match) {
      this._data.accountID = parseInt(match[1], 10)
    }

    this._loggedIn = true
  }

  async logout() {
    this._cookieJar = new CookieJar()
    this._loggedIn = false
  }

  get username() {
    this.assertLoggedIn()
    return this._data.username
  }

  get email() {
    this.assertLoggedIn()
    return this._data.email
  }

  get plan() {
    this.assertLoggedIn()
    return this._data.plan
  }

  get term() {
    this.assertLoggedIn()
    return this._data.term
  }

  get status() {
    this.assertLoggedIn()
    return this._data.status
  }

  get address() {
    this.assertLoggedIn()
    return this._data.address
  }

  get pmb() {
    this.assertLoggedIn()
    return this._data.pmb
  }

  get accountNames() {
    this.assertLoggedIn()
    return this._data.accountNames
  }

  get accountID() {
    this.assertLoggedIn()
    return this._data.accountID
  }

  private assertLoggedIn() {
    if (!this._loggedIn) {
      throw new Error('Not logged in')
    }
  }
}
