"use client"
import { useState } from "react";

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file)); // Display the selected image
    } else {
      alert("Please select a valid image file (jpg, png, etc.)");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <label htmlFor="imageInput" style={{ display: "block", marginBottom: "10px" }}>
        Select an Image:
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*" // Restricts to image file types
        onChange={handleImageChange}
        style={{ marginBottom: "20px" }}
      />
      {selectedImage && (
        <div>
          <p>Preview:</p>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
