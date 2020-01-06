import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "../utils/box"
const StarshipPageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.starship.name} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Starships/<span className="bcrum">{pageContext.starship.name}</span>
          </h1>
          <hr />
        </div>
        <div className="titleGrp ">
          <p className="titleCover">{pageContext.starship.name}</p>
          <h1 className="title">{pageContext.starship.name}</h1>
        </div>
        <h2 className="pEtitles">Available info about the Starship</h2>
        <div className="planateContainer itemGrid ">
          <Box title="Length" value={pageContext.starship.length} />
          <Box
            title="Max Atmosphering Speed"
            value={pageContext.starship.maxAtmospheringSpeed}
          />
          <Box title="Mglt" value={pageContext.starship.mglt} />
          <Box
            title="HyperdriveRating"
            value={pageContext.starship.hyperdriveRating}
          />
          <Box title="Passengers" value={pageContext.starship.passengers} />
          <Box
            title="CargoCapacity"
            value={pageContext.starship.cargoCapacity}
          />
          <Box title="Consumables" value={pageContext.starship.consumables} />
          <Box
            title="Cost In Credits"
            value={pageContext.starship.costInCredits}
          />
          <Box title="Crew" value={pageContext.starship.crew} />
          <Box title="Manufacturer" value={pageContext.starship.manufacturer} />
          <Box title="Class" value={pageContext.starship.class} />
        </div>
      </div>
    </Layout>
  )
}

export default StarshipPageTemplate
