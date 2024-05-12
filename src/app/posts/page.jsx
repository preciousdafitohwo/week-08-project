import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function PostPage({ searchParams }) {
  const posts =
    await sql`SELECT posts.id, posts.name, posts.message, categories.category
    FROM posts
    JOIN categories ON posts.category_id = categories.id;`;
  console.log("posts results is:", posts);

  if (searchParams.sort === "desc") {
    posts.rows.reverse();
  }

  return (
    <div >
      <h1>Posts</h1>
      <Link href="/categories" className="posts-nav">View by Categories</Link>
      <Link href="/posts?sort=asc" className="posts-nav">Sort Ascending</Link>
      <Link href="/posts?sort=desc" className="posts-nav">Sort Descending</Link>
      <h2>View Previously left posts and click on post to comment on it...</h2>
      <div className="posts-container">
        {posts.rows.map((post) => {
          return (
            <div key={post.id} className="posts-wrapper">
            <Link href={`/posts/${post.id}`} className="posts-link">
              <h3>{post.name} said:</h3>
              <p>{post.message}</p>
              <p>Category: {post.category}</p>
              <button id="btn">Comment</button>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
