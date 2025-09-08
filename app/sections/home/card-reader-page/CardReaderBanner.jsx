import BannerParagraph from '@/app/components/shared/BannerParagraph'
import Image from 'next/image'
import React from 'react'

const CardReaderBanner = () => {
  return (
 <div
        className={`bg-[url('/assets/card-reader/cardbanner.webp')]
        } relative   bg-no-repeat bg-cover max-w-full bg-center overflow-hidden    relative min-h-[650px] flex items-center z-10 `}
      >
                        <div className='h-full w-full bg-gradient-to-b from-tertiary/70 to-transparent absolute inset-0' />

        <div className="container !px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  relative z-10">
            <div className="place-content-center space-y-4 lg:space-y-8 max-w-[350px] md:max-w-[400px]  xl:max-w-[800px]">
              <div
                className={`text-primary font-bold text-3xl sm:text-3xl lg:text-[50px] xl:[64px]  sm:leading-[1.3] lg:leading-[120%] `}
              >
                Intelligent <br /> in-car payment <br /> solutions
              </div>

              <div>
                <BannerParagraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code will show taxi fare and customer details every time customer scan the same QR Code." />
              </div>
              <div className="lg:hidden  ">
                <Image
                  src="/assets/card-reader/cardhero1.webp"
                  alt="Background Image"
                  width={250}
                  height={500}
                  className='md:h-[300px] md:w-[400px] w-auto '
                />
              </div>
              <div>
                <div className="pr-2 md:pr-4 lg:pr-0 max-w-[300px] md:mb-10 lg:mb-0 lg:max-w-[400px]">
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
                    <span className="text-primary  px-4 lg:px-6 group-hover:-translate-y-1 transition-all duration-300">
                      Book a Demo
                    </span>
                    <Image
                      src="/assets/home/home1.png"
                      alt="Arrow Right"
                      width={40}
                      height={40}
                      className=" mx-2 "
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 lg:top-12 xl:-top-10 -right-18   2xl:right-0 hidden lg:block  lg:pt-10">
          <Image
            src="/assets/card-reader/cardhero1.webp"
            alt="Background Image"
            width={700}
            height={700}
            className="h-[500px] xl:h-[700px] w-auto"
          />
        </div>
      </div>  )
}

export default CardReaderBanner