import React from 'react';
import PropTypes from 'prop-types';
import PictureCard from './PictureCard';
import QuestionCard from './QuestionCard';

import useQuestions from '../hooks/useQuestions';
import { thinkingQuestions } from '../utils/questions';

const ThinkingCards = ({ maxQuestions }) => {
  const {
    beginQuestion,
    endQuestion,
    gameInfo: {
      currentQuestion,
      limitReached,
      showQuestionCard,
    },
  } = useQuestions(thinkingQuestions, maxQuestions);

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
      src="https://pbs.twimg.com/profile_images/2251403960/Philosoraptor.gif"
      onClick={beginQuestion}
    />
  );
};

ThinkingCards.propTypes = {
  maxQuestions: PropTypes.number,
};

ThinkingCards.defaultProps = {
  maxQuestions: 3,
};

export default ThinkingCards;
