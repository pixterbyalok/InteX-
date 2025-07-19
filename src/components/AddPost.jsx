// src/components/AddPost.jsx
import { useState } from "react";

function AddPost({ onAdd }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption && image) {
      onAdd({ caption, image });
      setCaption("");
      setImage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl mb-4 shadow-md">
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        पोस्ट डालें
      </button>
    </form>
  );
}

export default AddPost;
