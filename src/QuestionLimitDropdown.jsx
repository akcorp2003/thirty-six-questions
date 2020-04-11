import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const QuestionLimitDropdown = ({ onItemClick, numQuestions }) => (
  <DropdownButton
    title={`Number of Questions: ${numQuestions}`}
    className="pb-3"
    onSelect={key => onItemClick(key)}
  >
    {[...Array(12)].map((c, index) => (
      <Dropdown.Item eventKey={index + 1}>{index + 1}</Dropdown.Item>
    ))
    }
  </DropdownButton>
);

QuestionLimitDropdown.propTypes = {
  onItemClick: PropTypes.func,
  numQuestions: PropTypes.number,
};

QuestionLimitDropdown.defaultProps = {
  onItemClick: () => {},
  numQuestions: 3,
};

export default QuestionLimitDropdown;
