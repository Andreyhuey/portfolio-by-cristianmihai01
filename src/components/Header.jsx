import React from "react";
import Image from "next/image";
// images
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="py-8">
      <div className="sm:container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <h2 className="text-3xl">CultureX</h2>
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a
              href="https://www.canva.com/design/DAFhcMCLaoI/c8ReyVAA5-t-faR9ebXOYQ/view?utm_content=DAFhcMCLaoI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
