import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pgrid from "../templates/utils/p-grid"
import { randomColors } from "../templates/utils/helper"
const Starships = ({ data }) => {
  const { swapi } = data
  const [postCount, setPostCount] = useState(12)
  const updateCount = () => {
    return setPostCount(postCount + 8)
  }
  return (
    <Layout>
      <SEO title="Starships" />
      <div>
        <h1 className="pageTitle">Starships</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allStarships.slice(0, postCount).map(starship => {
          return <Pgrid key={starship.id} item={starship} sublink="starships" />
        })}
      </div>
      <div
        className={`loadMore ${
          postCount > swapi.allStarships.length ? "hide" : "p"
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
      allStarships {
        id
        name
      }
    }
  }
`

export default Starships
