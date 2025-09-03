"use client";
import { headerTitles } from "@/app/config/HeaderTitle";
import Link from "next/link";
import React, { use, useState } from "react";
import { ChevronDown, ChevronDownIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import { usePathname } from "next/navigation";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" bg-white py-4 sticky top-0 z-50">
        <div className="container mx-auto  flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">
              <Image
                src="/assets/logo/logo.png"
                alt="Logo"
                width={100}
                height={50}
              />
              </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}

          <nav className="hidden lg:flex items-center space-x-10">
            {headerTitles.map((item, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className="relative no-underline text-primary font-medium hover:text-tertiary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-tertiary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  <div className="flex items-center">
                    <span
                      className={`$ {
                        pathname == item?.href && "text-tertiary"
                      } text-base font-medium`}
                    >
                      {item.name}
                    </span>
                    {item?.submenu && (
                      <span className="mx-1 inline-block">
                        <ChevronDownIcon />
                      </span>
                    )}
                  </div>
                </Link>
                {/* Submenu - keep it inside the same parent div */}
                {item?.submenu && hoveredIndex === i && (
                  <div
                    className="absolute -left-5 top-full mt-[5px] w-48 bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item.submenu.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        className="block px-4 py-2 text-primary hover:bg-gray-100 hover:text-tertiary transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <SecondaryButton>
              <Link href="/contact-us" className="text-white text-base font-medium">
                Contact Us
              </Link>
            </SecondaryButton>
          </nav>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`
        fixed top-0 left-0 w-full md:w-[300px] h-full bg-white z-40 transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:hidden
      `}
      >
        <div className="container mx-auto px-4 py-6 shadow-sm h-full ">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">Logo</div>
            <button className="p-2 text-primary" onClick={toggleDrawer}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {headerTitles.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary hover:text-primary-dark text-lg py-2 transition-colors duration-300"
                onClick={toggleDrawer}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay - Only visible when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0   bg-opacity-50 z-30 lg:hidden"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header;
