import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pgrid from "../templates/utils/p-grid"
import { randomColors } from "../templates/utils/helper"
const Species = ({ data }) => {
  const { swapi } = data
  const [postCount, setPostCount] = useState(12)
  const updateCount = () => {
    return setPostCount(postCount + 8)
  }
  return (
    <Layout>
      <SEO title="Species" />
      <div>
        <h1 className="pageTitle">Species</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allSpecies.slice(0, postCount).map(specie => {
          return <Pgrid key={specie.id} item={specie} sublink="species" />
        })}
      </div>
      <div
        className={`loadMore ${
          postCount > swapi.allSpecies.length ? "hide" : "p"
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
      allSpecies {
        name
        id
      }
    }
  }
`

export default Species
