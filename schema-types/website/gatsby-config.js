// @ts-check

module.exports = {
  siteMetadata: {
    title: 'schema-types',
    description: 'Runtime and compile-type type schema definition and validation for TypeScript',
    author: '@jacobwgillespie',
    github: 'https://github.com/schema-types/schema-types',
    githubActions: 'CI',
    npm: 'schema-types',
    logo: '/logo.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {resolve: 'gatsby-theme-clean-docs', options: {}},
  ],
}
