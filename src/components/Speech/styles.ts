import { StyleSheet } from "react-native";

import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.darkGray,
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: fonts.lg,
    fontWeight: "700",
  },
});

export default styles;
