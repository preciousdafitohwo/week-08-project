import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPost () {
    async function handleAddPost(formData) {
        "use server";
        
        const name = formData.get("name");
        const message = formData.get("message");
        const categoryId = formData.get("category");

        await sql`INSERT INTO posts (name, message, category_id) values (${name}, ${message}, ${categoryId})`;

        revalidatePath("/posts");
    
        redirect("/posts");
    }


    return(
        <div>
            <h1>Make a post!</h1>
            <hr />
            <form action={handleAddPost} className="comment-form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name" required/>
                <label htmlFor="message">Message:</label>
                <textarea type="text" name="message" placeholder="Type a post" required></textarea>
                <label htmlFor="category">Choose a Category:</label>
                <select name="category" required>
                    <option value="" required>--Please choose an option--</option>
                    <option value="5">Art</option>
                    <option value="1">Education</option>
                    <option value="4">Employment</option>
                    <option value="2">Health</option>
                    <option value="3">Sports</option>
                </select>
                <input type="submit" value="Add Post" id="add-post"/>


            </form>
        </div>
    )
}