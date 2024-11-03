import { Colors } from "@/constants/colors";
import { Image, StyleSheet, View } from "react-native";

export const SortButton = () => {
  return (
    <View style={styles.sortButton}>
      <Image
        width={16}
        height={16}
        source={require("@/assets/images/sort.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
});
