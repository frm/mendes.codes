import React from "react";

import Spacing from "../../components/Spacing";
import Highlight from "../../components/Highlight";
import { ExternalLink } from "../../components/Link";
import TextBox from "../../components/TextBox";
import GitHubLogo from "../../components/GitHubLogo";
import TwitterLogo from "../../components/TwitterLogo";

import useMetadata from "../../hooks/useMetadata";

import landingImg from "./img.png";

import "./style.scss";

export default () => {
  const {
    links: {
      subvisual: subvisualUrl,
      thoughtbot: thoughtbotUrl,
      utrust: utrustUrl,
    },
    socials: { twitter: twitterUrl, github: githubUrl, email },
  } = useMetadata();

  return (
    <div className="Landing">
      <div className="Landing-tagline">
        <p>
          I'm <Highlight type="strong">mendes</Highlight> and I codes.
        </p>
      </div>

      <div className="Landing-content">
        <TextBox>
          <Spacing size="54" />

          <p>
            I'm a software engineer at{" "}
            <ExternalLink to={subvisualUrl}>Subvisual</ExternalLink>. Formerly
            at <ExternalLink to={thoughtbotUrl}>thoughtbot</ExternalLink> and{" "}
            <ExternalLink to={utrustUrl}>Utrust</ExternalLink>.
          </p>

          <p>
            I do a lot of public speaking, blogging, volunteering, teaching and
            open sourcing.
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

          <p>
            Looking for a speaker for your event?{" "}
            <ExternalLink to={`mailto:${email}`}>Let's talk</ExternalLink>
          </p>
        </TextBox>

        <figure className="Landing-img">
          <img
            src={landingImg}
            alt="Me at Balkan Ruby in 2019 talking a bit about morality and the codes."
          />
          <figcaption>
            At Balkan Ruby in 2019 talking a bit about morality and the codes.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
