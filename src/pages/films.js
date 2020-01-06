import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../templates/utils/grid"
const Films = ({ data }) => {
  const { swapi } = data
  return (
    <Layout>
      <SEO title="Films" />
      <div>
        <h1 className="pageTitle">Films</h1>
        <hr />
      </div>
      <div className="itemGrid">
        {swapi.allFilms.map(film => {
          return <Grid key={film.id} item={film} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    swapi {
      allFilms {
        id
        title
        director
      }
    }
  }
`

export default Films
