import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Spacing from "../components/Spacing";
import { Link } from "../components/Link";

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>mendes not found</title>
      </Helmet>
      <Grid>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif"
            alt="Obi Wan's Hello there"
          />
          <Spacing size="81" />
          <p>
            You seem lost. Let's get you back to{" "}
            <Link to="/">somewhere more familiar</Link> shall we?
          </p>
        </div>
      </Grid>
    </Layout>
  );
};

export default NotFound;
