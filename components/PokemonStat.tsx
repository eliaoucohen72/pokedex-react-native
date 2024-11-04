import { Colors } from "@/constants/colors";
import { UseFontStyle } from "@/hooks/useFontStyle";
import { StyleSheet, View } from "react-native";
import { Row } from "./Row";

type Props = {
  color: string;
  name: string;
  value: number;
};

export const PokemonStat = ({ color, name, value }: Props) => {
  return (
    <Row style={{ paddingLeft: 30, paddingRight: 30, gap: 8, height: 12 }}>
      <UseFontStyle
        text={name}
        variant="subtitle3"
        color={color}
        style={{ width: 31 }}
      />
      <View
        style={{
          borderColor: Colors.grey,
          borderStyle: "solid",
          borderWidth: 1,
          height: 30,
        }}
      />
      <UseFontStyle
        text={value.toString().padStart(3, "0")}
        variant="body3"
        style={{ width: 23 }}
      />
      <Row style={{ height: 4, flex: 1, borderRadius: 20 }}>
        <View
          style={{
            borderColor: color,
            borderStyle: "solid",
            borderWidth: 2,
            width: 50,
          }}
        />
        <View
          style={{
            borderColor: color,
            borderStyle: "solid",
            borderWidth: 2,
            opacity: 0.5,
            flex: 1,
          }}
        />
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({});
