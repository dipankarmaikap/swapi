import { useStaticQuery, graphql } from "gatsby"
export const useImagedata = () => {
  const data = useStaticQuery(
    graphql`
      fragment servicesImage on File {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      query {
        gatsbyAstronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          ...servicesImage
        }
        MiniRobot: file(relativePath: { eq: "Mini-Robot.png" }) {
          ...servicesImage
        }
      }
    `
  )
  return data
}
