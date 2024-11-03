import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useInfiniteFetchQuery } from "../hooks/useFetchQuery";
import { getPokemonId } from "../functions/pokemon";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SortButton } from "@/components/SortButton";
import { Colors } from "@/constants/colors";
import { PokemonCard } from "@/components/PokemonCard";
import { RootView } from "@/components/RootView";

export default function Index() {
  const [search, setSearch] = useState("");

  const { data, isFetching, fetchNextPage } =
    useInfiniteFetchQuery("/pokemon?limit=21");

  const pokemons = data?.pages.flatMap((page) => page.results) ?? [];
  const filteredPokemons = search
    ? pokemons.filter(
        (p) =>
          p.name.includes(search.toLowerCase()) ||
          getPokemonId(p.url).toString() === search
      )
    : pokemons;

  return (
    <RootView>
      <View style={styles.header}>
        <Image
          width={24}
          height={24}
          source={require("@/assets/images/pokeball.png")}
        />
        <Text style={styles.title}>Pokedex</Text>
      </View>
      <View style={styles.optionBar}>
        <SearchBar setSearch={setSearch} />
        <SortButton />
      </View>
      <FlatList
        style={styles.list}
        data={filteredPokemons}
        numColumns={3}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListFooterComponent={
          isFetching ? <ActivityIndicator color={Colors.red} /> : null
        }
        onEndReached={() => fetchNextPage()}
        renderItem={({ item }) => (
          <PokemonCard id={getPokemonId(item.url)} name={item.name} />
        )}
      />
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    flex: 1,
    padding: 4,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 24,
    color: Colors.white,
  },
  optionBar: {
    flexDirection: "row",
    gap: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  list: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentContainerStyle: {
    gap: 8,
  },
  columnWrapperStyle: {
    gap: 8,
  },
});
