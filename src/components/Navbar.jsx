import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-black/80 backdrop-blur-md px-6 py-3 shadow-lg ring-1 ring-white/10">
          <div className="text-xl font-semibold text-white">Creatix</div>
          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Services</li>
            <li className="cursor-pointer hover:text-white">Projects</li>
            <li className="cursor-pointer hover:text-white">Reviews</li>
          </ul>
          {/* CTA */}
          <div className="hidden md:block">
            <button className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-lime-300">
              Start Project
            </button>
          </div>
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-2xl bg-black/90 backdrop-blur-md p-6 text-gray-300 shadow-xl md:hidden">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Services</li>
              <li className="cursor-pointer hover:text-white">Projects</li>
              <li className="cursor-pointer hover:text-white">Reviews</li>
              <button className="mt-4 rounded-full bg-lime-400 py-2 font-semibold text-black">
                Start Project
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
