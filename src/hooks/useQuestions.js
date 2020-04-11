import { useState } from 'react';

const MAX_LIMIT = 3;
const usedQuestions = new Set();

export const useQuestions = (questions, maxLimit = MAX_LIMIT) => {
  console.log(usedQuestions);
  const [showQuestionCard, toggle] = useState(false);
  const [gameInfo, setGameInfo] = useState({
    questionsAnswered: 0,
    currentQuestion: '',
  });

  const {
    questionsAnswered,
    currentQuestion,
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
