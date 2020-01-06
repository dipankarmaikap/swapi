import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "../utils/box"
const PlanetsPageTemplate = ({ pageContext }) => {
  console.log(pageContext.specie)
  return (
    <Layout>
      <SEO title={pageContext.specie.name} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Species/<span className="bcrum">{pageContext.specie.name}</span>
          </h1>
          <hr />
        </div>
        <div className={`titleGrp`}>
          <p className="titleCover">{pageContext.specie.name}</p>
          <h1 className="title">{pageContext.specie.name}</h1>
        </div>
        <h2 className="pEtitles">Available info about the specie</h2>
        <div className="planateContainer itemGrid ">
          <Box title="Hair Color" value={pageContext.specie.hairColor} />
          <Box title="Language" value={pageContext.specie.language} />
          <Box title="Skin Color" value={pageContext.specie.skinColor} />
          <Box title="Eye Color" value={pageContext.specie.eyeColor} />
          <Box title="Designation" value={pageContext.specie.designation} />
          <Box
            title="Classification"
            value={pageContext.specie.classification}
          />
          <Box
            title="Average Lifespan"
            value={pageContext.specie.averageLifespan}
          />
          <Box
            title="Average Height"
            value={pageContext.specie.averageHeight}
          />
        </div>
      </div>
    </Layout>
  )
}

export default PlanetsPageTemplate
