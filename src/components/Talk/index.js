import React from "react";
import YouTube from "react-youtube";
import Empty from "../Empty";
import { ExternalLink } from "../Link";

import "./style.scss";

const renderVariation = (variation) => {
  if (variation === null) return;

  return (
    <span className="Talk-variation">
      This talk was also presented at{" "}
      <ExternalLink to={variation.url}>{variation.title}</ExternalLink>.
    </span>
  );
};

export default ({
  videoId,
  title,
  event,
  description,
  variation,
  slidesUrl,
}) => {
  const opts = {
    playerVars: {
      modestbranding: 1,
      iv_load_policy: 3,
    },
  };

  return (
    <div className="Talk">
      <div className="Talk-header">
        <h2 className="Talk-title">{title}</h2>
        <h3 className="Talk-event">{event}</h3>
      </div>

      <Empty size="16" />

      <div className="Talk-content">
        <YouTube className="Talk-video" videoId={videoId} opts={opts} />

        <div className="Talk-info">
          <p className="Talk-description">{description}</p>

          <Empty size="16" />

          {renderVariation(variation)}

          <Empty size="36" />

          <span className="Talk-slides">
            <ExternalLink to={slidesUrl}>Slides</ExternalLink>
          </span>
        </div>
      </div>
    </div>
  );
};
