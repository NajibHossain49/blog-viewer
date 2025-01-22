// app/page.js
import Link from 'next/link';

// Mock API function
async function getPosts() {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    { id: 1, title: 'Getting Started with Next.js', slug: 'getting-started-nextjs' },
    { id: 2, title: 'Understanding React Server Components', slug: 'react-server-components' },
    { id: 3, title: 'The Power of Dynamic Routing', slug: 'dynamic-routing' },
  ];
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <article key={post.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <Link href={`/posts/${post.slug}`} className="text-xl text-blue-600 hover:text-blue-800">
              {post.title}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}