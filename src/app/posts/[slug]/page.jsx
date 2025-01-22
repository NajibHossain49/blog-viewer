// app/posts/[slug]/page.js
async function getPost(slug) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const posts = {
      'getting-started-nextjs': {
        title: 'Getting Started with Next.js',
        content: 'Next.js is a powerful framework for building React applications...',
        author: 'John Doe',
        date: '2024-01-20'
      },
      'react-server-components': {
        title: 'Understanding React Server Components',
        content: 'Server Components are a new way to build React applications...',
        author: 'Jane Smith',
        date: '2024-01-21'
      },
      'dynamic-routing': {
        title: 'The Power of Dynamic Routing',
        content: 'Dynamic routing allows you to create pages that can handle dynamic data...',
        author: 'Bob Wilson',
        date: '2024-01-22'
      }
    };
  
    if (!posts[slug]) {
      throw new Error('Post not found');
    }
  
    return posts[slug];
  }
  
  export default async function Post({ params }) {
    const post = await getPost(params.slug);
  
    return (
      <article className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          <span>{post.author}</span> • <span>{post.date}</span>
        </div>
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </article>
    );
  }