import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BlogType } from "@/utils/interface";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}
export const revalidate = 60;

async function getBlog(slug: string) {
  const qeury = `
     *[_type == "Blogss" && slug.current == "${slug}"][0] {
  title,
  slug,
  publishedAt,
  writer,
  excerpt,
  _id,
  body
}`;
  const blog = await client.fetch(qeury);
  return blog;
}

const SingleBlogPage = async ({ params }: Params) => {
  const blog: BlogType = await getBlog(params?.slug);
  if(!blog) {
    notFound();
  }
  return (
    <div className="w-full h-screen  p-10">
      <span className=" text-xl text-white">{blog?.title}</span>
      <span className=" text-xl text-white">{blog?.writer}</span>
      <div className={richTextStyles}>
        <PortableText components={myPortableTextComponent} value={blog?.body} />
      </div>
      <div className="text-center text-black  w-full h-full "></div>
    </div>
  );
};

export default SingleBlogPage;

const myPortableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="" width={700} height={700} />
    ),
  },
};

const richTextStyles = `
mt-14 
text-justify
max-w-2xl
m-auto
prose-heading:my-5
prose-heading:text-2xl
prose-p:mb-5 
prose-p:leading-7 
prose-li:list-disc
prose-li:leading-7 
prose-li:ml-4
`;
