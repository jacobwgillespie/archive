import unirest from 'unirest';

const promiseGet = url =>
  new Promise((resolve) => {
    unirest.get(url).end((response) => {
      resolve(response.body);
    });
  });


export default () =>
  Promise.all([
    promiseGet('https://webflow.com/api/discover/sites/popular?limit=20&offset=0&sort=-popularOn'),
    promiseGet('https://webflow.com/api/discover/sites/popular?limit=20&offset=20&sort=-popularOn'),
    promiseGet('https://webflow.com/api/discover/sites/popular?limit=20&offset=40&sort=-popularOn'),
    promiseGet('https://webflow.com/api/discover/sites/popular?limit=20&offset=60&sort=-popularOn'),
    promiseGet('https://webflow.com/api/discover/sites/popular?limit=20&offset=80&sort=-popularOn'),
  ]).then(
    (res) => {
      const slugs = [];

      res.forEach(
        r => r.forEach(
          (site) => {
            slugs.push(site.slug);
          }
        )
      );

      return slugs;
    }
  ).then(
    slugs => Promise.all(
      slugs.map(
        slug => promiseGet(`https://webflow.com/api/discover/sites/${slug}`)
          .then(data => `https://${data.siteProfile.site.shortName}.webflow.io`)
      )
    )
  );
