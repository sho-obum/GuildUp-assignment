
interface ShareDialogProps {
    isOpen: boolean;
    onClose: () => void;
    postTitle: string;
  }
  
  export const ShareDialog: React.FC<ShareDialogProps> = ({ isOpen, onClose, postTitle }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Share this post</h3>
          <p className="mb-4">Share: {postTitle}</p>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };