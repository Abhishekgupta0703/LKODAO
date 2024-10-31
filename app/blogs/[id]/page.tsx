// app/blogs/[id]/page.tsx

import BlogPost from "@/components/ui/BlogPost";

export async function generateStaticParams() {
  const blogIds = ["1", "2", "3","4","5","6","7","8","9","10"]; // Replace with actual blog IDs
  return blogIds.map((id) => ({ id }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Render the Client Component, passing the ID as a prop
  return <BlogPost id={id} />;
}
