"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const FloatingNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Show button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      // Scroll to the very top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    toggleMenu();
  };

  // Cleanup function to restore scrolling when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Floating Nav Button - Only visible after scrolling */}
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50 transition-opacity duration-300 ease-in-out">
          <button
            onClick={toggleMenu}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/90 text-orange-100 hover:scale-105 focus:outline-none shadow-lg transition-all duration-300"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      )}

      {/* Full Screen Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Blurred Background Overlay - Darkened */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Navigation Menu - More navigation-like structure */}
          <nav className="relative z-50 flex flex-col items-center justify-center w-full max-w-md">
            <ul className="flex flex-col w-full items-center space-y-8">
              <li className="w-full text-center pb-2">
                <button
                  onClick={() => scrollToSection("top")}
                  className="py-2 text-3xl font-markazi text-orange-100 hover:text-orange-200 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li className="w-full text-center pb-2">
                <button
                  onClick={() => scrollToSection("featured")}
                  className="py-2 text-3xl font-markazi text-orange-100 hover:text-orange-200 transition-colors duration-300"
                >
                  Featured
                </button>
              </li>
              <li className="w-full text-center pb-2">
                <button
                  onClick={() => scrollToSection("productions")}
                  className="py-2 text-3xl font-markazi text-orange-100 hover:text-orange-200 transition-colors duration-300"
                >
                  Productions
                </button>
              </li>
              <li className="w-full text-center pb-2">
                <button
                  onClick={() => scrollToSection("more-section")}
                  className="py-2 text-3xl font-markazi text-orange-100 hover:text-orange-200 transition-colors duration-300"
                >
                  More of What We Do
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default FloatingNav;
