import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default function ModuleReadme({data}) {
  const {mdx} = data
  const {body} = mdx

  return <MDXRenderer>{body}</MDXRenderer>
}

export const pageQuery = graphql`
  query($parentID: String) {
    mdx(parent: {id: {eq: $parentID}}) {
      body
    }
  }
`
