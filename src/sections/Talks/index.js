import React from "react";

import Spacing from "../../components/Spacing";
import TextBox from "../../components/TextBox";
import { ExternalLink, Link } from "../../components/Link";
import Talk from "../../components/Talk";

import useMetadata from "../../hooks/useMetadata";

import talksImg from "./img.png";

import "./style.scss";

export default () => {
  const {
    talks,
    socials: { email },
  } = useMetadata();

  return (
    <div className="Talks">
      <div className="Talks-header">
        <TextBox>
          <p>
            I have been a speaker in multiple international conferences and the
            occasional local meetup.
          </p>
          <p>This is the most up-to-date list of Things I Tend To Say™.</p>

          <Spacing size="24" />

          <p>
            I'm also{" "}
            <strong>available for further speaking engagements.</strong>
          </p>

          <Spacing size="24" />

          <p>
            Interested in having me in your workshop, meetup, conference, BBQ,
            spree, soirée, party, festivity, shinding or get-together?{" "}
            <ExternalLink to={`mailto:${email}`}>Let's talk</ExternalLink>
          </p>
        </TextBox>

        <figure className="Talks-img">
          <img src={talksImg} />
          <figcaption>This could be me, at your event.</figcaption>
        </figure>
      </div>

      <Spacing size="54" />
      <Spacing size="54" />

      {talks.map((talk, idx) => (
        <span key={idx}>
          <Talk {...talk} />
          <hr className="Talks-separator" />
        </span>
      ))}

      <div className="Talks-cta">
        Looking for a speaker for your event?{" "}
        <ExternalLink to={`mailto:${email}`}>Let's talk</ExternalLink>
      </div>
    </div>
  );
};
