import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  questionNumber: number;
  totalOfQuestions: number;
  userAnswer: string;
};

// React.FC = Function Component, can I write this somehow else?
const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalOfQuestions,
}) => (
  <div>
    <p className="number">
      Question {questionNumber} / {totalOfQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
  </div>
);

export default QuestionCard;
