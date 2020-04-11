import { useState, useEffect } from 'react';

const MAX_LIMIT = 3;

export const useQuestions = (questions, maxLimit = MAX_LIMIT) => {
  const defaultGameState = {
    questionsAnswered: 0,
    currentQuestion: '',
    usedQuestions: new Set(),
  };
  const [showQuestionCard, toggle] = useState(false);
  const [gameInfo, setGameInfo] = useState(defaultGameState);

  useEffect(() => {
    setGameInfo({
      questionsAnswered: 0,
      currentQuestion: '',
      usedQuestions: new Set(),
    });
  }, [maxLimit]);

  const {
    questionsAnswered,
    currentQuestion,
    usedQuestions,
  } = gameInfo;

  const endQuestion = () => {
    setGameInfo({
      ...gameInfo,
      questionsAnswered: questionsAnswered + 1,
    });
    toggle(!showQuestionCard);
  };

  const beginQuestion = () => {
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(usedQuestions);
    while (usedQuestions.has(randomQuestion)) {
      randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    };
    usedQuestions.add(randomQuestion);
    setGameInfo({
      ...gameInfo,
      currentQuestion: randomQuestion,
    });
    toggle(!showQuestionCard);
  };

  return {
    beginQuestion,
    endQuestion,
    gameInfo: {
      currentQuestion,
      questionsAnswered,
      showQuestionCard,
      limitReached: questionsAnswered >= maxLimit
    },
  }
};

export default useQuestions;
