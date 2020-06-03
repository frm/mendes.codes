import React from "react";

import Spacing from "../../components/Spacing";
import TextBox from "../../components/TextBox";
import { Link } from "../../components/Link";
import Talk from "../../components/Talk";

import useMetadata from "../../hooks/useMetadata";

import "./style.scss";

export default () => {
  const { talks } = useMetadata();

  return (
    <div className="Talks">
      <TextBox>
        <p>
          I have been a speaker in multiple international conferences and the
          occasional local meetup.
        </p>
        <p>This is the most up-to-date list of Things I Tend To Say™.</p>

        <Spacing size="24" />

        <p>
          I'm also <strong>available for further speaking engagements.</strong>
        </p>

        <Spacing size="24" />

        <p>
          Interested in having me in your workshop, meetup, conference, BBQ,
          spree, soirée, party, festivity, shinding or get-together?{" "}
          <Link to="/contact">Let's talk</Link>
        </p>
      </TextBox>

      <Spacing size="54" />
      <Spacing size="54" />
      <Spacing size="54" />

      {talks.map((talk, idx) => (
        <span key={idx}>
          <Talk {...talk} />
          {idx === talks.length - 1 ? "" : <hr className="Talks-separator" />}
        </span>
      ))}

      <Spacing size="54" />
      <Spacing size="54" />
      <Spacing size="54" />

      <div className="Talks-cta">
        Looking for a speaker for your event?{" "}
        <Link to="/contact">Let's talk</Link>
      </div>
    </div>
  );
};
