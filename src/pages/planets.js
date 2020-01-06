import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pgrid from "../templates/utils/p-grid"
import { randomColors } from "../templates/utils/helper"
const Planets = ({ data }) => {
  const { swapi } = data
  const [postCount, setPostCount] = useState(12)
  const updateCount = () => {
    return setPostCount(postCount + 8)
  }
  return (
    <Layout>
      <SEO title="Planets" />
      <div>
        <h1 className="pageTitle">Planets</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allPlanets.slice(0, postCount).map(planet => {
          return <Pgrid key={planet.id} item={planet} sublink="planets" />
        })}
      </div>
      <div
        className={`loadMore ${
          postCount > swapi.allPlanets.length ? "hide" : "p"
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
      allPlanets {
        name
        id
      }
    }
  }
`

export default Planets
