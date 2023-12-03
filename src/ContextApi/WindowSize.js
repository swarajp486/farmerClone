// ManageWindowSize.js

import React, { createContext, useState, useEffect } from "react";

const WindowSizeContext = createContext(null);

const ManageWindowSize = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={{ size, setSize }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export { WindowSizeContext, ManageWindowSize };
