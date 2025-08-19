import React from "react";

const MainHeading = ({text}) => {
  return (
    <div className="text-primary text-lg md:text-3xl lg:text-5xl font-bold max-w-3xl mx-auto text-center">
      {text}
    </div>
  );
};

export default MainHeading;
