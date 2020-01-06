import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "../utils/box"
const PersonsPageTemplate = ({ pageContext }) => {
  console.log(pageContext.person)
  return (
    <Layout>
      <SEO title={pageContext.person.name} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Characters/<span className="bcrum">{pageContext.person.name}</span>
          </h1>
          <hr />
        </div>
        <div className="titleGrp ">
          <p className="titleCover">{pageContext.person.name}</p>
          <h1 className="title">{pageContext.person.name}</h1>
        </div>
        <h2 className="pEtitles">Available info about the Character</h2>
        <div className="planateContainer itemGrid ">
          <Box title="Hair Color" value={pageContext.person.hairColor} />
          <Box title="Height" value={pageContext.person.height} />
          <Box title="Skin Color" value={pageContext.person.skinColor} />
          <Box title="Eye Color" value={pageContext.person.eyeColor} />
          <Box title="Gender" value={pageContext.person.gender} />
          <Box title="Birth Year" value={pageContext.person.birthYear} />
          <Box title="Mass" value={pageContext.person.mass} />
        </div>
      </div>
    </Layout>
  )
}

export default PersonsPageTemplate
