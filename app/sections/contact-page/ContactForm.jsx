import React from 'react'

const ContactForm = () => {
  return (
<div className="flex flex-col">
      <form className="p-2 md:p-4 lg:p-8 flex flex-col gap-10 justify-between h-full">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-[15px] font-medium text-[#8D8D8D]">First Name</label>
              <input 
                id="firstName"
                type="text" 
                // placeholder="First Name" 
                className="border-b-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-b-4 focus:ring-primary w-full" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-[15px] font-medium text-[#8D8D8D]">Last Name</label>
              <input 
                id="lastName"
                type="text" 
                // placeholder="Last Name" 
                className="border-b-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-b-4 focus:ring-primary w-full" 
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[15px] font-medium text-[#8D8D8D]">Email</label>
            <input 
              id="email"
              type="email" 
            //   placeholder="Email" 
              className="border-b-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-b-4 focus:ring-primary w-full" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-[15px] font-medium text-[#8D8D8D]">Phone Number</label>
            <input 
              id="phone"
              type="tel" 
            //   placeholder="Phone Number" 
              className="border-b-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-b-4 focus:ring-primary w-full" 
            />
          </div>
          <div className="flex flex-col gap-1 my-14 ">
            <label htmlFor="message" className="text-[15px] font-medium text-[#8D8D8D]">Message</label>
            <textarea 
              id="message"
            //   placeholder="Message" 
              rows={2} 
              className="border-b-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-b-4 focus:ring-primary resize-none w-full" 
            />
          </div>
            <div className="mt-14 space-y-4 ">
          <div className="flex items-center">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-xs text-gray-600">
              You agree to our friendly privacy policy.
            </label>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-[#501EFA] text-white px-6 py-2 rounded-md font-semibold hover:bg-primary transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
        </div>
        
      
      </form>
    </div>  )
}

export default ContactForm