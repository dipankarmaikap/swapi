import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "../utils/box"
const PlanetsPageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.planet.name} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Planets/<span className="bcrum">{pageContext.planet.name}</span>
          </h1>
          <hr />
        </div>
        <div className={`titleGrp`}>
          <p className="titleCover">{pageContext.planet.name}</p>
          <h1 className="title">{pageContext.planet.name}</h1>
        </div>
        <h2 className="pEtitles">Available info about the planet</h2>
        <div className="planateContainer itemGrid ">
          <Box title="Diameter" value={pageContext.planet.diameter} />
          <Box title="Terrain" value={pageContext.planet.terrain} />
          <Box title="Population" value={pageContext.planet.population} />
          <Box
            title="Orbital Period"
            value={pageContext.planet.orbitalPeriod}
          />
          <Box
            title="Rotation Period"
            value={pageContext.planet.rotationPeriod}
          />
          <Box title="Surface Water" value={pageContext.planet.surfaceWater} />
          <Box title="Climate" value={pageContext.planet.climate} />
        </div>
      </div>
    </Layout>
  )
}

export default PlanetsPageTemplate
