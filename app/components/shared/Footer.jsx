import React from "react";
import Image from "next/image";
import Link from "next/link";
import { company } from "../../config/company";
import { navigation } from "@/app/config/footerTitle";
import { Facebook, Linkedin } from "lucide-react";
import ContainerWrapper from "./ContainerWrapper";

function Footer() {
  return (

    <footer className="bg-[url('/assets/footer.png')] bg-no-repeat bg-center relative w-full bg-cover py-10 pb-24 md:pb-10 rounded-tl-3xl rounded-tr-3xl">
      <div className="container mx-auto px-4  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 ">
          {/* Logo and Social */}
          <div className="lg:col-span-1 mt-5">
            <div className="w-[100px]">
              <Image
                src="/assets/logo/logo.png"
                alt="footer"
                width={100}
                height={100}
              />
            </div>
            <div className="flex gap-3 mt-5">
              <SocialContainer>
                <Link href={company?.facebook || "#"} target="_blank" aria-label="Facebook">
                  <Facebook className="text-gray-700 group-hover:text-blue-600 transition-all duration-300" size={20} />
                </Link>
              </SocialContainer>
              <SocialContainer>
                <Link href={company?.LinkedIn || "#"} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="text-gray-700 group-hover:text-blue-500 transition-all duration-300" size={20} />
                </Link>
              </SocialContainer>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold  mb-4 text-lg">Solutions</h3>
            <div className="space-y-2">
              {navigation.solutions.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="hover: transition-colors duration-300 block py-1 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold  mb-4 text-lg">Company</h3>
            <div className="space-y-2">
              {navigation.company.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="hover: transition-colors duration-300 block py-1 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold  mb-4 text-lg">Support</h3>
            <div className="space-y-2">
              {navigation.support.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="hover: transition-colors duration-300 block py-1 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold  mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="mb-4 text-sm">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="grid grid-cols-1 gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex px-4 py-2 bg-white  rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="bg-secondary  text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Address */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <span>{company.copyright_text}</span>
            </div>
            <div className="text-sm text-center md:text-right">
              <span>
                Registered in {company.address.registeredIn}, {company.address.No}. {company.address.building}{" "}
                {company.address.street}, {company.address.park}, {company.address.town}, {company.address.country}{" "}
                {company.address.postcode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const SocialContainer = ({ children }) => {
  return (
    <div className="bg-white group cursor-pointer hover:bg-white transition-all duration-300 w-9 h-9 shadow-md border border-gray-200 flex items-center justify-center rounded-full hover:scale-105">
      {children}
    </div>
  );
};