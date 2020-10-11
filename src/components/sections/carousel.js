import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ data }) => {
  const images = data.filter(({ node }) => node);

  return (
    <Carousel interval={4000} controls={false}>
        {images &&
          images.map(({ node }, i) => {
            const { frontmatter , html } = node;
            const { cover, altText} = frontmatter;

            return (
                <Carousel.Item>
                    <Img fluid={cover.childImageSharp.fluid} alt={altText}/>
                </Carousel.Item>
            );
          })}
    </Carousel>
  );
};

MyCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MyCarousel;
