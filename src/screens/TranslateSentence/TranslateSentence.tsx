import { useState } from "react";
import { View } from "react-native";

import Instruction from "../../components/Instruction";
import Speech from "../../components/Speech";
import TextOption from "../../components/TextOption";
import Button from "../../components/Button";

import styles from "./styles";

import { ITranslateSentence } from "../../types/models";

interface TranslateSentenceProps {
  question: ITranslateSentence;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const TranslateSentence = ({
  question,
  onCorrect,
  onIncorrect,
}: TranslateSentenceProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const checkHandler = () => {
    if (JSON.stringify(selectedOptions) === JSON.stringify(question.answer)) {
      onCorrect();
    } else {
      onIncorrect();
    }
    setSelectedOptions([]);
  };

  const toggleOption = (option: string) => {
    setSelectedOptions((currentSelectedOptions) => {
      const index = currentSelectedOptions.indexOf(option);

      if (index === -1) {
        return [...currentSelectedOptions, option];
      } else {
        return currentSelectedOptions.filter((v) => v !== option);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Instruction>Translate this sentence</Instruction>

      <Speech
        containerStyle={styles.speechContainer}
        image={question.image}
        text={question.text}
      />

      <View style={styles.selectedContainer}>
        {selectedOptions.map((selectedOption) => (
          <TextOption
            key={selectedOption}
            text={selectedOption}
            onPress={() => toggleOption(selectedOption)}
          />
        ))}
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <TextOption
            key={option}
            text={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => toggleOption(option)}
          />
        ))}
      </View>

      <Button onPress={checkHandler} disabled={selectedOptions.length === 0}>
        Check
      </Button>
    </View>
  );
};

export default TranslateSentence;
