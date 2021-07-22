import React from "react";

import Layout from "../components/Layout";

export default layout => Component => ({ location, ...rest }) => (
  <Layout location={location} {...layout}>
    <Component location={location} {...rest} />
  </Layout>
);