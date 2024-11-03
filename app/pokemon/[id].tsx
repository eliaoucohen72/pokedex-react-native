import { RootView } from "@/components/RootView";
import { Colors } from "@/constants/colors";
import { GetSinglePokemon } from "@/types/GetSinglePokemon";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { UseFontStyle } from "@/hooks/useFontStyle";
import { capitalize, getPokemonColor } from "@/functions/pokemon";

export default function Pokemon() {
  const { id } = useLocalSearchParams();

  const { data } = useFetchQuery(`/pokemon/${id}/`);
  const pokemon: GetSinglePokemon = { ...data };

  console.log("aaaaaa a", pokemon);

  const { types, weight, height, moves, name } = pokemon;
  const backgroundColor = types?.[0]?.type?.name
    ? getPokemonColor(types[0].type.name)
    : "#fff";

  return data?.isFetching ? (
    <Text>test</Text>
  ) : (
    <RootView style={{ ...styles.container, backgroundColor }}>
      <Image
        width={200}
        height={200}
        source={require("@/assets/images/big_pokeball.png")}
        style={styles.pokeball}
      />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Link href={{ pathname: "/" }} asChild>
            <Pressable>
              <Image
                width={32}
                height={32}
                source={require("@/assets/images/back.png")}
              />
            </Pressable>
          </Link>
          <UseFontStyle text={capitalize(name)} variant="headline" />
        </View>
        <Text style={styles.id}>{`#${id.toString().padStart(3, "0")}`}</Text>
      </View>
      <Image
        style={styles.pokemon_image}
        width={200}
        height={200}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
      />
      <View style={styles.body}>
        <View style={styles.types}>
          {types?.map((e, index) => (
            <Text
              key={index}
              style={{
                ...styles.type,
                backgroundColor: getPokemonColor(e.type.name),
              }}
            >
              {e.type.name}
            </Text>
          ))}
        </View>
        <Text>aaa</Text>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    position: "relative",
  },
  pokeball: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 10,
  },
  id: {
    color: Colors.white,
    fontWeight: "bold",
  },
  body: {
    borderRadius: 4,
    backgroundColor: Colors.white,
    height: "70%",
    paddingTop: 50,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  type: {
    color: Colors.white,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
  },
  pokemon_image: {
    position: "absolute",
    zIndex: 1,
    bottom: "65%",
  },
});
