import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const Contact = () => {
    return (
        <Layout pageName="two">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Container>
                <h1>Contact</h1>
            </Container>
        </Layout>
    );
};

export default Contact;