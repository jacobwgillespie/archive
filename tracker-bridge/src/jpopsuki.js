import Nightmare from 'nightmare';
import winston from 'winston';

const nightmare = Nightmare({
  show: false,
  typeInterval: 1,
});

const freeleechURL = 'https://jpopsuki.eu/ajax.php?section=torrents&artistname=&action=advanced&torrentname=&remastertitle=&filelist=&bitrate=&format=&media=&year=&freeleech=1&remastered=&searchtags=&tags_type=0&order_by=s3&order_way=desc';

export default async () => {
  const page = nightmare
    .on('console', (type, ...args) => { winston[type](...args); })
    .goto(freeleechURL);

  let url = await page.url();
  if (url === 'https://jpopsuki.eu/login.php') {
    await page
      .type('#username', 'jacobwg')
      .type('#password', '56zc893g')
      .check('input[name=keeplogged]')
      .click('.submit')
      .goto(freeleechURL);
  }

  url = await page.url();
  if (url !== freeleechURL) {
    winston.error(`Unable to load freeleech page, instead loaded ${url}`);
  }

  const links = await page.evaluate(() =>
    [].slice.call(document.querySelectorAll('a')).map(
      e => ({
        url: e.href,
        title: e.getAttribute('title'),
        text: e.innerHTML,
      }),
    ),
  );

  const titles = {};

  links.forEach((link) => {
    const matches = link.url.match(/torrentid=(\d+)/);
    if (matches) {
      titles[matches[1]] = link.text;
    }
  });

  return links.filter(
    link => link.text === 'DL',
  ).map((link) => {
    const torrentID = link.url.match(/&id=(\d+)/)[1];
    return {
      url: link.url,
      title: titles[torrentID] || link.text,
    };
  });
};
