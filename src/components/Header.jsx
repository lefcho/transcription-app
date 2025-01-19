import React from "react";

function Header() {
  return (
    <header className="flex p-4 items-center justify-between gap-4">
      <h1 className="font-medium">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1>
      <button className="flex items-center gap-2 specialBtn px-4 px-2 rounded-lg text-blue-400">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}

export default Header;
