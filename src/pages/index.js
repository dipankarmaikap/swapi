import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="hello">Hello Everyone</h1>
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
    <div className="todos">
      <h4>Next Todos</h4>
      <ul>
        <li>Add Images for each section</li>
        <li>Add search functionality</li>
        <li>Improve the design</li>
      </ul>
    </div>
    <div className="contactMe ">
      <h2 className="eTitles">Contact Me</h2>
      <a href="mailto:dipankarmaikap477@gmail.com" target="_top">
        Email Me
      </a>
    </div>
  </Layout>
)

export default IndexPage
