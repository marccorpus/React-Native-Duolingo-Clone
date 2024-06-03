import { View, Image, Text } from "react-native";

import ProgressBar from "../ProgressBar";

import styles from "./styles";

interface HeaderProps {
  completionRate: number;
  lives: number;
}

const Header = ({ completionRate, lives }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <ProgressBar completionRate={completionRate} />

      <Image
        style={styles.heart}
        source={require("../../../assets/images/heart.png")}
        resizeMode="contain"
      />

      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default Header;
