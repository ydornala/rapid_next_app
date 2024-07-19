import React from 'react';
import "@/styles/globals.scss";
import "@/styles/header.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
