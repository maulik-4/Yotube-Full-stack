import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { useNavigate } from "react-router-dom";
import { useSearch } from '../utils/SearchContext';
import axiosInstance from '../utils/axiosConfig';
import ShimmerVideoCard from '../Components/ShimmerVideoCard';
import { toast } from 'react-toastify';
import VideoCard from '../Components/VideoCard'; // Correct import

const Homepage = ({ SideBar }) => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { search } = useSearch();
  
  // Log the prop to verify it's passed correctly


  // Filter logic
  const filteredVideos = videos.filter(video =>
    !video.user?.isBlocked &&
    (!search || video.title.toLowerCase().includes(search.toLowerCase())) &&
    (selectedCategory === "All" || video.category === selectedCategory)
  );

  const categories = [
    "All","Test", "Music", "Comedy", "Gaming", "Tech", "Education", 
    "Sports", "Travel", "Food", "Fashion", "Science", "News"
  ];

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/api/getAllVideos")
      .then((res) => {
        const { data } = res.data;
        setVideos(data);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        toast.error("Failed to load videos. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex -mt-[8vh] relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Make sure the prop is passed correctly */}
      <Sidebar SideBar={SideBar} />

      <div className="flex flex-col w-full overflow-x-hidden">
        {/* Categories - Removed pt-4 to eliminate space */}
        <div className="sticky top-[60px] z-10 backdrop-blur-md bg-black/50 pb-2 px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent py-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-gray-800/80 text-white hover:bg-gray-700"
                } text-sm px-5 py-2 rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="p-4 md:p-6 lg:p-8">
          {/* Rest of the component remains the same */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <ShimmerVideoCard key={i} />
              ))}
            </div>
          ) : filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard 
                  key={video._id} 
                  video={video} 
                  navigate={navigate} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 mb-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No videos found</h3>
              <p className="text-gray-400 max-w-md">
                {search ? 
                  `No videos matching "${search}" in ${selectedCategory === "All" ? "any category" : selectedCategory}` : 
                  `No videos available in ${selectedCategory === "All" ? "any category" : selectedCategory}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Separate VideoCard component for better organization


export default Homepage;
