import { Pressable, Image, Text } from "react-native";

import styles from "./styles";

interface ImageOptionProps {
  image: string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const ImageOption = ({
  image,
  text,
  isSelected,
  onPress,
}: ImageOptionProps) => {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ImageOption;
