import React, { useState } from 'react';
import './ImageEditor.css'; // Make sure this file exists

const ImageEditor = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImage(null);
  };

  return (
    <div className="image-editor-container">
      <h2>Image Editor</h2>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div className="image-preview">
          <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ImageEditor;
