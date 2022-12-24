import { IconStyle, RootStyle, TextStyle } from "./styles";
import React from "react";

interface ItemProps {
  children: React.ReactNode[] | React.ReactNode;
}

export function Root({ children }: ItemProps) {
  return <RootStyle>{children}</RootStyle>;
}

interface IconProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function Icon({ children, backgroundColor }: IconProps) {
  return <IconStyle backgroundColor={backgroundColor}>{children}</IconStyle>;
}

interface TextProps {
  text: string;
}

export function Text({ text }: TextProps) {
  return <TextStyle>{text}</TextStyle>;
}
