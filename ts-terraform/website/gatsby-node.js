const fs = require('fs')
const globby = require('globby')
const path = require('path')

exports.sourceNodes = async ({actions, createContentDigest}) => {
  const {createNode} = actions

  const changelog = fs.readFileSync(path.join(__dirname, '..', 'CHANGELOG.md'))
  createNode({
    id: 'changelog',
    parent: null,
    children: [],
    internal: {
      mediaType: 'text/markdown',
      type: 'CustomChangelog',
      content: changelog.toString('utf8'),
      contentDigest: createContentDigest(changelog.toString('utf8')),
    },
  })

  const readmePaths = await globby([path.join(__dirname, '../packages/**/README.md'), '!**/node_modules/**'])
  for (const readmePath of readmePaths) {
    const contents = fs.readFileSync(readmePath)
    const id = path.relative(path.join(__dirname, '../packages'), path.dirname(readmePath))

    createNode({
      id,
      parent: null,
      children: [],
      internal: {
        mediaType: 'text/markdown',
        type: 'ModuleReadme',
        content: contents.toString('utf8'),
        contentDigest: createContentDigest(contents.toString('utf8')),
      },
    })
  }
}

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions
  const moduleReadmeTemplate = require.resolve(`./src/templates/ModuleReadme.js`)
  const result = await graphql(`
    {
      allMdx(filter: {parent: {internal: {type: {eq: "ModuleReadme"}}}}) {
        edges {
          node {
            parent {
              id
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: `modules/${node.parent.id.replace(/^@/g, '')}/`,
      component: moduleReadmeTemplate,
      context: {
        parentID: node.parent.id,
      },
    })
  })
}
