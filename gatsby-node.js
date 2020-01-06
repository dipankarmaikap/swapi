const createFilms = require("./src/create/createFilms")
const createCharacters = require("./src/create/createCharacters")
const createStarships = require("./src/create/createStarships")
const createVehicles = require("./src/create/createVehicles")
const createPlanets = require("./src/create/createPlanets")
const createSpecies = require("./src/create/createSpecies")

exports.createPages = async ({ actions, graphql }) => {
  await createFilms({ actions, graphql })
  await createCharacters({ actions, graphql })
  await createStarships({ actions, graphql })
  await createVehicles({ actions, graphql })
  await createPlanets({ actions, graphql })
  await createSpecies({ actions, graphql })
}
