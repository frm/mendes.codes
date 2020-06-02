import React from "react"
import { Link as GatsbyLink } from "gatsby"

import "./style.scss"

export const Link = ({ to, children }) => (
  <GatsbyLink to={to} className="Link">{children}</GatsbyLink>
)

export const ExternalLink = ({ to, children }) => (
  <a href={to} className="Link">{children}</a>
)
