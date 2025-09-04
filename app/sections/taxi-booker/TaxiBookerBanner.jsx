import BannerParagraph from '@/app/components/shared/BannerParagraph'
import Image from 'next/image'
import React from 'react'

const TaxiBookerBanner = () => {
  return (
 <div
        className={`bg-[url('/assets/taxibooker/taxibanner.webp')]
        } relative  bg-no-repeat bg-cover max-w-full bg-center overflow-hidden    relative min-h-[650px] flex items-center z-10 `}
      >
        <div className="container !px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8  relative z-10">
            <div className="place-content-center space-y-4 lg:space-y-8 max-w-[350px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[800px]">
              <div
                className={`text-primary font-bold text-3xl sm:text-3xl lg:text-[50px] xl:[64px]  sm:leading-[1.3] lg:leading-[120%] `}
              >
                Secure & <br /> Contactless Payment acceptance
              </div>

              <div>
                <BannerParagraph text="Easy to use payment acceptance from your customer with no hardware required." />
              </div>
              <div className="xl:hidden">
                <Image
                  src="/assets/taxibooker/taxi-hero.webp"
                  alt="Background Image"
                  width={300}
                  height={500}
                  className=""
                />
              </div>
              <div>
                <div className="pr-2 md:pr-4 lg:pr-0 max-w-[300px] mt-10 lg:max-w-[400px] ">
                  <button
                    className=" py-3 lg:py-6 flex cursor-pointer group items-center justify-between text-lg md:text-2xl lg:text-3xl font-bold rounded-[75px]  w-full shadow-2xl transition-all duration-300 group"
                    style={{
                      background:
                        "linear-gradient(270deg, hsla(188, 81%, 52%, 1) 4.04%, hsla(0, 0%, 100%, 0) 84.39%)",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      borderRadius: "75px",
                    }}
                  >
                    {" "}
                    <span className="text-primary  px-2 lg:px-6 group-hover:-translate-y-1 transition-all duration-300">
                      Book a Demo
                    </span>
                    <Image
                      src="/assets/home/home1.png"
                      alt="Arrow Right"
                      width={40}
                      height={40}
                      className=" mx-2  "
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden xl:block  lg:pt-10">
          <Image
            src="/assets/taxibooker/taxi-hero.webp"
            alt="Background Image"
            width={850}
            height={700}
            className=""
          />
        </div>
      </div>  )
}

export default TaxiBookerBanner