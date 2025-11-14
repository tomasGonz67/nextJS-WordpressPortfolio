import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import React, { useState } from 'react';
import { fetchData } from "../lib/strapi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type About = {
  id: number;
  documentId: string;
  title: string;
  blocks?: any[]; // Dynamic zone with various component types
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type AboutProps = {
  about: About | null;
};

export async function getStaticProps() {
  let about: About | null = null;
  
  try {
    const json = await fetchData("/api/about?populate[blocks][populate]=*");
    console.log('About JSON:', JSON.stringify(json, null, 2));
    about = json.data || null;
  } catch (error) {
    console.error('Error fetching about:', error);
  }

  return {
    props: { about },
    revalidate: 30,
  };
}

// Render component function
const renderComponent = (block: any) => {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  switch (block.__component) {
    case 'shared.quote':
      return (
        <blockquote className="border-l-4 border-gray-500 pl-6 py-4 my-6 italic">
          <p className="text-xl text-gray-300 mb-2">&ldquo;{block.body}&rdquo;</p>
          <footer className="text-gray-400 text-sm">— {block.title}</footer>
        </blockquote>
      );

    case 'shared.rich-text':
      return (
        <div className="my-6 text-gray-300">
          <h3 className="text-2xl font-bold text-white mb-3">{block.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: block.body }} />
        </div>
      );

    case 'shared.media':
      if (block.file?.url) {
        return (
          <div className="my-6">
            <Image
              src={`${STRAPI_URL}${block.file.url}`}
              alt={block.file.alternativeText || 'Media'}
              width={block.file.width || 800}
              height={block.file.height || 600}
              className="rounded-lg w-full h-auto"
            />
            {block.file.caption && (
              <p className="text-center text-gray-400 text-sm mt-2">{block.file.caption}</p>
            )}
          </div>
        );
      }
      return null;

    case 'shared.slider':
      return (
        <div className="my-6 bg-gray-700 p-6 rounded-lg">
          <p className="text-gray-300">Slider component</p>
        </div>
      );

    default:
      return (
        <div className="my-4 p-4 bg-gray-700 rounded">
          <p className="text-gray-400 text-sm">Unknown component: {block.__component}</p>
        </div>
      );
  }
};

export default function About({ about }: AboutProps) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
  
        <main className="max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-300 underline text-center mb-10">About Me</h1>
  
          {!about ? (
            <p className="text-center text-gray-400">No about content yet. Add your about data source.</p>
          ) : (
            <div className="bg-gray-800 text-white shadow-lg rounded-2xl overflow-hidden w-full">
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-4">{about.title}</h2>
                {about.blocks && about.blocks.length > 0 && (
                  <div className="mt-4">
                    {about.blocks.map((block, index) => (
                      <div key={index}>
                        {renderComponent(block)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
        <Footer/>
    </div>
  );
}
