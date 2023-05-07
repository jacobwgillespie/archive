# Thorn Scraper

A simple CLI application to extract outbound links and project titles and descriptions from Thorn's [Our Work](https://www.wearethorn.org/our-work-to-stop-child-sexual-exploitation/) webpage.

## Requirements

* Node 6+
* Yarn (ideally)
* `npm` (if yarn is unavailable)

## Installation

Cloning the repository and running `yarn install` should be enough to install all dependencies and set up the application:

```bash
$ yarn install
```

## Usage

Run the CLI script in `./bin/thorn-scraper`:

```bash
$ ./bin/thorn-scraper
```

**Example Output**

```json
{
  "links": [
    "https://www.wearethorn.org/",
    "https://www.wearethorn.org/donate",
    "https://www.wearethorn.org/child-sexual-exploitation-and-technology/",
    "https://www.wearethorn.org/thorn-innovation-lab/",
    ...
  ],
  "projects": [
    {
      "title": "Research",
      "description": "A large part of our work comes from informed research collected in the field, which helps our team, along with our many partners, remain on the cutting edge of technology."
    },
    {
      "title": "Spotlight: Human Trafficking Intelligence and Leads",
      "description": "There are more than 100,000 escort ads posted every day in this country. Somewhere in that pile of data, are children who are bought and sold online for sex. How can law enforcement sift through massive amounts of data to focus their time on the most vulnerable victims?"
    },
    ...
  ]
}
```

The application prints a unique list of outbound links as an array as well as an array of project objects containing a `title` and a `description`.

## Development

The `package.json` defines two scripts that can be utilized for development:

* `yarn run build` - builds the JavaScript source located in `src` into the directory `dist`
* `yarn run lint` - runs the ESLint linter on all files located in `src`
* `yarn run watch` - watches the JavaScript source in `src` for changes and automatically runs the `build` script

The `build` script is also set up as a `postinstall` task, so it will automatically run after installing any dependencies.

## License

MIT license - see `LICENSE`
