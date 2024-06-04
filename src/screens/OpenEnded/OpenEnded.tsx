import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import Instruction from "../../components/Instruction";
import Speech from "../../components/Speech";
import Button from "../../components/Button";

import styles from "./styles";

import { IOpenEnded } from "../../types/models";

interface OpenEndedProps {
  question: IOpenEnded;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const OpenEnded = ({ question, onCorrect, onIncorrect }: OpenEndedProps) => {
  const [input, setInput] = useState("");

  const checkHandler = () => {
    if (input.toLowerCase().trim() === question.answer.toLowerCase()) {
      onCorrect();
    } else {
      onIncorrect();
    }
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Instruction>Translate this sentence</Instruction>

      <Speech image={question.image} text={question.text} />

      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        placeholder="Type in English"
        textAlignVertical="top"
        multiline
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />

      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={90}>
        <Button onPress={checkHandler} disabled={!input.trim()}>
          Check
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OpenEnded;
