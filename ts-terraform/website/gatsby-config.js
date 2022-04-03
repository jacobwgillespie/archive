// @ts-check

module.exports = {
  siteMetadata: {
    title: 'ts-terraform',
    description: 'TypeScript tooling for interacting with Terraform',
    author: '@jacobwgillespie',
    github: 'https://github.com/ts-terraform/ts-terraform',
    githubActions: 'CI',
    npm: 'ts-terraform',
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
