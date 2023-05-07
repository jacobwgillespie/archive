import 'source-map-support/register';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import striptags from 'striptags';
import toTitleCase from 'to-title-case';

// The page URL to scrape

const PAGE_URL = 'https://www.wearethorn.org/our-work-to-stop-child-sexual-exploitation/';

// CSS selectors and strings

const PROJECT_CONTAINER_SELECTOR = '.wpb_content_element';
const PROJECT_BUTTON_SELECTOR = '.nectar-button';
const PROJECT_BUTTON_TEXT = ['EXPLORE THE RESEARCH', 'EXPLORE THE PROJECT'];

// Utility methods

const htmlToText = html => striptags(html).replace('&nbsp;', ' ').trim();

// Parser functions

const scrapeOutboundLinks = (dom) => {
  // Fetch all links, removing any fragments and filtering the current page
  const links = Array.from(
    dom.window.document.querySelectorAll('a'),
  ).map(
    el => el.href.replace(/#[^#]*$/, ''),
  ).filter(
    href => href !== PAGE_URL && href !== '',
  );

  // Return unique set of links
  return Object.keys(links.reduce((obj, href) => ({
    ...obj,
    [href]: true,
  }), {}));
};

const scrapeProjects = (dom) => {
  const projects = [];

  const scanForProjectWrappers = (el) => {
    // Find the deepest project wrapper elements
    const childWrappers = Array.from(el.querySelectorAll(PROJECT_CONTAINER_SELECTOR));
    if (childWrappers.length !== 0) {
      childWrappers.forEach(child => scanForProjectWrappers(child));
      return;
    }

    // Verify that a project button exists in the wrapper
    const projectButton = el.querySelector(PROJECT_BUTTON_SELECTOR);
    if (!projectButton) {
      return;
    }

    // Ensure the button is for a project
    const buttonText = htmlToText(projectButton.innerHTML).trim();
    if (!PROJECT_BUTTON_TEXT.includes(buttonText.toUpperCase())) {
      return;
    }

    // Extract the project information
    const project = {
      title: toTitleCase(htmlToText(el.querySelector('h3').innerHTML)),
      description: htmlToText(el.querySelector('p').innerHTML),
    };
    projects.push(project);
  };

  // Scan for projects and return what is found
  scanForProjectWrappers(dom.window.document);
  return projects;
};

// Main function

const run = async () => {
  // Fetch page HTML
  const pageBody = await fetch(PAGE_URL).then(
    res => res.text(),
  );

  // Parse the HTML into a fake DOM
  const dom = new JSDOM(pageBody, { url: PAGE_URL });

  // Scrape for links and projects and print the results as JSON
  console.log(JSON.stringify({
    links: scrapeOutboundLinks(dom),
    projects: scrapeProjects(dom),
  }, null, 2));
};

// Run the application

run().catch(
  err => console.error(err.stack),
);
