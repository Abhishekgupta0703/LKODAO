// app/blogs/[id]/BlogPage.tsx
"use client";

import { useEffect, useState } from "react";
import { daoBlogs, navItems } from "@/data/index"; // Adjust the import path based on your project structure
import "./ui.css";
import Footer from "../Footer";
import { FloatingNav } from "./FloatingNav";
import Link from "next/link";
import {  FaArrowLeft } from "react-icons/fa";

const BlogPage = ({ id }: { id: string }) => {
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    // Find the blog post by ID
    const blogPost = daoBlogs.find((blog) => blog.id.toString() === id);
    console.log("Blog Post:", blogPost);
    if (blogPost) {
      setBlogData(blogPost);
    }
  }, [id]);

  if (!blogData) {
    return (
      <main className="relative bg-black flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
        <p className="">Loading...</p>
        <FloatingNav navItems={navItems} />
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-4xl mx-auto md:p-6">
        <Link href={"/blogs"} className=" py-3 px-5 rounded-3xl bg-neutral-800 flex gap-2 items-center my-5 max-w-fit"><FaArrowLeft/>Back to Blogs</Link>
        <hr className="mb-6 border-t-4 border-gradient-to-r from-blue-500 to-indigo-700 shadow-lg rounded-lg" />
        <h1 className="text-4xl font-bold mb-4">{blogData.title}</h1>

        <img
          src={`/${blogData.image}`}
          alt={blogData.title}
          className="w-full md:h-96 object-cover rounded-lg mb-6"
        />

        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500">
            <span className="font-bold">{blogData.author}</span> |{" "}
            {blogData.readTime} | {blogData.category}
          </p>
        </div>

        <div
          className="text-gray-400 leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: blogData.description }}
        ></div>
      </div>
      <FloatingNav navItems={navItems} />
      <Footer />
    </main>
  );
};

export default BlogPage;
