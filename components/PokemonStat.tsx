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
    <Row>
      <UseFontStyle
        text={name}
        variant="subtitle3"
        color={color}
        style={{ textAlign: "end", width: '10%' }}
      />
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          borderRightColor: Colors.grey,
          borderRightWidth: 1,
          borderStyle: "solid",
        }}
      ></View>
      <UseFontStyle text={value.toString()} variant="body3" />
    </Row>
  );
};

const styles = StyleSheet.create({});
