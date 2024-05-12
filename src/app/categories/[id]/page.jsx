import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import Search from "./search";

export default async function Categories ({params}){
   
        const post = await sql.query ( `SELECT * FROM posts WHERE category_id = ($1)`,[params.id]);
        

        
    return (
        <div>
            <h1>View by Categories...</h1>    
               <Search/>

               {post.rows?.map((post) => {
                return (
                    <div key={post.id} className="posts-wrapper">
                        <h3>{post.name} said:</h3>
                        <p>{post.message}</p>
                    </div>
                )
               })}
                
        </div>

        
    )
}