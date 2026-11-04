import type { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

/** Root layout — locale-specific html lang is set in [locale]/layout. */
export default function RootLayout({ children }: Props) {
  return children;
}
