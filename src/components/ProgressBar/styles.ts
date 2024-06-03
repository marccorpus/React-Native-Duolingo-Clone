import { StyleSheet } from "react-native";

import colors from "../../themes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    backgroundColor: colors.mediumGray,
    borderRadius: 15,
    overflow: "hidden",
  },
  innerContainer: {
    height: 30,
    backgroundColor: colors.yellow,
    justifyContent: "center",
  },
  highlight: {
    height: 12,
    backgroundColor: colors.lightGray,
    opacity: 0.2,
    marginHorizontal: 12,
    borderRadius: 6,
  },
});

export default styles;
