import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

import styles from "./styles";

interface SpeechProps {
  image: ImageSourcePropType;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Speech = ({ image, text, containerStyle }: SpeechProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Speech;
