import React from 'react';
import PictureCard from './PictureCard';
import QuestionCard from './QuestionCard';

import useQuestions from './hooks/useQuestions';
import { thinkingQuestions } from './utils/questions';

const ThinkingCards = () => {
  const {
    beginQuestion,
    endQuestion,
    gameInfo: {
      currentQuestion,
      limitReached,
      showQuestionCard,
    },
  } = useQuestions(thinkingQuestions, 3);

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

export default ThinkingCards;
