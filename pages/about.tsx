import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Navbar/>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1> ABOUT</h1>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">



        </footer>
    </div>
  );
}
