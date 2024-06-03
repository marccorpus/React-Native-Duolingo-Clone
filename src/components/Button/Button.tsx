import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({ children, disabled = false, onPress }: ButtonProps) => {
  return (
    <Pressable
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
