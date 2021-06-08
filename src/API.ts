// for creating the logic of fetching data

import { shuffleArray } from './utils';

// found in Developer Tools - Object/results/0:
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// to have correct and incorrect answers in one array, to be able to map them. To have all the types of the Question and to add the array of answers to it.
export type QuestionState = Question & { answers: string[] };

// Enums are a new data type supported in TypeScript. TypeScript supports both numeric and string-based enums.

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

// in async-await, the await - await is because first we're awaiting the fetch itself and then await the converting it to json
// in return we're returning an object, so it's in {} and ... spread-operator to have all the properties and the extra answer one added.
// to not to have the correct answer always as the first option, the array needs to be shuffled
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=12&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  // console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
