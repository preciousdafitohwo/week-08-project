import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Posts",
  description: "View previously left posts and leave comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">View Posts</Link></li>
            <li><Link href="/addPost">Add New Post</Link></li>
            <li><Link href="/categories">View by Categories</Link></li>
            
          </ul>
        </nav>
        {children}
        <footer>Made by Precious Dafitohwo &copy; 2024</footer>
        </body>
    </html>
  );
}
