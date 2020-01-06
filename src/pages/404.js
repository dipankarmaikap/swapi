import React from "react"
import { Link } from "gatsby"
import { useImagedata } from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
const NotFoundPage = () => {
  const { Yoda } = useImagedata()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="seo">
        <div className="seoImage">
          <Img fluid={Yoda.childImageSharp.fluid}></Img>
          <p className="copyRight">
            © Image downloaded from google, i do not own this image.
          </p>
        </div>
        <h1>Hello, Yoda my name is</h1>
        <p>
          Sorry, The page i couldn't find you ware looking.
          <br /> Return to home page i suggest you.
        </p>
        <Link className="seoPageBtn" to="/">
          Go to the main page
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
