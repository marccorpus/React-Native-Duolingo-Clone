import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    backgroundColor: colors.mediumGray,
    borderRadius: 8,
    padding: 8,
    fontSize: fonts.lg,
  },
});

export default styles;
