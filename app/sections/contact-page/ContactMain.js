import React from "react";
import ContainerWrapper from "@/app/components/shared/ContainerWrapper";
import SectionHeading from "@/app/components/shared/Heading";
import Paragraph from "@/app/components/shared/Paragraph";
import ContactForm from "./ContactForm";
import { Facebook, Mail, MapPin, Phone, PhoneCall, Twitter } from "lucide-react";

const ContactMain = () => {
  return (
    <div className=" min-h-screen relative bg-gradient-to-b from-tertiary to-transparent absolute inset-0 py-10">
      <ContainerWrapper className="mt-10  mb-18 bg-white shadow-2xl p-2 lg:p-7 rounded-xl z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[40%_58%] gap-8 items-stretch h-auto md:min-h-[55vh] lg:min-h-[75vh]">
        <div className="bg-tertiary rounded-2xl shadow-lg p-4  lg:p-8 flex flex-col justify-between relative overflow-hidden">
          <div>
            <SectionHeading text="Contact Information" />
            <Paragraph text="Say something to start a live chat!" />
            <div className="mt-5 flex flex-col text-sm">
              <div className="mt-6 flex items-center gap-4 ">
                <span>
                  <PhoneCall />
                </span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="mt-6 flex items-center gap-4 ">
                <span>
                  <Mail />
                </span>
                <span>info@example.com</span>
              </div>
              <div className="mt-6 flex items-start gap-4 ">
                <span>
                  <MapPin />
                </span>
                <span>
                  Suite 1M, The Beehive, Lions Drive, <br /> Shadsworth Business
                  Park, <br /> Blackburn,
                  <br /> BB1 2QS
                </span>
              </div>
            </div>
          </div>
       
        <div className="pointer-events-none select-none  w-full h-full">
          <div className="bg-[#501EFA] h-35 w-35  lg:w-60 lg:h-60 rounded-full absolute right-0 bottom-0 z-10" style={{transform: 'translate(30%, 30%)'}} />
          <div className="bg-[#501EFA66]  w-17 h-17 lg:w-35 lg:h-35 rounded-full absolute right-10 bottom-10 z-0" style={{transform: 'translate(-10%, -10%)'}} />
        </div>
           <div className="flex items-center gap-4 mt-10 md:mt-0">
            <a href="#" className="bg-secondary text-white rounded-full p-2 hover:bg-primary transition-colors">
              <Twitter size={22} />
            </a>
            <a href="#" className="bg-secondary text-white rounded-full p-2 hover:bg-primary transition-colors">
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </ContainerWrapper>
        </div>

  );
};

export default ContactMain;
