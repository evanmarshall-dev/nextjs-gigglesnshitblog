// fs will cause an error again because it needs to be used on sever side so we add fs.readdirSync in the getStaticPaths FXN
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center justify-center w-full text-center px-10 py-20 border-b-2 mb-20">
        <Image src={cover_image} height={850} width={850} />
        <Link href="/">
          <a className="hover:text-purple-600 focus:text-purple-600 mt-10">
            <h1 className="text-6xl font-bold">{title}</h1>
          </a>
        </Link>
        <p className="my-3 text-2xl">{date}</p>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 pb-20 text-center">
        {/* Here is where we pull in the blog content from markdown and we parse it with marked import from above */}
        <div
          className="border-b-2 pb-20"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
        <Link href="/">
          <a className="p-6 mt-6 border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600 text-center">
            Back to Home Page
          </a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

// To get the static paths
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  // Now to generate paths by creating an array within an object containing params which will be what you want the paths to be. This is determined above with the replace method

  // Shows array of object with params
  // console.log(paths);

  return {
    paths,
    // fallback means that if you try to access a slug which doesn't exist then we get a 404 page
    fallback: false,
  };
}

// To get the data
// Because of the above getstaticpaths we now have access to destructure params: slug
export async function getStaticProps({ params: { slug } }) {
  // Shows the slug created by removing .md extension
  // console.log(slug);

  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    // Now these props can be passed in the page component above
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
