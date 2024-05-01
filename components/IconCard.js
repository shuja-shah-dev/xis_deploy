import React, { useRef } from "react";
import Image from "next/image";

const IconCard = ({ data }) => {
  const gradientStyleMain = {
    background:
      "linear-gradient(184deg, rgba(62, 95, 170, 0.13) 28.13%, rgba(87, 200, 231, 0.00) 98.75%)",
  };

  return (
    <div className="flex flex-wrap gap-4 sm:gap-2 justify-start mx-1 sm:mx-0 relative z-50">
      {data.map((c, index) => (
        <div
          key={index}
          style={gradientStyleMain}
          className={`ftest flex flex-col justify-between ${
            c.path === "/Rectangle (8).png" ||
            c.path === "/kotlin-2-logo.png" ||
            c.path === "/Swift_logo.svg" ||
            c.path === "/Rectangle (15).png"
              ? "w-[280px]"
              : "w-[137px]"
          } p-4 h-[139px] rounded-2xl border border-slate-800`}
        >
          <style jsx>{`
            @media (max-width: 639px) {
              .ftest {
                width: 130px;
                margin: auto;
              }
            }

            .ftest {
              transition: 0.1s ease-in-out;
              cursor: pointer;
            }

            .ftest:hover {
              border: 1px solid #5d38c2;
            }
          `}</style>
          <Image
            className="m-auto"
            priority={true}
            src={c.path}
            width={
              c.path === "/Rectangle (8).png" ||
              c.path === "/kotlin-2-logo.png" ||
              c.path === "/Swift_logo.svg" ||
              c.path === "/Rectangle (15).png"
                ? 200
                : 70
            }
            height={70}
            alt={`${c.label} img`}
          />
        </div>
      ))}
    </div>
  );
};

export default IconCard;
