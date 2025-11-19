import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ChatBot from "../Components/ChatBot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ChatBot />
    </>
  );
}
