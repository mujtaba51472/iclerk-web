import React from "react";

const BannerHeading = ({ text, className }) => {
  return (
    <h1
      className={`text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black  tracking-loose ${className}`}
    >
      {text}
    </h1>
  );
};

export default BannerHeading;