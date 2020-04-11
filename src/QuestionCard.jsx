import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const QuestionCard = ({ message, onClick }) => (
  <Card onClick={onClick}>
    <Card.Body>{message}</Card.Body>
  </Card>
);

QuestionCard.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuestionCard;
