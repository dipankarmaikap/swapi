import React from "react"
import { Link } from "gatsby"
import { useImagedata } from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
const NotFoundPage = () => {
  const { MiniRobot } = useImagedata()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="seo">
        <div className="seoImage">
          <Img fluid={MiniRobot.childImageSharp.fluid}></Img>
        </div>
        <h1>Awww...I'm sorry</h1>
        <p>
          Sorry, I couldn't find the page you were looking for.
          <br /> I suggest that you return to main sections.
        </p>
        <Link className="seoPageBtn" to="/">
          Go to the main page
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
