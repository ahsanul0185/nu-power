import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <span className="block w-6 bg-primary h-0.5"></span>
      <span className="text-sm md:text-base uppercase text-[#aeaeae] tracking-wider font-semibold mt-3 block">
        {title}
      </span>
    </div>
  );
};

export default Title;
