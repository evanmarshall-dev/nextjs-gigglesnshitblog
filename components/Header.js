import Link from "next/link";
import Image from "next/image";

const siteTitle = "Giggles N Shit --Blog";
const desc =
  "Join me as I narrate my first attempt at parenting. As a stay at home daddy, it is not your most conventional family life. Expect lots of love, laughter and poo mixed into these stories!";
const mainImg = "/images/beach-bums.jpg";
const mainImgAlt =
  "Isla and Rae sitting in front of the ocean water at a beach";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full text-center px-10 py-20 border-b-2 mb-20">
      <Image src={mainImg} height={850} width={850} alt={mainImgAlt} />
      <Link href="/">
        <a className="hover:text-purple-600 focus:text-purple-600 mt-10">
          <h1 className="text-6xl font-bold">{siteTitle}</h1>
        </a>
      </Link>
      <p className="mt-3 text-2xl max-w-xl">{desc}</p>
    </header>
  );
}
