import React from 'react';

const BlogFeaturedImage = ({ image, bgColor = "bg-white" }) => {
  if (!image) return null;
  
  return (
    <div className={`${bgColor} pb-20 px-6`}>
      <div className="max-w-[1080px] mx-auto">
        <div className="aspect-video bg-[#F5F1E9] rounded-lg overflow-hidden">
          <img 
            src={image.url} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
        </div>
        {image.caption && (
          <p className="text-center text-[14px] italic text-[#6B6B6B] mt-6 max-w-[720px] mx-auto leading-relaxed font-sans">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogFeaturedImage;
