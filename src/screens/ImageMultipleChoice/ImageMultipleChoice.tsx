import { useState } from "react";
import { View } from "react-native";

import Instruction from "../../components/Instruction";
import ImageOption from "../../components/ImageOption";
import Button from "../../components/Button";

import styles from "./styles";

import {
  IImageMultipleChoice,
  IImageMultipleChoiceOption,
} from "../../types/models";

interface ImageMultipleChoiceProps {
  question: IImageMultipleChoice;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const ImageMultipleChoice = ({
  question,
  onCorrect,
  onIncorrect,
}: ImageMultipleChoiceProps) => {
  const [selected, setSelected] = useState<null | IImageMultipleChoiceOption>(
    null
  );

  const checkHandler = () => {
    if (selected?.correct) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setSelected(null);
  };

  return (
    <View style={styles.container}>
      <Instruction>{question.question}</Instruction>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            {...option}
            isSelected={option.id === selected?.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button onPress={checkHandler} disabled={!selected}>
        Check
      </Button>
    </View>
  );
};

export default ImageMultipleChoice;
