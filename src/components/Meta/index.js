import React from "react"
import Helmet from 'react-helmet'

import useMetadata from "../../hooks/useMetadata"

const Meta = () => {
  const { title, description } = useMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Meta
