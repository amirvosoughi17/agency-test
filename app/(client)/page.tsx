import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { BlogType } from "@/utils/interface";
async function getBlogs() {
  const query = `*[_type == "Blogss"] {
  title,
  slug,
  publishedAt,
  writer,
  excerpt,
}`;
  const data = await client.fetch(query);
  return data;
}
export const revalidate = 60;

export default async function Home() {
  const blogs: BlogType[] = await getBlogs();
  return (
    <div className="p-10">
      <Header title="Articles" />
      <div className="">
        {blogs && blogs?.map((blog , idx) => <BlogCard blog={blog} key={idx} />)}
      </div>
    </div>
  );
}
