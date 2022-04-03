import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default function Changelog({data}) {
  const {mdx} = data
  const {body} = mdx

  return <MDXRenderer>{body}</MDXRenderer>
}

export const pageQuery = graphql`
  query {
    mdx(parent: {id: {eq: "changelog"}}) {
      body
    }
  }
`
