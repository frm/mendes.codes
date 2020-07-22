import React from "react";
import PropTypes from "prop-types";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

import useDetectJavascript from "../../hooks/useDetectJavascript";
import useMetadata from "../../hooks/useMetadata";

const ShareLinks = ({ slug }) => {
  const hasJavascript = useDetectJavascript();

  const { siteUrl } = useMetadata();
  const url = `${siteUrl}${slug}`;

  // react-share links do not work with JavaScript disabled
  if (!hasJavascript) return null;

  return (
    <span className="ShareLinks">
      {" "}
      <TwitterShareButton url={url}>Tw</TwitterShareButton>
      {" • "}
      <FacebookShareButton url={url}>Fb</FacebookShareButton>
      {" • "}
      <LinkedinShareButton url={url}>In</LinkedinShareButton>
    </span>
  );
};

ShareLinks.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ShareLinks;
