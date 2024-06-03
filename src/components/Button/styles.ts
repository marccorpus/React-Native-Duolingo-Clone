import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.maskGreen,
    borderColor: colors.featherGreen,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderRadius: 6,
    padding: 8,
  },
  text: {
    color: colors.white,
    fontSize: fonts.xl,
    fontWeight: "bold",
    textAlign: "center",
  },
  disabled: {
    backgroundColor: colors.mediumGray,
    borderColor: colors.darkGray,
  },
});

export default styles;
