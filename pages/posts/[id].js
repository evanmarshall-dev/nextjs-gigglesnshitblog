import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
// import Date from "../../components/Date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0">
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center justify-center w-full text-center px-10 py-20 border-b-2 mb-20">
        <Image src={postData.cover_image} height={850} width={850} />
        <Link href="/">
          <a className="hover:text-purple-600 focus:text-purple-600 mt-10">
            <h1 className="text-6xl font-bold">{postData.title}</h1>
          </a>
        </Link>
        {/* <Date className="my-3 text-2xl" dateString={postData.date} /> */}
        <p className="my-3 text-2xl">{postData.date}</p>
      </header>
      <article className="flex flex-col items-center justify-center w-full flex-1 px-10 pb-20 text-center prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href="/">
          <a className="p-6 mt-6 border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600 text-center">
            Back to Home Page
          </a>
        </Link>
      </article>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
