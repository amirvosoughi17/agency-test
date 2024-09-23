import { BlogType } from "@/utils/interface";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link href={`/blogs/${blog.slug.current}`}>
      <div className="">
        <h2>{blog.title}</h2>
        <p>{new Date(blog?.publishedAt).toDateString()}</p>
        <p>{blog.writer}</p>
        <p>{blog.excerpt}</p>
      </div>
    </Link>
  );
};
