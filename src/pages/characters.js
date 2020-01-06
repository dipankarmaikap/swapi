import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pgrid from "../templates/utils/p-grid"
import { randomColors } from "../templates/utils/helper"
const Characters = ({ data }) => {
  const { swapi } = data
  const [postCount, setPostCount] = useState(12)
  const updateCount = () => {
    return setPostCount(postCount + 8)
  }
  return (
    <Layout>
      <SEO title="Characters" />
      <div>
        <h1 className="pageTitle">Characters</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allPersons.slice(0, postCount).map(person => {
          return <Pgrid key={person.id} item={person} sublink="characters" />
        })}
      </div>
      <div
        className={`loadMore ${
          postCount > swapi.allPersons.length ? "hide" : "p"
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
      allPersons {
        name
        id
      }
    }
  }
`

export default Characters
