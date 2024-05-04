import { useState } from 'react';

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const removeImage = () => {
    setImage(null);
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
          <div className="mt-2">
            <button
              onClick={removeImage}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md  hover:ring-2 hover::ring-offset-2 hover::ring-gray-900"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadImage;
