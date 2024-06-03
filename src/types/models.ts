interface Question {
  id: number;
  type: string;
}

export interface IImageMultipleChoice extends Question {
  question: string;
  options: Array<{
    id: number;
    image: string;
    text: string;
    correct: boolean;
  }>;
}

export interface IOpenEnded {
  text: string;
  answer: string;
}
