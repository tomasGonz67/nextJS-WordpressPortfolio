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

type Project = {
  id: number;
  documentId: string;
  projectName: string;
  description: string;
  url: string;
  image?: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type HomeProps = {
  projects: Project[];
};

export async function getStaticProps() {
  const json = await fetchData("/api/projects?populate=image");
  console.log(json.data);
  return {
    props: {
      projects: json.data,
    },
    revalidate: 30,
  };
}

export default function Home({ projects }: HomeProps) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>

      <main className="w-full max-w-lg mx-auto px-4 sm:px-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-300 underline text-center mb-6 sm:mb-10">Projects</h1>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-300 text-center mb-4">Click on any to demo</h1>
        
        {projects && projects.length > 0 ? (
          <div className="grid gap-6 sm:gap-8">  
            {projects.slice().reverse().map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                className="block"
              >
                <div 
                  className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  {project.image?.url && (
                    <Image 
                      src={`${STRAPI_URL}${project.image.url}`}
                      alt={project.projectName}
                      width={300}
                      height={500}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  )}
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-white underline">{project.projectName}</h2>
                    <div className="text-gray-300 text-base sm:text-lg mt-2">{project.description}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No projects yet. Add your projects data source.</p>
        )}
      </main>
      <Footer/>
    </div>
  );
}


