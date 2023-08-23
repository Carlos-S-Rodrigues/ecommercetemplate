import React from 'react';

const Wrapper = ({ children, className }) => {
  return (
    <div>
      <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;






