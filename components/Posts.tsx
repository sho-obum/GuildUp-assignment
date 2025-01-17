"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Post } from '@/components/Post';
import { Loader } from '@/components/Loader';

// Define interface for post data
interface IPost {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  // Add type to useState for posts array
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: IPost[] = await response.json();
      // Take only first 5 posts for demonstration
      setPosts(data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center ">
        <h1 className="text-3xl font-bold">Custom Posts</h1>
        <Button 
          onClick={fetchPosts}
          className="bg-gray-500 hover:bg-gray-600"
        >
          Fetch Posts
        </Button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post 
                key={post.id} 
                post={{
                  id: post.id,
                  title: post.title,
                  body: post.body
                }} 
              />
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                No posts yet.
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;