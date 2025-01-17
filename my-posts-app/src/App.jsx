import { useState } from 'react';
import { Post } from './components/Post';
import { Loader } from './components/Loader';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data.slice(0, 5)); // FOr testing Im limiting this to 5
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={fetchPosts}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg mb-8 hover:bg-blue-600"
        >
          Add Posts
        </button>

        {loading && <Loader />}

        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}