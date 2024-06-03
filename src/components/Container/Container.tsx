import { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./styles";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
