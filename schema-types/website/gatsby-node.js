const fs = require('fs')
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

  const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'))
  createNode({
    id: 'readme',
    parent: null,
    children: [],
    internal: {
      mediaType: 'text/markdown',
      type: 'CustomReadme',
      content: readme.toString('utf8'),
      contentDigest: createContentDigest(readme.toString('utf8')),
    },
  })
}
