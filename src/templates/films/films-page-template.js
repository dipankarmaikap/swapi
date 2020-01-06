import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Grid from "./grid"
import SecondGrid from "./second-grid"
import { randomColors } from "../../templates/utils/helper"
const FilmsPageTemplate = ({ pageContext }) => {
  console.log(pageContext.film)
  const [postCount, setPostCount] = useState(8)
  const [postCount2, setPostCount2] = useState(8)
  const [postCount3, setPostCount3] = useState(8)
  const [postCount4, setPostCount4] = useState(8)
  const [postCount5, setPostCount5] = useState(8)
  const updateCount = () => {
    return setPostCount(postCount + 100)
  }
  const updateCount2 = () => {
    return setPostCount2(postCount2 + 100)
  }
  const updateCount3 = () => {
    return setPostCount3(postCount3 + 100)
  }
  const updateCount4 = () => {
    return setPostCount4(postCount4 + 100)
  }
  const updateCount5 = () => {
    return setPostCount5(postCount5 + 100)
  }
  return (
    <Layout>
      <SEO title={pageContext.film.title} />
      <div className="main">
        <div>
          <h1 className="pageTitle">
            Films/<span className="bcrum">{pageContext.film.title}</span>
          </h1>
          <hr />
        </div>
        <div className="test ">
          <div className="titleGrp ">
            <p className="titleCover">{pageContext.film.title}</p>
            <h1 className="title">{pageContext.film.title}</h1>
          </div>
        </div>
        <div className="rest ">
          <p>{pageContext.film.openingCrawl}</p>
          <div className="producers ">
            <h2 className="eTitles">Producers : </h2>
            {pageContext.film.producers.map(producer => {
              return (
                <p className="indItems" key={producer}>
                  {producer}
                </p>
              )
            })}
          </div>
          <div className="director">
            <h2 className="eTitles">Director : </h2>
            <p className="indItems">{pageContext.film.director}</p>
          </div>
          <div className="gridItems">
            <h2 className="eTitles">characters : </h2>
            <div className="vehicles itemGrid">
              {pageContext.film.characters
                .slice(0, postCount)
                .map(character => {
                  return (
                    <SecondGrid
                      key={character.name}
                      item={character}
                      sublink="characters"
                    />
                  )
                })}
            </div>
            <div
              className={`seeAll ${
                postCount > pageContext.film.characters.length ? "hide" : "p"
              }`}
            >
              <button
                className="link"
                style={{ color: `${randomColors()}` }}
                aria-label="See All"
                onClick={updateCount}
              >
                See all
              </button>
            </div>
          </div>
          <div className="gridItems">
            <h2 className="eTitles">starships : </h2>
            <div className="vehicles itemGrid">
              {pageContext.film.starships.slice(0, postCount2).map(starship => {
                return (
                  <Grid
                    key={starship.name}
                    item={starship}
                    sublink="starships"
                  />
                )
              })}
            </div>
            <div
              className={`seeAll ${
                postCount2 > pageContext.film.starships.length ? "hide" : "p"
              }`}
            >
              <button
                className="link"
                style={{ color: `${randomColors()}` }}
                aria-label="See All"
                onClick={updateCount2}
              >
                See all
              </button>
            </div>
          </div>

          <div className="gridItems">
            <div
              className={`vContainer ${
                pageContext.film.vehicles.length > 0 ? "show" : "hide"
              }`}
            >
              <h2 className="eTitles">vehicles : </h2>
              <div className="vehicles itemGrid">
                {pageContext.film.vehicles.slice(0, postCount3).map(vehicle => {
                  return (
                    <SecondGrid
                      key={vehicle.name}
                      item={vehicle}
                      sublink="vehicles"
                    />
                  )
                })}
              </div>
              <div
                className={`seeAll ${
                  postCount3 > pageContext.film.vehicles.length ? "hide" : "p"
                }`}
              >
                <button
                  className="link"
                  style={{ color: `${randomColors()}` }}
                  aria-label="See All"
                  onClick={updateCount3}
                >
                  See all
                </button>
              </div>
            </div>
          </div>
          <div className="gridItems">
            <h2 className="eTitles">planets : </h2>
            <div className="vehicles itemGrid">
              {pageContext.film.planets.slice(0, postCount4).map(planet => {
                return (
                  <Grid key={planet.name} item={planet} sublink="planets" />
                )
              })}
            </div>
            <div
              className={`seeAll ${
                postCount4 > pageContext.film.planets.length ? "hide" : "p"
              }`}
            >
              <button
                className="link"
                style={{ color: `${randomColors()}` }}
                aria-label="See All"
                onClick={updateCount4}
              >
                See all
              </button>
            </div>
          </div>
          <div className="gridItems">
            <h2 className="eTitles">species : </h2>
            <div className="vehicles itemGrid">
              {pageContext.film.species.slice(0, postCount5).map(specie => {
                return (
                  <SecondGrid
                    key={specie.name}
                    item={specie}
                    sublink="species"
                  />
                )
              })}
            </div>
            <div
              className={`seeAll ${
                postCount5 > pageContext.film.species.length ? "hide" : "p"
              }`}
            >
              <button
                className="link"
                style={{ color: `${randomColors()}` }}
                aria-label="See All"
                onClick={updateCount5}
              >
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FilmsPageTemplate
