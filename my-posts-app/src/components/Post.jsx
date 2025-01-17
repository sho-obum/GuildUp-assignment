
import { useState } from 'react';
import { Comment } from './Comment';
import { ShareDialog } from './ShareDialog';

export const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.body}</p>
      
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-2 px-4 py-2 rounded ${
            isLiked ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        
        <button
          onClick={() => setShowShareDialog(true)}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-100"
        >
          📤 Share
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-100"
        >
          💬 Comments
        </button>
      </div>

      {showComments && (
        <div className="mt-4">
          <div className="mb-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Write a comment..."
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
            >
              Add Comment
            </button>
          </div>

          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      )}

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        postTitle={post.title}
      />
    </div>
  );
};
