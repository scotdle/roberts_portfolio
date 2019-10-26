import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Container>
        <h1>Projects</h1>

      </Container>
    </Layout>
  );
};

export default SecondPage;