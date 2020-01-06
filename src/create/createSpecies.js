const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/species/species-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allSpecies {
          name
          id
          hairColor
          language
          isPublished
          skinColor
          eyeColor
          designation
          classification
          averageLifespan
          averageHeight
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

  swapi.allSpecies.forEach(specie => {
    let urlPath = specie.name
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `species/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        specie: specie,
      },
    })
  })
}
