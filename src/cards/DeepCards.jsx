import React from 'react';
import PropTypes from 'prop-types';
import PictureCard from './PictureCard';
import QuestionCard from './QuestionCard';

import useQuestions from '../hooks/useQuestions';
import { deepQuestions } from '../utils/questions';

const DeepCards = ({ maxQuestions }) => {
  const {
    beginQuestion,
    endQuestion,
    gameInfo: {
      currentQuestion,
      showQuestionCard,
      limitReached,
    },
  } = useQuestions(deepQuestions, maxQuestions);

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
      src="http://icons.iconarchive.com/icons/rokey/smooth/128/shovel-icon.png"
      onClick={beginQuestion}
    />
  );
};

DeepCards.propTypes = {
  maxQuestions: PropTypes.number,
};

DeepCards.defaultProps = {
  maxQuestions: 3,
};

export default DeepCards;
