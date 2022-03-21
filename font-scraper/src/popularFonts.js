import throat from 'throat';

import { fetchStacks } from './fetchFonts';
import fetchPopularSites from './fetchPopularSites';
import parseFonts from './parseFonts';

const TEN_MINUTES = 10 * 60 * 1000;

let refreshInProgress = false;
let lastUpdated = 0;
let cache = {
  error: 'Initializing cache',
};

const refresh = () => {
  if (refreshInProgress) return;

  refreshInProgress = true;

  fetchPopularSites()
  .then(
    sites => Promise.all(sites.map(throat(4, site => fetchStacks(site))))
  )
  .then(
    (stacks) => {
      const combinedStacks = {};

      stacks.forEach((stack) => {
        combinedStacks[stack] = true;
      });

      return Object.keys(combinedStacks);
    }
  )
  .then(
    stacks => parseFonts(stacks)
  )
  .then(
    (fonts) => {
      cache = fonts;
      lastUpdated = Date.now();
      refreshInProgress = false;
    }
  )
  .catch(
    (error) => {
      cache = { error };
      refreshInProgress = false;
    }
  );
};

export default () => {
  // refresh every 10 minutes
  if (Date.now() - lastUpdated > TEN_MINUTES) {
    refresh();
  }

  return cache;
};
