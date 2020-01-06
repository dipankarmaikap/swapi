import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pgrid from "../templates/utils/p-grid"
import { randomColors } from "../templates/utils/helper"
const Vehicles = ({ data }) => {
  const { swapi } = data
  const [postCount, setPostCount] = useState(12)
  const updateCount = () => {
    return setPostCount(postCount + 8)
  }
  return (
    <Layout>
      <SEO title="Vehicles" />
      <div>
        <h1 className="pageTitle">Vehicles</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allVehicles.slice(0, postCount).map(vehicle => {
          return <Pgrid key={vehicle.id} item={vehicle} sublink="vehicles" />
        })}
      </div>
      <div
        className={`loadMore ${
          postCount > swapi.allVehicles.length ? "hide" : "p"
        }`}
      >
        <button
          style={{ backgroundColor: `${randomColors()}` }}
          className="button grow"
          aria-label="Load More"
          onClick={updateCount}
        >
          Load More
        </button>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    swapi {
      allVehicles {
        name
        id
      }
    }
  }
`

export default Vehicles
