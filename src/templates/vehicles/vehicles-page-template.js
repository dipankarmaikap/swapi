import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "../utils/box"
const VehiclesPageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.vehicle.name} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Vehicles/<span className="bcrum">{pageContext.vehicle.name}</span>
          </h1>
          <hr />
        </div>
        <div className="titleGrp ">
          <p className="titleCover">{pageContext.vehicle.name}</p>
          <h1 className="title">{pageContext.vehicle.name}</h1>
        </div>
        <h2 className="pEtitles">Available info about the Vehicle</h2>
        <div className="planateContainer itemGrid ">
          <Box title="Crew" value={pageContext.vehicle.crew} />
          <Box title="Class" value={pageContext.vehicle.class} />
          <Box
            title="CargoCapacity"
            value={pageContext.vehicle.cargoCapacity}
          />
          <Box
            title="CostInCredits"
            value={pageContext.vehicle.costInCredits}
          />
          <Box title="Consumables" value={pageContext.vehicle.consumables} />
          <Box title="Length" value={pageContext.vehicle.length} />
          <Box title="Model" value={pageContext.vehicle.model} />
          <Box title="Passengers" value={pageContext.vehicle.passengers} />
          <Box title="Manufacturer" value={pageContext.vehicle.manufacturer} />
          <Box
            title="Max Atmosphering Speed"
            value={pageContext.vehicle.maxAtmospheringSpeed}
          />
        </div>
      </div>
    </Layout>
  )
}

export default VehiclesPageTemplate
