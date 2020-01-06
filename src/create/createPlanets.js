const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/planets/planets-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allPlanets {
          diameter
          climate
          id
          name
          population
          orbitalPeriod
          rotationPeriod
          surfaceWater
          terrain
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { swapi } = result.data

  swapi.allPlanets.forEach(planet => {
    let urlPath = planet.name
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `planets/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        planet: planet,
      },
    })
  })
}
