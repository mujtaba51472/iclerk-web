import React from 'react';
import ContainerWrapper from '@/app/components/shared/ContainerWrapper';
import SectionHeading from '@/app/components/shared/Heading';
import Paragraph from '@/app/components/shared/Paragraph';

const ContactMain = () => {
  return (
    <ContainerWrapper className="mt-24 mb-16 bg-white shadow-2xl p-7 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[70vh]">
        {/* Contact Info Card */}
        <div className="bg-[#1FCCE8] rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <div>
            <SectionHeading className="" text="Contact Information" />
            <Paragraph className=" mb-4" text="Say something to start a live chat!" />
            {/* <div className="space-y-3 text-white text-base">
              <div className="flex items-center gap-2">
                <span className="material-icons text-lg">phone</span>
                <span>+44 (0)7465 648100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-lg">email</span>
                <span>sales@iclerk.io</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-lg">location_on</span>
           

              </div>
            </div> */}
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-white hover:text-primary"><span className="material-icons">facebook</span></a>
            <a href="#" className="text-white hover:text-primary"><span className="material-icons">linkedin</span></a>
            <a href="#" className="text-white hover:text-primary"><span className="material-icons">twitter</span></a>
          </div>
          {/* Decorative circles */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#501EFA] opacity-30 rounded-full blur-2xl z-0" />
          <div className="absolute bottom-10 right-20 w-16 h-16 bg-white opacity-20 rounded-full blur-2xl z-0" />
        </div>
        {/* Contact Form */}
        <form className="p-8 flex flex-col justify-between min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="text" placeholder="Last Name" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Email" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary col-span-2" />
            <input type="tel" placeholder="Phone Number" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary col-span-2" />
          </div>
          <textarea placeholder="Message" rows={4} className="border border-gray-200 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-xs text-gray-600">You agree to our friendly privacy policy.</label>
          </div>
          <button type="submit" className="bg-[#501EFA] text-white px-6 py-2 rounded-md font-semibold hover:bg-primary transition-colors w-fit self-end">Send Message</button>
        </form>
      </div>
    </ContainerWrapper>
  );
};

export default ContactMain;