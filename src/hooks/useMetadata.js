import { useStaticQuery, graphql} from "gatsby"

export default function useMetadata() {
  const {
    site: {
      siteMetadata: metadata
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            links {
              subvisual
              thoughtbot
              utrust
            }
            socials {
              twitter
              github
            }
          }
        }
      }
    `
  )

  return metadata
}
