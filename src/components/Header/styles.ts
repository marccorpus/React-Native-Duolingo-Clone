import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  heart: {
    width: 30,
    height: 30,
  },
  lives: {
    color: colors.red,
    fontSize: fonts.lg,
    fontWeight: "bold",
  },
});

export default styles;
