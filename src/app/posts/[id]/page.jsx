import { sql } from "@vercel/postgres";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function PostById({ params }) {
  const result = await sql`
  SELECT posts.id, posts.name, posts.message, categories.category AS category_name
  FROM posts
  JOIN categories ON posts.category_id = categories.id
  WHERE posts.id = ${params.id}`;
const post = result.rows[0];
const getComments = await sql`
SELECT * FROM comments WHERE post_id = ${params.id}
`;
const comments = getComments.rows;
  async function handleComment (formData) {
    "use server";

    const name = formData.get("name");
    const comment = formData.get("comment");
    const id = `${params.id}`;

await sql `INSERT INTO comments (name, comment, post_id) VALUES (
    ${name}, ${comment}, ${id}
)`;


revalidatePath(`/posts/${post.id}`);
redirect(`/posts/${post.id}`);


  }

  return (
    <div>
        <h1>Posts</h1>
        <hr />
      <h3>{post.name} said:</h3>
      <p>{post.message}</p>
      <p>Category: {post.category_name}</p>
      <hr />

        <p>Leave a comment on the post above:</p>
        <hr />
      <form action={handleComment} className="comment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required placeholder="Name" />
        <label htmlFor="comment">Comment:</label>
        <textarea name="comment" placeholder="Enter a comment" required></textarea>
        <input type="submit" value="Send Comment" />
      </form>
        <hr />
      <div >
        {comments.map((comment) => {
            return (
                <div key={comment.id} className="comments-wrapper">
                    <h3>{comment.name} said:</h3>
                    {comment.comment}</div>
            )
        })}
        
      </div>
    </div>
  );
}
