import React from "react";

import { ExternalLink } from "../../components/Link";
import InlinedText from "../../components/InlinedText";
import Spacing from "../../components/Spacing";
import GitHubLogo from "../../components/GitHubLogo";
import TwitterLogo from "../../components/TwitterLogo";

import useMetadata from "../../hooks/useMetadata";

import "./style.scss";

export default () => {
  const {
    socials: { twitter: twitterUrl, github: githubUrl, email },
  } = useMetadata();

  return (
    <div className="BlogPostFooter">
      <div className="BlogPostFooter-content">
        <p>Like what you read?</p>

        <Spacing size="11" />

        <p>
          I also tend to voice my opinions on{" "}
          <ExternalLink to={twitterUrl}>
            <InlinedText>
              <TwitterLogo /> Twitter{" "}
            </InlinedText>
          </ExternalLink>{" "}
          . Feel free to ask me any questions you might have, say hi or even
          poke around my{" "}
          <ExternalLink to={githubUrl}>
            {" "}
            <InlinedText>
              <GitHubLogo /> GitHub
            </InlinedText>{" "}
          </ExternalLink>
          .
        </p>

        <Spacing size="24" />

        <p>Looking for a speaker? </p>
        <p>
          <ExternalLink to={`mailto:${email}`}>Let's Talk</ExternalLink>.
        </p>
      </div>
    </div>
  );
};
