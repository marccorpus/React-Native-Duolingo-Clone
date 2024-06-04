import { useState } from "react";
import { Alert } from "react-native";

import Container from "./src/components/Container";
import Header from "./src/components/Header";

import TranslateSentence from "./src/screens/TranslateSentence";
import ImageMultipleChoice from "./src/screens/ImageMultipleChoice";
import OpenEnded from "./src/screens/OpenEnded";

import {
  ITranslateSentence,
  IImageMultipleChoice,
  IOpenEnded,
} from "./src/types/models";
import questions from "./assets/data/questions";

export default function App() {
  const [lives, setLives] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];
  const completetionRate = ((questionIndex + 1) / questions.length) * 100;

  const correctHandler = () => {
    if (questionIndex + 1 > questions.length - 1) {
      Alert.alert("You Won", "Restart Game.", [
        {
          text: "Ok",
          onPress: restartHandler,
        },
      ]);

      return;
    }

    setQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  const incorrectHandler = () => {
    setLives((currentLives) => currentLives - 1);

    if (lives <= 1) {
      Alert.alert("You Lost", "Restart Game.", [
        {
          text: "Ok",
          onPress: restartHandler,
        },
      ]);

      return;
    }

    Alert.alert("Sorry", "Answer is incorrect.");
  };

  const restartHandler = () => {
    setLives(3);
    setQuestionIndex(0);
  };

  return (
    <Container>
      <Header completionRate={completetionRate} lives={lives} />

      {question.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoice
          question={question as IImageMultipleChoice}
          onCorrect={correctHandler}
          onIncorrect={incorrectHandler}
        />
      )}

      {question.type === "OPEN_ENDED" && (
        <OpenEnded
          question={question as IOpenEnded}
          onCorrect={correctHandler}
          onIncorrect={incorrectHandler}
        />
      )}

      {question.type === "TRANSLATE_SENTENCE" && (
        <TranslateSentence
          question={question as ITranslateSentence}
          onCorrect={correctHandler}
          onIncorrect={incorrectHandler}
        />
      )}
    </Container>
  );
}
