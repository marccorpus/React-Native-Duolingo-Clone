import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "48%",
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.darkGray,
    borderRadius: 8,
    padding: 8,
  },
  selectedContainer: {
    borderColor: colors.darkGreen,
    backgroundColor: colors.lightGreen,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: fonts.lg,
    fontWeight: "bold",
  },
  selectedText: {
    color: colors.darkGreen,
  },
});

export default styles;
