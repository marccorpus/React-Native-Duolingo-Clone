import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGreen,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderRadius: 8,
    padding: 8,
    marginVertical: 12,
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
