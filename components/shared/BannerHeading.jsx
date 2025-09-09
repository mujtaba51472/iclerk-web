import React from "react";

const BannerHeading = ({ text, className }) => {
  return (
    <div className={`text-primary font-bold text-3xl sm:text-3xl lg:text-5xl leading-[1.2] sm:leading-[1.3] lg:leading-[1.2] ${className}`}>
      {text}
    </div>
  );
};

export default BannerHeading;