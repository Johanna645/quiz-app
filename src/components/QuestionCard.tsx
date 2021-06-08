import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  questionNumber: number;
  totalOfQuestions: number;
  userAnswer: any;
};

// React.FC = Function Component, can I write this somehow else?
// Yes, as a function declaration it would be somehow like in this form:
// function MyComponent({ question }: Props): React.ReactNode {
//  return <h1>Next Question: {question}</h1>}
// Where we’re annotating the function return type, a React Node type, what can be found from listed at @types/react
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
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
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
