"use client";
import { company } from "@/config/company";
import { childBannerContainer, childBannerGradient, parentContainer } from "@/utils/animate";
// import { fadeIn } from "../../../utils/animate";
import { motion } from "framer-motion";
import { CheckCircle, Square, SquareIcon } from "lucide-react";
import Link from "next/link";

export default function PricingCards({ data, marketing }) {
  const applyBorder = (index) => {
    return index === 1
      ? "border-r-8 border-white"
      : "border-r-8 border-tertiary";
  };
  const appplyBg = (index) => {
    return index === 1 ? "bg-white text-primary" : "bg-tertiary text-white";
  };
  const applyTextColor = (index) => {
    return index === 1 ? "text-white" : "text-tertiary";
  };
  return (
    <div  className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div  variants={parentContainer}
          initial="hidden"
          animate="visible" className="max-w-7xl mx-auto grid gap-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((plan, index) => (
          <motion.div
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            }}
          variants={childBannerGradient}
            key={index}
            className={`rounded-3xl cursor-pointer overflow-hidden ${applyBorder(index)} ${index === 1 ? "bg-secondary text-white" : "bg-white text-gray-900"
              }`}
            initial={{ y: 0, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
            whileHover={{
              y: -10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="p-4 lg:p-6 flex flex-col justify-between h-full">
              <div className="flex-1">
                <div className="flex items-start flex-wrap mb-2 lg:mb-0 justify-between">
                  <h3
                    className={`text-2xl font-bold mb-2 ${index === 1 ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.name}
                  </h3>
                  <motion.div
                    className={`${
                      index === 1 ? "p-1 rounded-md" : ""
                    } ${applyTextColor(index)} bg-red-500 text-xs font-semibold`}
                    animate={
                      index === 1
                        ? {
                            boxShadow: [
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                              "0 0 20px rgba(59, 130, 246, 0.8)",
                              "0 0 30px rgba(59, 130, 246, 1)",
                              "0 0 20px rgba(59, 130, 246, 0.8)",
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                            ],
                            opacity: [1, 0.7, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {index === 1 ? "Most Popular" : null}
                  </motion.div>
                </div>
                <div className="font-bold mb-4">{plan.price}</div>
                <div
                  className={`mb-6 text-sm ${
                    index === 1 ? "text-white" : "text-gray-700"
                  }`}
                >
                  {plan.description}
                </div>
                <PlaneDivider index={index} />
                <ul className="space-y-4 flex-1">
                  <h3 className={`text-lg font-medium ${index === 1 ? "text-white" : "text-gray-900"}`}>
                    {plan?.includes ? plan?.includes : null}
                  </h3>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle
                        size={20}
                        className={`mr-2 ${
                          index === 1 ? "text-white" : "text-primary"
                        }`}
                        strokeWidth={2}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <h3 className={`text-lg font-medium my-4 ${index === 1 ? "text-white" : "text-gray-900"}`}>
                  {`${plan?.sub_heading}`}
                </h3>
                <ul className="space-y-4 flex-1">
                  {plan?.features2?.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle
                        size={20}
                        className={`mr-2 ${
                          plan.name === "Enterprise" || plan.name === "Standard"
                            ? "text-white"
                            : "text-primary"
                        }`}
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {plan?.footer ? (
                  <div className="italic">{plan.footer}</div>
                ) : null}
              </div>
              <div className="mt-8">
                <Link href={company?.calendarUrl || ""} target="_blank">
                  <button
                    className={`w-full py-3 px-6 rounded-2xl font-semibold transition-colors duration-300 ${appplyBg(
                      index
                    )}`}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const PlaneDivider = ({ index }) => {
 const orange = index !== 1;

  const lineColor = orange ? "bg-tertiary" : "bg-white";
  const iconColor = orange ? "text-tertiary" : "text-white";

  return (
    <div className="flex items-center justify-center mb-5">
      <span>
        <SquareIcon
          sx={{ fontSize: "12px" }}
          className={`rotate-45 ${iconColor}`}
        />
      </span>

      <span className={`w-full h-[.5px] inline-block ${lineColor}`} />

      <span>
        <SquareIcon
          sx={{ fontSize: "9px", fontWeight: "bold" }}
          className={`rotate-45 ${iconColor}`}
        />
      </span>
    </div>
  );
};