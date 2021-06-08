// to randomize the answers to the questions
// array is spread with the spread operator and a new array will be created
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
