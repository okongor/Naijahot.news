import HomeLifeStyle from "./lifestyle";
import Head from 'next/head';
import { getAllPosts } from "@/lib/sanity/client";

export default async function LifeStyleHomePage() {
  <Head>
<meta name="4a31c1f05f765d4fb24fda4a5904a040a4a0c9f9" content="4a31c1f05f765d4fb24fda4a5904a040a4a0c9f9" />
</Head>
  const posts = await getAllPosts();
  return <HomeLifeStyle posts={posts} />;
}

// export const revalidate = 60;
