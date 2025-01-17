"use client";
import { useState } from 'react';

interface CommentProps {
  comment: {
    id: number;
    text: string;
  };
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({ comment, depth = 0 }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState<Array<{ id: number; text: string }>>([]);

  const handleReply = () => {
    if (replyText.trim()) {
      const newReply = {
        id: Date.now(),
        text: replyText,
      };
      setReplies([...replies, newReply]);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className={`ml-${depth * 4} my-2`}>
      <div className="bg-gray-50 p-3 rounded">
        <p className="text-gray-800">{comment.text}</p>
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="text-gray-500 text-sm mt-2 hover:text-gray-600"
        >
          Reply
        </button>
      </div>

      {isReplying && (
        <div className="mt-2 ml-4">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write a reply..."
          />
          <button
            onClick={handleReply}
            className="bg-gray-500 text-white px-3 py-1 rounded mt-2 text-sm hover:bg-gray-600"
          >
            Submit Reply
          </button>
        </div>
      )}

      {replies.map((reply) => (
        <Comment key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

