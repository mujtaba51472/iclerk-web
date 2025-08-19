import React from "react";

const BannerHeading = ({ text, className }) => {
  return (
    <div
      className={`text-primary  text-lg md:text-3xl lg:text-5xl font-bold ${className}`}
    >
      {text}
    </div>
  );
};

export default BannerHeading;
