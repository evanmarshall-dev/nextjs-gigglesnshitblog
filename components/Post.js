import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600">
        <Image src={post.frontmatter.cover_image} height={850} width={850} />
        <h3 className="text-2xl font-bold">{post.frontmatter.title}</h3>
        <em>{post.frontmatter.date}</em>
        <p className="mt-4 text-xl">{post.frontmatter.excerpt}</p>
      </a>
    </Link>
  );
}
