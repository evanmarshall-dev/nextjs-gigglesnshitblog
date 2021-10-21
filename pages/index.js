import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0">
      <Head>
        <title>Giggles N Shit --Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <header>
          <a href="/" className="hover:text-purple-600 focus:text-purple-600">
            <h1 className="text-6xl font-bold">Giggles N Shit --Blog</h1>
          </a>
          <p className="mt-3 text-2xl">
            This will be the main blog description
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Shit, I'm Pregnant &rarr;</h3>
            <p className="mt-4 text-xl">
              This will be the description for the first blog post: Shit, I'm
              Pregnant
            </p>
          </a>
          <a
            href="/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Shit, I'm Pregnant &rarr;</h3>
            <p className="mt-4 text-xl">
              This will be the description for the first blog post: Shit, I'm
              Pregnant
            </p>
          </a>
          <a
            href="/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Shit, I'm Pregnant &rarr;</h3>
            <p className="mt-4 text-xl">
              This will be the description for the first blog post: Shit, I'm
              Pregnant
            </p>
          </a>
          <a
            href="/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Shit, I'm Pregnant &rarr;</h3>
            <p className="mt-4 text-xl">
              This will be the description for the first blog post: Shit, I'm
              Pregnant
            </p>
          </a>
        </div>
      </main>
      <footer
        className="flex items-center justify-center w-full h-24 border-t bg-purple-100"
        style={{ height: "15vh" }}
      >
        <a
          className="flex items-center justify-center hover:text-purple-600 focus:text-purple-600"
          href="https://elysianwebdesign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carefully crafted by Elysian Web Design
        </a>
      </footer>
    </div>
  );
}
