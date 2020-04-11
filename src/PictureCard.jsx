import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const PictureCard = ({ src, onClick }) => (
  <Card border="dark" onClick={onClick}>
    <Card.Img src={src} />
  </Card>
);

PictureCard.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PictureCard;
