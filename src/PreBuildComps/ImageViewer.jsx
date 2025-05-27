import React, { useState } from "react";

const ImageViewer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dwbt0uoa7/image/upload/v1748003888/kiyoub1u5wfnmxlgm5ax.jpg"
        alt="sample"
        onClick={() => setShowModal(true)}
        className="cursor-pointer w-48 "
      />

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src="https://res.cloudinary.com/dwbt0uoa7/image/upload/v1748003888/kiyoub1u5wfnmxlgm5ax.jpg"
            alt="large"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
