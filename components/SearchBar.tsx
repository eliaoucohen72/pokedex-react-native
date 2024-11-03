import { Colors } from "@/constants/colors";
import { Image, StyleSheet, TextInput, View } from "react-native";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchBar = ({ setSearch }: Props) => {
  return (
    <View style={styles.searchBar}>
      <Image
        width={16}
        height={16}
        source={require("@/assets/images/search.png")}
      />
      <TextInput placeholder="Search" onChangeText={setSearch}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.white,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
});
