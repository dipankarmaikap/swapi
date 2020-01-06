const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/starships/starships-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allStarships {
          name
          id
          length
          manufacturer
          maxAtmospheringSpeed
          mglt
          hyperdriveRating
          passengers
          class
          cargoCapacity
          consumables
          costInCredits
          createdAt
          crew
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

  swapi.allStarships.forEach(starship => {
    let urlPath = starship.name
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `starships/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        starship: starship,
      },
    })
  })
}
