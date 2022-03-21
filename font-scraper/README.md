<img src="support/logo.png" width="100" align="right" />

# font-scraper

API server that returns scraped fonts and font stacks given a URL.

## Requirements

* Node 6+
* npm 3+ (or preferably yarn)

## Usage

`npm install` will automatically build the server.

`npm start` or `yarn start` will run the server on port `3000`.  To customize the port, set the `PORT` environment variable.

## Endpoints

### `GET /?url=[URL]`

Fetch the fonts and font stacks in use on the supplied `URL`

**Example**

`GET /?url=https://github.com`

```json
{
  "fonts": [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "Segoe UI",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "sans-serif"
  ],
  "stacks": [
    "Roboto, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
    "Roboto, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif"
  ]
}
```

### `GET /popular`

Fetch the fonts and font stacks in use in the [top 100 Webflow websites](https://webflow.com/discover/popular).

**Example**

`GET /popular`

```json
{
  "fonts": [
    "Wask new webfont",
    "Impact",
    "sans-serif",
    "Inconsolata",
    "monospace",
    "Open Sans",
    "webflow-icons",
    "Fontawesome webfont",
    "Josefin Sans",
    "Clickmedia",
    "Oswald",
    "Arial",
    "Helvetica Neue",
    "Helvetica",
    "Lato",
    "Franchise",
    "IM Fell English SC",
    "Oldstyle",
    "Palatino Linotype",
    "Fontawesome",
    "Coresansg regular",
    "Hirukoblackalternate",
    "..."
  ],
  "stacks": [
    "Roboto, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
    "Roboto, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
    "..."
  ]
}
```

## Future Enhancements

* Ability to crawl sub-links from the root page
* Ability to control when the font detection takes place (to wait for JavaScript elements to appear on the page)

## License

MIT license, see `LICENSE`.
