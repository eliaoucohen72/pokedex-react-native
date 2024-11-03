import {Colors} from "@/constants/colors";
import { StyleSheet, Text } from "react-native";

type FontVariant = "headline" | "normal";

type Props = {
  text: string;
  variant: FontVariant;
};

export const UseFontStyle = ({ text, variant }: Props) => {
  return <Text style={styles[variant as FontVariant]}>{text}</Text>;
};

const styles = StyleSheet.create({
  headline: {
    lineHeight: 32,
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.white
  },
  normal: {
    lineHeight: 24,
    fontSize: 16,
  },
});
