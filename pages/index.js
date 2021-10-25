// Import the filesystem node js module into react and it won't work because it only works on server side not client side. Therefore we bring it into the getstaticprops function which is on the server side
import fs from "fs";
// Import path which allows us to easily look in root folder for a particular folder or path
import path from "path";
// Gray matter helps parse the markdown
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  // Shows the array with the posts with slug and front matter
  // console.log(posts);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0">
      <Head>
        <title>Giggles N Shit --Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div className="posts flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // To pull in static (not api) posts we fetch data
  // Using path.join allows us to look inside root folder for path called posts
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and front matter (i.e. title, date, excerpt) from posts
  // Create variable set to files array to be mapped/looped to
  const posts = files.map((filename) => {
    // For each filename we want to create slug and replace filenames with extension .md with nothing
    const slug = filename.replace(".md", "");
    // Also want to get the front matter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    // Shows all of the markdown or front matter in the console
    // console.log(markdownWithMeta);
    // Wrap the markdownwithmeta which is the front matter with gray matter which parses it so that it can be returned below with the slug and we can now use within the home page component
    const { data: frontmatter } = matter(markdownWithMeta);
    // Return an object with all of the slugs
    return {
      slug,
      frontmatter,
    };
  });

  // Shows the slug without .md extension in the console
  // console.log(posts);

  return {
    // Return an object for posts, which we destructure in the page component
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
