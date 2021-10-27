import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";

const siteTitle = "Giggles N Shit --Blog";
const desc =
  "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!";
const mainImg = "/images/beach-bums.jpg";

export default function Home({ allPostsData }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0">
      <Head>
        <title>Giggles N Shit --Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={desc} />
        <meta property="og:image" content={mainImg} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <h2 className="text-4xl">Blog Posts</h2>

        <div className="posts flex flex-wrap items-center justify-around m-6 sm:w-full">
          {allPostsData.map(({ id, date, title, excerpt, cover_image }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
                <Image src={cover_image} height={850} width={850} />
                <h3 className="text-2xl font-bold">{title}</h3>
                <Date dateString={date} />
                <p className="mt-4 text-xl">{excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
