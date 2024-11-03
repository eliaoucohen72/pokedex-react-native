import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/colors";

type Props = {
  id: number;
  name: string;
};

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <Link href={{ pathname: "/pokemon/[id]", params: { id: id } }} asChild>
      <Pressable android_ripple={{ color: Colors.red }} style={styles.card}>
        <Text style={styles.id}>{`#${id.toString().padStart(3, "0")}`}</Text>
        <Image
          width={72}
          height={72}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
        <Text style={styles.name}>{name}</Text>
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
  id: {
    alignSelf: "flex-end",
    fontSize: 10,
    color: Colors.grey,
  },
  name: {
    fontSize: 12,
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
