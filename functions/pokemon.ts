import { PokemonTypesColor } from "@/constants/colors";

export function getPokemonId(url: string): number {
  return parseInt(url.split("/").at(-2)!, 10);
}

export function capitalize(text: string) {
  if (typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function getPokemonColor(name: string) {
  return PokemonTypesColor[name as keyof typeof PokemonTypesColor];
}
