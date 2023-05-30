import React from "react";

type layoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = "" }: layoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
