import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full bg-gray-100">
      <aside className="fixed w-16 bg-blue-500 h-full"></aside>
      <div className="w-full ml-16 pl-4">
        <header className="border-b h-16 w-full ">adas</header>
        <main className=" min-h-screen ">{children}</main>
      </div>
    </div>
  );
};

export default Main;
