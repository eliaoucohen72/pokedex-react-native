import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/colors";
import { UseFontStyle } from "@/hooks/useFontStyle";
import { capitalize } from "@/functions/pokemon";

type Props = {
  id: number;
  name: string;
};

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <Link href={{ pathname: "/pokemon/[id]", params: { id: id } }} asChild>
      <Pressable android_ripple={{ color: Colors.red }} style={styles.card}>
        <UseFontStyle
          text={`#${id.toString().padStart(3, "0")}`}
          variant="caption"
          color={Colors.grey}
          style={{ alignSelf: "flex-end" }}
        />
        <Image
          width={72}
          height={72}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
        <UseFontStyle text={capitalize(name)} variant="body3" />
        <View style={styles.footer}></View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    borderStyle: "solid",
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    position: "relative",
    zIndex: 1,
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    backgroundColor: Colors.lightGrey,
    zIndex: -1,
    borderRadius: 8,
  },
});
