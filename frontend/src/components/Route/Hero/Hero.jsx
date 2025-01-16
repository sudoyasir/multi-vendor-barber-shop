import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://cdn.prod.website-files.com/5cb569e54ca2fddd5451cbb2/63f6ba44f7a7562e47c195bc_Hero-O1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken the background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 z-0"
      ></div>

      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] text-white p-5 relative`}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}
        >
          Transform Your Look,<br /> Elevate Your Style
        </h1>
        <p className="pt-5 text-[16px] text-gray-400">
          Discover the best barbers, top-notch grooming services, <br /> and a
          wide range of styles to suit your needs. <br /> Book your appointment
          today and experience the difference!
        </p>
        <Link to="/services" className="inline-block">
          <div className={`${styles.button} mt-5 bg-white`}>
            <span className="text-[#000] font-[Poppins] text-[18px]">
              Book Now!
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
