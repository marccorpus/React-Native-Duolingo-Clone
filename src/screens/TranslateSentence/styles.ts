import { StyleSheet } from "react-native";

import colors from "../../themes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  speechContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.mediumGray,
  },
  selectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.mediumGray,
    paddingVertical: 12,
    minHeight: 70,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 12,
  },
});

export default styles;
