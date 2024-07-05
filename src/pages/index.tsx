import * as React from "react"
import type * as CSS from 'csstype';
import { HeadFC, Link, PageProps } from "gatsby"
import BusinessCardImage from "./../images/BusinessCard.svg"

const pageStyles = {
  color: "#232129",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
}
const headingAccentStyles = {
  color: "#663399",
}

const imageStyle: CSS.Properties = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '75%',
  objectFit: 'contain',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Mon Petit Couvreur ⛏️🏠 <span style={headingAccentStyles}>— Under Construction! 🚧👷🏻‍♂️<Link to='/index-new'>🏗️</Link></span>
      </h1>
      <img style={imageStyle} src={BusinessCardImage} alt="Business card" />
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mon Petit Couvreur</title>
