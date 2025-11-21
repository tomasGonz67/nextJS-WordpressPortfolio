import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ChatBot from "../Components/ChatBot";

export default function App({ Component, pageProps }: AppProps) {
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  return (
    <>
      <Component {...pageProps} isChatExpanded={isChatExpanded} />
      <ChatBot isExpanded={isChatExpanded} setIsExpanded={setIsChatExpanded} />
    </>
  );
}
