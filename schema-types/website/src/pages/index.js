import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'

// Strip out README images
const components = {img: () => null}

export default function Readme({data}) {
  const {mdx} = data
  const {body} = mdx

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query {
    mdx(parent: {id: {eq: "readme"}}) {
      body
    }
  }
`
