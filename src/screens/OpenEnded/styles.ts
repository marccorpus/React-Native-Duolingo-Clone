import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  speechContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  eddy: {
    width: 150,
    height: 150,
  },
  textContainer: {
    borderWidth: 2,
    borderColor: colors.darkGray,
    borderRadius: 8,
    padding: 8,
  },
  text: {
    color: colors.black,
    fontSize: fonts.lg,
    fontWeight: "700",
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.mediumGray,
    borderRadius: 8,
    padding: 8,
    fontSize: fonts.lg,
  },
});

export default styles;
