import { StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: React.ReactNode;
};

export const Row = ({ children, style }: Props) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: 'center'
  },
});
