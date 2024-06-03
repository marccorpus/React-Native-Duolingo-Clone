import { View } from "react-native";

import styles from "./styles";

interface ProgressBarProps {
  completionRate: number;
}

const ProgressBar = ({ completionRate }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, { width: `${completionRate}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
};

export default ProgressBar;
