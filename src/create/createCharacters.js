const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/persons/persons-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allPersons {
          id
          name
          height
          hairColor
          gender
          homeworld {
            name
          }
          skinColor
          eyeColor
          birthYear
          mass
          films {
            title
          }
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

  swapi.allPersons.forEach(person => {
    let urlPath = person.name
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `characters/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        person: person,
      },
    })
  })
}
