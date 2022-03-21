import fs from 'fs';
import path from 'path';
import phantom from 'phantom';

import parseFonts from './parseFonts';

const detectFonts = fs.readFileSync(path.join(__dirname, '..', 'support', 'detect-fonts.js'), 'utf8');

export const fetchStacks = (url) => {
  let pageInstance;
  let phantomInstance;

  return phantom.create()
  .then(
    (instance) => {
      phantomInstance = instance;
      return instance.createPage();
    }
  )
  .then(
    (page) => {
      pageInstance = page;
      return page.open(url);
    }
  )
  .then(
    () => pageInstance.evaluateJavaScript(detectFonts)
  )
  .then(
    (content) => {
      pageInstance.close();
      phantomInstance.exit();
      return content;
    }
  );
};

export default url => fetchStacks(url).then(stacks => parseFonts(stacks));
