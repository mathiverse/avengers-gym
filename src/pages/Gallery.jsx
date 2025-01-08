import React, { useState } from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
// Placeholder image URL for loading state
const placeholderImage =
  "https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Loading...";

// List of gym-related images
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9r35h8LyPcu9opVOh251t5baa5LUqQv5ixg&s", // Gym Cardio
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsgj-xYq2AJhqregKEikf2A1FGbnPtJMkNA&s", // Cardio Exercise
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8EAlCBEBict46r12JR7N4YN7C9rvvK8A7w&s", // Group Workout
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9cEjN0XOh4aKiOsjnKlqUdswyvtz0HwcWA&s", // Gym Equipment
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5kMwy-8Px_zySknyUMIEiLsn45Iff7B_06Ch3sAMMkZ2A59xW1wQ88FCUjbJ78gD9QI&usqp=CAU", // Weight Lifting
  gallery1,
  gallery2,
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState(
    new Array(images.length).fill(false),
  );
  const [previewImage, setPreviewImage] = useState(null); // To store image to preview
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Function to handle image loading
  const handleImageLoad = (index) => {
    setLoadedImages((prevState) => {
      const updated = [...prevState];
      updated[index] = true;
      return updated;
    });
  };

  // Function to open preview modal
  const openPreview = (imageSrc, index) => {
    setPreviewImage(imageSrc);
    setCurrentImageIndex(index);
  };

  // Function to close preview modal
  const closePreview = () => {
    setPreviewImage(null);
    setCurrentImageIndex(null);
  };

  // Function to navigate through images in the preview
  const navigateImage = (direction) => {
    const newIndex =
      (currentImageIndex + direction + images.length) % images.length;
    setPreviewImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="mx-auto min-h-[600px] max-w-screen-xl px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Our Gym Gallery
      </h2>

      {/* Gallery Grid Layout */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => openPreview(imageSrc, index)} // Open image preview on click
          >
            <img
              className={`h-auto w-full rounded-xl object-cover transition-opacity duration-300 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
              src={imageSrc}
              alt={`Gym Image ${index + 1}`}
              onLoad={() => handleImageLoad(index)}
              loading="lazy"
              style={{
                opacity: loadedImages[index] ? "1" : "0",
                transition: "opacity 1s ease-in-out",
              }}
            />
            {/* Placeholder image */}
            {!loadedImages[index] && (
              <img
                className="absolute inset-0 h-auto w-full rounded-xl object-cover"
                src={placeholderImage}
                alt="Loading..."
              />
            )}
            {/* Hover text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Gym Moment #{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePreview}
        >
          <div className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white bg-opacity-30 shadow-lg backdrop-blur-md">
            <div className="relative h-full">
              {/* Image */}
              <img
                src={previewImage}
                alt="Preview"
                className="h-full w-full rounded-lg object-contain"
              />

              {/* Navigation Arrows */}
              <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing when clicking on arrows
                    navigateImage(-1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white"
                >
                  →
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-xl text-white"
              onClick={closePreview}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
