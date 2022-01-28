import React from "react";

import InlinedText from "../../components/InlinedText";
import Spacing from "../../components/Spacing";
import Highlight from "../../components/Highlight";
import TextBox from "../../components/TextBox";
import { ExternalLink, Link } from "../../components/Link";
import GitHubLogo from "../../components/GitHubLogo";
import TwitterLogo from "../../components/TwitterLogo";

import useMetadata from "../../hooks/useMetadata";

import aboutImg from "./img.png";

import "./style.scss";

export default () => {
  const {
    socials: { twitter: twitterUrl, github: githubUrl, email },
    links: {
      closer: closerUrl,
      subvisual: subvisualUrl,
      thoughtbot: thoughtbotUrl,
      utrust: utrustUrl,
      include: includeUrl,
      coderdojo: coderdojoUrl,
      rubyconfpt: rubyconfptUrl,
      mirrorconf: mirrorconfUrl,
      alchemy: alchemyconfUrl,
      bragajs: bragajsUrl,
      bragabeam: bragabeamUrl,
    },
  } = useMetadata();

  return (
    <div className="About">
      <figure className="About-img">
        <img
          alt="Me in Florence, Italy back in the far-off year of 2019"
          src={aboutImg}
        />
        <figcaption>
          Florence, Italy back in the far-off year of 2019
        </figcaption>
      </figure>

      <TextBox>
        <p>
          Yep, you guessed it. I'm the one they call{" "}
          <Highlight type="strong">Mendes</Highlight>.
        </p>

        <Spacing size="24" />

        <p>
          I'm currently building a new DAO communication and collaboration
          platform called <ExternalLink to={closerUrl}>Closer</ExternalLink>.
        </p>

        <Spacing size="24" />

        <p>
          You can find me on{" "}
          <InlinedText>
            <ExternalLink to={twitterUrl}>
              {" "}
              <TwitterLogo /> 0xfrm{" "}
            </ExternalLink>
          </InlinedText>{" "}
          and{" "}
          <InlinedText>
            <ExternalLink to={githubUrl}>
              {" "}
              <GitHubLogo /> frm{" "}
            </ExternalLink>
          </InlinedText>
          .
        </p>

        <Spacing size="24" />

        <p>
          I spent some time at{" "}
          <ExternalLink to={subvisualUrl}>Subvisual</ExternalLink>,{" "}
          <ExternalLink to={thoughtbotUrl}>thoughtbot</ExternalLink> and at{" "}
          <ExternalLink to={utrustUrl}>Utrust</ExternalLink>. At the latter, I
          helped raise a very successful ICO and build their novel blockchain
          payments gateway.
        </p>

        <Spacing size="24" />

        <p>
          I have an <strong>MSc in Distributed Systems and Cryptography</strong>{" "}
          from University of Minho, having won multiple awards for academic
          excellence.
        </p>

        <Spacing size="24" />

        <p>
          Back in 2017, I founded{" "}
          <ExternalLink to={includeUrl}>
            &#35;include &lt;braga&gt;
          </ExternalLink>
          , a non-profit, open source movement that makes use of the superpowers
          developers have to make a direct positive impact in the local
          community. The movement is mentioned and explained in my{" "}
          <Link to="/talks">
            &quot;you and the morals of technology&quot; talk
          </Link>
          .
        </p>

        <Spacing size="24" />

        <p>
          I also co-lead{" "}
          <ExternalLink to={coderdojoUrl}>Coderdojo Braga</ExternalLink> for
          several years, overseeing a growth from 3 mentors and an average of 10
          attendees to 30 mentors and as many attendees. I loved every bit of it
          and helping the project grow was one of my favourite endeavours.
        </p>

        <Spacing size="24" />

        <p>
          I'm a <Link to="/talks">regular speaker</Link> at conferences and
          meetups, as well as being lovely company or so I've heard. I'm
          currently <strong>available for speaking engagements</strong>, if you
          are looking for someone to speak at your conference, meetup or
          institution.
        </p>

        <Spacing size="24" />

        <p>
          I also think programming communities are just the best and helped
          organise{" "}
          <ExternalLink to={rubyconfptUrl}>Ruby Conf Portugal</ExternalLink>,{" "}
          <ExternalLink to={mirrorconfUrl}>Mirror Conf</ExternalLink>,{" "}
          <ExternalLink to={bragajsUrl}>Braga.js</ExternalLink>,{" "}
          <ExternalLink to={bragabeamUrl}>Braga.BEAM</ExternalLink> and, most
          recently, the brand new{" "}
          <ExternalLink to={alchemyconfUrl}>Alchemy Conf</ExternalLink>. If you
          need help with your community event, feel free to reach out.
        </p>

        <Spacing size="24" />

        <p>
          My inbox is open for you at{" "}
          <ExternalLink to={`mailto:${email}`}>
            fernando&#64;mendes.codes
          </ExternalLink>
        </p>
      </TextBox>
    </div>
  );
};
