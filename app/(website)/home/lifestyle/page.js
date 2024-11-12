import HomeLifeStyle from "./lifestyle";
import Head from 'next/head';
import { getAllPosts } from "@/lib/sanity/client";

export default async function LifeStyleHomePage() {
  <Head>
 <meta name="google-adsense-account" content="ca-pub-7094656317998541"></meta>
</Head>
  const posts = await getAllPosts();
  return <HomeLifeStyle posts={posts} />;
}

// export const revalidate = 60;
