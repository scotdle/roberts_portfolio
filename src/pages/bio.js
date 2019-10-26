import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const Bio = () => {
    return (
        <Layout pageName="two">
            <Helmet>
                <title>Bio</title>
            </Helmet>
            <Container>
                <h1>Bio</h1>
            </Container>
        </Layout>
    );
};

export default Bio;