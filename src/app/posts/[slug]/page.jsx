async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Post not found');
  }
  return res.json();
}

export default async function Post({ params }) {
  // Use `params.slug` as the post ID
  const post = await getPost(params.slug);

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <span>Author ID: {post.userId}</span> • <span>Post ID: {post.id}</span>
      </div>
      <div className="prose lg:prose-xl">
        {post.body}
      </div>
    </article>
  );
}
