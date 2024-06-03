import { StyleSheet, Platform, StatusBar } from "react-native";

import colors from "../../themes/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightGray,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default styles;
