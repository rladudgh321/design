import * as React from "react";
import { BoxProps } from "./types";
import {clsx} from "clsx"; 
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@kyh/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as ="div", children, color, background } = props;

  return React.createElement(as, {
    ...props,
    ref,
    style: {
      color: vars.colors.$scale?.[color]?.[700] ?? color,
      background: vars.colors.$scale?.[background]?.[100] ?? background,
      ...props.style,
    },
    className: clsx([StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties)))]),
  }, children)
}

const _Box = React.forwardRef(Box);
export { _Box as Box };