import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import { fetchGraphQL } from "../lib/fetchGraph";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Resume = {
  featuredImage: { node: {sourceUrl: string, description: string}}
};

type ResumeProps={
    resume:Resume[];
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
  }}

export async function getStaticProps() {
  const query=`query { posts { nodes { featuredImage {node {sourceUrl description }}  } } }`
  const data = await fetchGraphQL(query);

  return {
    props: {resume:data.posts.nodes}
  };
}

export default function Resume({resume}: ResumeProps) {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
        <Navbar/>
        <main className="">
          <div>
        <a
              href={processHtmlString(resume[0].featuredImage.node.description)} // Ensure this field is available from GraphQL
              target="_blank"
              >
                      <Image 
                        src={resume[0].featuredImage.node.sourceUrl}
                        alt="resume"
                        width={500}
                        height={800}
                        className="w-full h-full object-cover"
                      />
        </a>
        <p className="text-center">Click for full resume</p>
        </div>
        </main>
        <Footer/>
    </div>
  );
}
