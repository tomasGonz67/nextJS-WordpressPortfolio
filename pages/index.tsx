import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/Header";
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import React, { useState } from 'react';

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
  featuredImage: { node: {sourceUrl: string, description: string}}
};


type ProjectsProps = {
  projects: Node[];
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const graphEndpoint="https://irp.iml.mybluehost.me/website_cebc75f6/https://irp.iml.mybluehost.me/website_cebc75f6/https://irp.iml.mybluehost.me/website_cebc75f6/graphql";
  const query=`query { projects { nodes { id title content featuredImage { node { sourceUrl description} }  } } }`
  const res = await fetch(graphEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });;
  const {data} = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {projects:data.projects.nodes}
  }
}

const processHtmlString = (html: string) => {
  // Remove <body> and </body> tags, and <p> and </p> tags
  if (html!=null){
    const sanitizedHtml = html
    .replace(/<body>|<\/body>/g, "")  // Remove <body> and </body> tags
    .replace(/<p>|<\/p>/g, "");      // Remove <p> and </p> tags
    return sanitizedHtml;
  }

  else{
    return;
  }

};

export default function Home({projects}: ProjectsProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>


      <main className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-300 underline text-center mb-10">Projects</h1>
        <h1 className="text-2xl font-bold text-gray-300 text-center mb-4">Click on any to demo</h1>
        <div className="grid gap-8">  
          {projects.slice().reverse().map((project) => (
            <a
              href={processHtmlString(project.featuredImage.node.description)} // Ensure this field is available from GraphQL
              target="_blank"
              >
            <div 
              key={project.id} 
              className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Image 
                src={project.featuredImage.node.sourceUrl}
                alt={project.title}
                width={300}
                height={500}
                className="w-full h-56 object-cover"
              />
               <div className="p-6">
                <h2 className="text-xl font-semibold text-white underline">{project.title}</h2>
                <div className="text-gray-300 text-lg mt-2" dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>
            </a>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      Website made with NextJs, Typescript, Wordpress, and WPgraphQL.

      </footer>
    </div>
  );
}


