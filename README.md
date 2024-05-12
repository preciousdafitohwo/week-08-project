link to deployed page on vercel - https://week-08-project-sooty.vercel.app/

User Stories
🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category
🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post

Requirements

🎯 Created using create-next-app

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page


REQUIREMENTS MET:
1) users can see a list of posts
2) users can click on a post to leave a comment on that post
3) users can add new posts
4) users can filter posts by categories