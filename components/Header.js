import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full text-center px-10 py-20">
      <Link href="/">
        <a className="hover:text-purple-600 focus:text-purple-600">
          <h1 className="text-6xl font-bold">Giggles N Shit --Blog</h1>
        </a>
      </Link>
      <p className="mt-3 text-2xl">This will be the main blog description</p>
    </header>
  );
}
