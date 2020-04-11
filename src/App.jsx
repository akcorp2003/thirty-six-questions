import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ThinkingCards from './ThinkingCards';
import CasualCards from './CasualCards';
import DeepCards from './DeepCards';
import QuestionLimitDropdown from './QuestionLimitDropdown';

const App = () => {
  const [questionLimits, setQuestionLimits] = useState({
    numCasualQ: 3,
    numThinkingQ: 3,
    numDeepQ: 3,
  });
  const {
    numCasualQ,
    numThinkingQ,
    numDeepQ,
  } = questionLimits;
  return (
    <Fragment>
      <h1 className="text-center"> 36 Questions</h1>
      <div className="mx-auto py-5">
        <Container>
          <Row>
            <Col>
              <QuestionLimitDropdown onItemClick={v => setQuestionLimits({ ...questionLimits, numCasualQ: v })} numQuestions={numCasualQ} />
              <CasualCards maxQuestions={numCasualQ} />
            </Col>
            <Col>
              <QuestionLimitDropdown onItemClick={v => setQuestionLimits({ ...questionLimits, numThinkingQ: v })} numQuestions={numThinkingQ} />
              <ThinkingCards maxQuestions={numThinkingQ} />
            </Col>
            <Col>
              <QuestionLimitDropdown onItemClick={v => setQuestionLimits({ ...questionLimits, numDeepQ: v })} numQuestions={numDeepQ} />
              <DeepCards maxQuestions={numDeepQ} />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
