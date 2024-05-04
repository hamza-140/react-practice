import { useState } from 'react';

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="max-w-lg mx-auto my-8">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border border-gray-300 p-2 rounded-md"
      />
      {image && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Selected Image:</h2>
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="mt-2 max-w-full rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export default UploadImage;
