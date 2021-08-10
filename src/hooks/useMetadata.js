import { useStaticQuery, graphql } from "gatsby";

export default function useMetadata() {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            links {
              closer
              subvisual
              thoughtbot
              utrust
              include
              coderdojo
              rubyconfpt
              mirrorconf
              alchemy
              bragajs
              bragabeam
            }
            socials {
              twitter
              github
              email
            }
            talks {
              title
              event
              description
              videoId
              slidesUrl
              variation {
                title
                url
              }
            }
          }
        }
      }
    `,
  );

  return metadata;
}
