import * as React from "react";
import { TextProps } from "./types";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { clsx } from "clsx";
import { vars } from "@kyh/themes";

const Text = (props: TextProps, ref:React.Ref<HTMLElement>) => {
  const {children, as= "p", color, background } = props;
  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties)))]),
    style: {
      color: vars.colors.$scale?.[color]?.[700] ?? color,
      background: vars.colors.$scale?.[background]?.[100] ?? background,
    }
  }, children);
}

const _Text = React.forwardRef(Text);
export { _Text as Text }