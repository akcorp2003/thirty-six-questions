import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const QuestionCard = ({ message, onClick }) => (
  <Card border="dark" onClick={onClick} className="animated fadeIn">
    <Card.Body>
      <Card.Title>{message}</Card.Title>
    </Card.Body>
  </Card>
);

QuestionCard.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuestionCard;
