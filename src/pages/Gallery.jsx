import React, { useState } from "react";
import professionalTrainer from "../assets/gym-trainer-1.jpeg";
import weightTrainingArea from "../assets/strength-zone-1.jpeg";
import functionalZone from "../assets/strength-training-zone.jpeg";
import personalSession from "../assets/personal-trainer-1.jpeg";
import gymEquipment from "../assets/gallery1.jpg";
import groupTraining from "../assets/gallery2.jpg";
// Placeholder image URL for loading state
const placeholderImage =
  "https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Loading...";

// List of gym-related images with meaningful titles
const images = [
  {
    url: professionalTrainer,
    id: crypto.randomUUID(),
    alt: "Professional Trainer Demonstration",
    title: "Expert Training Guidance",
    category: "trainers"
  },
  {
    url: weightTrainingArea,
    id: crypto.randomUUID(),
    alt: "Advanced Weight Training Zone",
    title: "State-of-the-art Equipment",
    category: "equipment"
  },
  {
    url: functionalZone,
    id: crypto.randomUUID(),
    alt: "Functional Training Area",
    title: "Functional Fitness Zone",
    category: "classes"
  },
  {
    url: personalSession,
    id: crypto.randomUUID(),
    alt: "Personal Training Session",
    title: "One-on-One Training",
    category: "trainers"
  },
  {
    url: gymEquipment,
    id: crypto.randomUUID(),
    alt: "Modern Gym Equipment",
    title: "Premium Fitness Equipment",
    category: "equipment"
  },
  {
    url: groupTraining,
    id: crypto.randomUUID(),
    alt: "Group Training Session",
    title: "Group Fitness Classes",
    category: "classes"
  }
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [previewImage, setPreviewImage] = useState(null); // To store image to preview
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
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
    setPreviewImage(images[newIndex].url);
    setCurrentImageIndex(newIndex);
  };

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="mx-auto min-h-[600px] max-w-screen-xl px-4 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-white" data-aos="fade-up">
        Our Gym Gallery
      </h2>
      <p className="mb-12 text-center text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="100">
        Explore our state-of-the-art facilities and training sessions
      </p>

      <div className="flex justify-center gap-4 mb-8">
        {['all', 'trainers', 'equipment', 'classes'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-red-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid Layout - Improved responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8" 
           data-aos="fade-up" data-aos-delay="200">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => openPreview(image.url, images.indexOf(image))}
          >
            {/* Loading skeleton with aspect ratio */}
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 animate-pulse bg-gray-200">
                <div className="pb-[75%]" /> {/* 4:3 aspect ratio */}
              </div>
            )}
            
            <div className="aspect-[4/3] w-full">
              <img
                className={`h-full w-full object-cover transition-all duration-500 ${
                  loadedImages.has(image.id) 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
                }`}
                src={image.url}
                alt={image.alt}
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
            </div>

            {/* Enhanced hover overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
              <p className="text-sm text-gray-200 text-center">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div className="relative h-[80vh] w-[90vw] max-w-5xl overflow-hidden rounded-lg bg-black bg-opacity-90 shadow-2xl">
            <div className="relative h-full flex items-center justify-center p-4">
              {/* Image with improved sizing */}
              <img
                src={previewImage}
                alt={images[currentImageIndex].alt}
                className="max-h-full max-w-full rounded-lg object-contain"
              />

              {/* Enhanced Navigation Arrows */}
              <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="rounded-full bg-red-600 p-4 text-3xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>

              {/* Enhanced Close Button */}
              <button
                className="absolute right-4 top-4 rounded-full bg-red-600 p-2 text-xl text-white opacity-75 transition-opacity hover:opacity-100 hover:bg-red-700"
                onClick={closePreview}
                aria-label="Close preview"
              >
                ✕
              </button>

              {/* Image Caption */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold">{images[currentImageIndex].title}</h3>
                <p className="text-sm text-gray-300">{images[currentImageIndex].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
