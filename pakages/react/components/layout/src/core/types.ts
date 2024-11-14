import { StyleSprinkles } from "./style.css";
import { vars } from "@kyh/themes";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>
}

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color: keyof typeof vars.colors.$scale & string;
  background: keyof typeof vars.colors.$scale & string;
}

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
// type StyleProps = { marginTop: string, marginRight: string, ..., color: 'whiteAlpha' | 'blackAlpha' | .... }