import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import React, { useState } from 'react';
import { fetchGraphQL } from "../lib/fetchGraph";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Node = {
  id: string,
  title: string,
  content: string,
};

  
type AboutsProps = {
  abouts: Node[];
};
export async function getStaticProps() {
  const query=`query { abouts { nodes { id title content  } } }`
  const data = await fetchGraphQL(query);

  return {
    props: {abouts:data.abouts.nodes}
  };
}

export default function About({ abouts }: AboutsProps) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
  
        <main className="  max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-300 underline text-center mb-10">About Me</h1>
  
          <div className="grid gap-8">  
          {abouts.slice().reverse().map((about) => (
            <div
              key={about.id}
              className="bg-gray-800 text-white shadow-lg rounded-2xl overflow-hidden w-full"
            >
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-4">{about.title}</h2>
                <div
                  className="text-lg text-gray-300"
                  dangerouslySetInnerHTML={{ __html: about.content }}
                />
              </div>
            </div>
          ))}
          </div>
        </main>
        <Footer/>
    </div>
  );
}
