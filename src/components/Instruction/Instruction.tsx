import { ReactNode } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface InstructionProps {
  children: ReactNode;
}

const Instruction = ({ children }: InstructionProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Instruction;
