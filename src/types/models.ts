import { ImageSourcePropType } from "react-native";

interface Question {
  id: number;
  type: string;
}

export interface IImageMultipleChoiceOption {
  id: number;
  image: string;
  text: string;
  correct: boolean;
}

export interface IImageMultipleChoice extends Question {
  question: string;
  options: IImageMultipleChoiceOption[];
}

export interface IOpenEnded extends Question {
  image: ImageSourcePropType;
  text: string;
  answer: string;
}

export interface ITranslateSentence extends Question {
  image: ImageSourcePropType;
  text: string;
  options: string[];
  answer: string[];
}
