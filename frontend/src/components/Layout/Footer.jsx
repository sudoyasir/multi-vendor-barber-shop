import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      {/* Subscription Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Stay Groomed</span> with our latest{" "}
          <br />
          offers and updates!
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* About Section */}
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <p className="text-2xl font-bold">Cut & Comb</p>
          <br />
          <p>Your trusted destination for expert grooming, premium haircuts, and impeccable style. Where tradition meets trend.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        {/* Services Section */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Services</h1>
          {[
            { name: "Haircuts", link: "/services" },
            { name: "Beard Grooming", link: "/services" },
            { name: "Shaves", link: "/services" },
            { name: "Hair Styling", link: "/services" },
            { name: "Kids Haircuts", link: "/services" },
          ].map((service, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={service.link}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* About Section */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">About</h1>
          {[
            { name: "Our Story", link: "/" },
            { name: "Meet the Team", link: "/" },
            { name: "Gallery", link: "/" },
            { name: "Careers", link: "/" },
          ].map((about, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={about.link}
              >
                {about.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Support Section */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {[
            { name: "FAQs", link: "/faq" },
            { name: "Contact Us", link: "/contact" },
            { name: "Booking Guide", link: "/booking-guide" },
            { name: "Terms & Conditions", link: "/terms" },
          ].map((support, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={support.link}
              >
                {support.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Cut & Comb. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
