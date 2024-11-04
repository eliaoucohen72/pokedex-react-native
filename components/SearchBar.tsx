import { Colors } from "@/constants/colors";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Row } from "./Row";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchBar = ({ setSearch }: Props) => {
  return (
    <Row style={styles.searchBar}>
      <Image
        width={16}
        height={16}
        source={require("@/assets/images/search.png")}
      />
      <TextInput placeholder="Search" onChangeText={setSearch}></TextInput>
    </Row>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.white,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
});
