import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.mediumGray,
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: fonts.lg,
    fontWeight: "700",
  },
  selectedContainer: {
    backgroundColor: colors.mediumGray,
  },
  selectedText: {
    color: colors.mediumGray,
  },
});

export default styles;
