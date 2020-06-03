import React from "react";

import Spacing from "../../components/Spacing";
import Highlight from "../../components/Highlight";
import { ExternalLink, Link } from "../../components/Link";
import GitHubLogo from "../../components/GitHubLogo";
import TwitterLogo from "../../components/TwitterLogo";

import useMetadata from "../../hooks/useMetadata";

export default () => {
  const {
    links: {
      subvisual: subvisualUrl,
      thoughtbot: thoughtbotUrl,
      utrust: utrustUrl,
    },
    socials: { twitter: twitterUrl, github: githubUrl },
  } = useMetadata();

  return (
    <div className="Landing">
      <p>
        I'm <Highlight type="strong">mendes</Highlight> and I codes.
      </p>

      <Spacing size="54" />
      <Spacing size="54" />

      <p>
        I'm a software engineer at{" "}
        <ExternalLink to={subvisualUrl}>Subvisual</ExternalLink>. Formerly at{" "}
        <ExternalLink to={thoughtbotUrl}>thoughtbot</ExternalLink> and{" "}
        <ExternalLink to={utrustUrl}>Utrust</ExternalLink>.
      </p>

      <p>
        I do a lot of public speaking, blogging, volunteering, teaching and open
        sourcing.
      </p>

      <Spacing size="54" />

      <p>
        Follow me at{" "}
        <ExternalLink to={twitterUrl}>
          <TwitterLogo />
          justmnds
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink to={githubUrl}>
          <GitHubLogo /> frm
        </ExternalLink>
      </p>

      <Spacing size="54" />
      <Spacing size="54" />

      <p>
        Looking for a speaker for your event?{" "}
        <Link to="/contact">Let's talk</Link>
      </p>
    </div>
  );
};