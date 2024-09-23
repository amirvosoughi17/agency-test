export interface BlogType {
  title: string;
  slug: { current: string };
  publishedAt: string;
  writer: string;
  excerpt: string;
  body: any;
  _id : string;
}
