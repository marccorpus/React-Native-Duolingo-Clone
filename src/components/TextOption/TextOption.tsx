import { Pressable, Text } from "react-native";

import styles from "./styles";

interface TextOptionProps {
  text: string;
  isSelected?: boolean;
  onPress: () => void;
}

const TextOption = ({ text, isSelected = false, onPress }: TextOptionProps) => {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default TextOption;
