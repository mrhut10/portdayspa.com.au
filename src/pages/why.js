import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Why from '../components/Why';
import Contact from '../components/Contact';

const WhyPage = ({ data }) => {
  return (
    <Layout>
      <Why />
      <Contact data={data} />
    </Layout>
  );
};

WhyPage.propTypes = {
  data: PropTypes.object,
};

export default WhyPage;

export const query = graphql`
  query WhyPageQuery {
    hero: file(relativePath: { eq: "contact-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        address
        email
        facebook
        googleMapsLink
        instagram
        phone
        phoneFormatted
      }
    }
  }
`;