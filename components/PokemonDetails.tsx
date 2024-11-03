import { RootView } from "@/components/RootView";
import { Colors } from "@/constants/colors";
import { capitalize, getPokemonColor } from "@/functions/pokemon";
import { UseFontStyle } from "@/hooks/useFontStyle";
import { GetSinglePokemon } from "@/types/GetSinglePokemon";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { PokemonStat } from "./PokemonStat";

type Props = {
  id: string | string[];
  pokemon: GetSinglePokemon;
};

export const PokemonDetails = ({ id, pokemon }: Props) => {
  const { types, weight, height, name, abilities } = pokemon;

  const backgroundColor = types?.[0]?.type?.name
    ? getPokemonColor(types[0].type.name)
    : "#fff";

  return (
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
          <UseFontStyle
            text={capitalize(name)}
            variant="headline"
            color={Colors.white}
          />
        </View>
        <UseFontStyle
          text={`#${id.toString().padStart(3, "0")}`}
          variant="subtitle3"
          color={Colors.white}
        />
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
            <UseFontStyle
              key={index}
              variant="subtitle3"
              text={capitalize(e.type.name)}
              backgroundColor={getPokemonColor(e.type.name)}
              style={{
                ...styles.type,
              }}
            />
          ))}
        </View>
        <UseFontStyle
          text="About"
          variant="subtitle1"
          color={backgroundColor}
          style={{ textAlign: "center" }}
        />
        <View style={styles.detailContainer}>
          <View style={styles.detail}>
            <View style={styles.detailValue}>
              <Image
                width={16}
                height={16}
                source={require("@/assets/images/weight.png")}
              />
              <UseFontStyle text={`${weight / 10} kg`} variant="body3" />
              <Text></Text>
            </View>
            <UseFontStyle text="Weight" variant="body3" color={Colors.grey} />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailValue}>
              <Image
                width={16}
                height={16}
                source={require("@/assets/images/height.png")}
              />
              <UseFontStyle text={`${height / 10} m`} variant="body3" />
            </View>
            <UseFontStyle text="Height" variant="body3" color={Colors.grey} />
          </View>
          <View style={styles.detail}>
            <View style={styles.detailValue}>
              <UseFontStyle
                text={abilities
                  ?.map((e) => capitalize(e.ability.name))
                  .join("\n")}
                variant="body3"
              />
            </View>
            <UseFontStyle text="Moves" variant="body3" color={Colors.grey} />
          </View>
        </View>
        <UseFontStyle
          text="Base Stats"
          variant="subtitle1"
          color={backgroundColor}
          style={{ textAlign: "center" }}
        />
        <View>
          <PokemonStat color={backgroundColor} name="HP" value={11} />
          <PokemonStat color={backgroundColor} name="ATK" value={11} />
          <PokemonStat color={backgroundColor} name="DEF" value={11} />
          <PokemonStat color={backgroundColor} name="SATK" value={11} />
          <PokemonStat color={backgroundColor} name="SPEF" value={11} />
          <PokemonStat color={backgroundColor} name="SPD" value={11} />
        </View>
      </View>
    </RootView>
  );
};

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
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 10,
  },
  body: {
    height: "70%",
    backgroundColor: Colors.white,
    borderRadius: 4,
    paddingTop: 50,
    gap: 20,
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
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  pokemon_image: {
    position: "absolute",
    top: "20%",
    left: "35%",
    zIndex: 1,
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 200,
    height: 200,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
  },
  detail: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1 / 3,
    height: 60,
  },
  detailValue: { flexDirection: "row", alignItems: "center", gap: 10 },
});
