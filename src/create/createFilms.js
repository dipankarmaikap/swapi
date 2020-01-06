const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/films/films-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allFilms {
          id
          title
          producers
          director
          openingCrawl
          vehicles {
            name
          }
          starships {
            name
          }
          planets {
            name
          }
          species {
            name
          }
          characters {
            name
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

  swapi.allFilms.forEach(film => {
    let urlPath = film.title
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `films/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        film: film,
      },
    })
  })
}
