import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultTitle = ''
const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" key="head:charset" />
    <title key="head:title">{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} key="head:description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" key="head:viewport" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" key="head:touch-icon" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" key="head:apple-touch-icon" />
    {/* <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" key="head:mask-icon" /> */}
    <link rel="icon" href="/static/favicon.ico" key="head:icon" />
    <meta property="og:url" content={props.url || defaultOGURL} key="head:og:url" />
    <meta property="og:title" content={props.title || defaultTitle} key="head:og:title" />
    <meta property="og:description" content={props.description || defaultDescription} key="head:og:description" />
    <meta property="og:type" content="website" key="head:og:type" />
    <meta name="twitter:site" content={props.url || defaultOGURL} key="head:twitter:site" />
    <meta name="twitter:card" content="summary_large_image" key="head:twitter:card" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} key="head:twitter:image" />
    <meta property="og:image" content={props.ogImage || defaultOGImage} key="head:og:image" />
    <meta property="og:image:width" content="1200" key="head:og:image:width" />
    <meta property="og:image:height" content="630" key="head:og:image:height" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
