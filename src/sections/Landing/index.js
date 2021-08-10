import React from "react";

import InlinedText from "../../components/InlinedText";
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
      closer: closerUrl,
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
          I'm <Highlight type="strong">mendes</Highlight> and I codes. Mostly in
          the crypto space.
        </p>

        <p>
          I'm currently building a new decentralised social hub called{" "}
          <ExternalLink to={closerUrl}>Closer</ExternalLink>.
        </p>
      </div>

      <div className="Landing-content">
        <TextBox>
          <Spacing size="54" />

          <p>
            When I'm not doing that, I'm a software engineer at{" "}
            <ExternalLink to={subvisualUrl}>Subvisual</ExternalLink>. Formerly
            at <ExternalLink to={thoughtbotUrl}>thoughtbot</ExternalLink> and{" "}
            <ExternalLink to={utrustUrl}>Utrust</ExternalLink>.
          </p>

          <Spacing size="54" />

          <p>
            I do a bunch public speaking, blogging, volunteering, teaching and
            open sourcing.
          </p>

          <Spacing size="54" />

          <p>
            Follow me at{" "}
            <InlinedText>
              <ExternalLink to={twitterUrl}>
                <TwitterLogo />
                0xfrm
              </ExternalLink>
            </InlinedText>{" "}
            and{" "}
            <InlinedText>
              <ExternalLink to={githubUrl}>
                <GitHubLogo /> frm
              </ExternalLink>
            </InlinedText>
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
