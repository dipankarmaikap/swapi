import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <div className="aboutProject">
      <h2>About Project</h2>
      <p>
        I created this site mainly for FUN. But along the way i've learned manny
        cool things. I tried to reuse existing components through out the site.
      </p>
    </div>
    <div className="toolsUsed">
      <h3>Tools Used</h3>
      <p>
        This site is created using awsome{" "}
        <span>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gatsbyjs.org/"
          >
            GatsbyJS
          </a>
        </span>
        . All the data is coming from
        <span>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://swapi.co/">
            SWAPI
          </a>
        </span>
        .
      </p>
    </div>
  </Layout>
)

export default IndexPage
