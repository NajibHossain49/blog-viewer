import Link from 'next/link';

// Mock API function
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <article key={post.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <Link href={`/posts/${post.id}`} className="text-xl text-blue-600 hover:text-blue-800">
              {post.title}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
