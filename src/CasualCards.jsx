import React from 'react';
import PropTypes from 'prop-types';
import PictureCard from './PictureCard';
import QuestionCard from './QuestionCard';

import { casualQuestions } from './utils/questions';
import useQuestions from './hooks/useQuestions';

const CasualCards = ({ maxQuestions }) => {
  const {
    beginQuestion,
    endQuestion,
    gameInfo: {
      currentQuestion,
      showQuestionCard,
      limitReached,
    },
  } = useQuestions(casualQuestions, maxQuestions);

  if (limitReached) {
    return (
      <PictureCard
        src="http://e.lvme.me/jjj7ie9.jpg"
        onClick={() => {}}
      />
    );
  }

  if (showQuestionCard) {
    return (
      <QuestionCard
        message={currentQuestion}
        onClick={endQuestion}
      />
    );
  }

  return (
    <PictureCard
      src="https://dp6mhagng1yw3.cloudfront.net/entries/11th/6a4dd7ae-878f-4872-a8ba-6b7ac9f96565.png"
      onClick={beginQuestion}
    />
  );
};

CasualCards.propTypes = {
  maxQuestions: PropTypes.number,
};

CasualCards.defaultProps = {
  maxQuestions: 3,
};

export default CasualCards;
