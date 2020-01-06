const slash = require(`slash`)
const pageTemplate = require.resolve(
  "../templates/vehicles/vehicles-page-template.js"
)
module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      swapi {
        allVehicles {
          id
          crew
          class
          cargoCapacity
          costInCredits
          consumables
          length
          manufacturer
          maxAtmospheringSpeed
          model
          name
          passengers
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

  swapi.allVehicles.forEach(vehicle => {
    let urlPath = vehicle.name
    urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
    createPage({
      path: `vehicles/${urlPath}`,
      component: slash(pageTemplate),
      context: {
        vehicle: vehicle,
      },
    })
  })
}
