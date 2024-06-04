import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Container from "./src/components/Container";
import Header from "./src/components/Header";

import Loading from "./src/screens/Loading";
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
  const [isLoading, setIsLoading] = useState(true);

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

  const loadDataHandler = async () => {
    const _lives = await AsyncStorage.getItem("lives");
    const _questionIndex = await AsyncStorage.getItem("questionIndex");

    if (_lives) setLives(parseInt(_lives));
    if (_questionIndex) setQuestionIndex(parseInt(_questionIndex));

    setIsLoading(false);
  };

  const saveDataHandler = async () => {
    await AsyncStorage.setItem("lives", String(lives));
    await AsyncStorage.setItem("questionIndex", String(questionIndex));
  };

  useEffect(() => {
    loadDataHandler();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveDataHandler();
    }
  }, [isLoading, lives, questionIndex]);

  if (isLoading) {
    return <Loading />;
  }

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
