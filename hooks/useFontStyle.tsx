import { StyleSheet, Text, ViewProps, ViewStyle } from "react-native";

type FontVariant =
  | "headline"
  | "normal"
  | "subtitle1"
  | "subtitle3"
  | "body3"
  | "caption";

type Props = ViewProps & {
  text: string;
  variant: FontVariant;
  color?: string;
  backgroundColor?: string;
  style?: any;
};

export const UseFontStyle = ({
  text,
  variant,
  color,
  backgroundColor,
  style,
}: Props) => {
  return (
    <Text
      style={[
        styles[variant as FontVariant],
        { color, backgroundColor, ...style },
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    lineHeight: 32,
    fontSize: 24,
  },
  normal: {
    lineHeight: 24,
    fontSize: 16,
  },
  subtitle1: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
  },
  subtitle2: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
  },
  subtitle3: {
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 16,
  },
  body3: {
    fontWeight: "regular",
    fontSize: 10,
    lineHeight: 16,
  },
  caption: {
    fontWeight: "regular",
    fontSize: 8,
    lineHeight: 12,
  },
});
