import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ICN from "./assets/icn-settings-icn-lg.svg";
import ICN1 from "./assets/icn-settings-icn-lg-1.svg";
import ICN2 from "./assets/icn-settings-icn-lg-2.svg";
import ICN3 from "./assets/icn-settings-icn-lg-3.svg";

import BookImage from "./assets/book-image.svg";
import BranchImage from "./assets/branch-image.svg";
import BusinessImage from "./assets/business-image.svg";
import TravelImage from "./assets/travel-image.svg";

import WhoWeAre from "./assets/people-image.webp";

import SpeedImage from "./assets/speed-image.svg";
import TeamImage from "./assets/team-image.svg";

import WorldImage from "./assets/world-image.png";

import Facebook from "./assets/facebook.svg";
import Twitter from "./assets/twitter.svg";
import Youtube from "./assets/youtube.svg";
import Instagram from "./assets/instagram.svg";

const headerItems = [
  { label: "Home", link: "/home" },
  { label: "Services", link: "/services" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const successArray = [
  { label: "Happy Clients", value: "201", img: ICN },
  { label: "Completed Projects", value: "100", img: ICN1 },
  { label: "Ongoing Projects", value: "102", img: ICN2 },
  { label: "Awards", value: "32", img: ICN3 },
];

const featuresArray = [
  {
    title: "Strategic Planning ",
    content:
      "Offer expert consultancy for long-term cloud strategy and growth.",
    img: TravelImage,
    moreLink: "/more",
  },
  {
    title: "Cloud Migration",
    content: "Guide businesses through seamless cloud migration",
    img: BranchImage,
    moreLink: "/more",
  },
  {
    title: "Cloud Security",
    content: "Implement best practices for securing cloud infrastructures",
    img: BusinessImage,
    moreLink: "/more",
  },
  {
    title: "Cost Optimization ",
    content: "Analyze cloud usage to minimize unnecessary costs",
    img: BookImage,
    moreLink: "/more",
  },
];

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appointmentFormRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
    AOS.refresh();
  }, []);

  const scrollToAppointmentForm = () => {
    if (appointmentFormRef.current) {
      const yOffset = -100; // 120px from the top
      const y = appointmentFormRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="bg-black backdrop-filter backdrop-blur-sm">
        <div className="bg-hero-bg  bg-black opacity-60 backdrop-filter backdrop-blur-sm"></div>
      </div>
      <div
        className={`w-full mx-auto ${
          isScrolled ? "py-3" : "py-6"
        } z-50 fixed top-0 left-0 right-0  text-white transition-all duration-300`}
      >
        <nav
          className={`hidden md:flex flex-col md:flex-row justify-between py-4 items-center px-6 rounded-full bg-[#00000090] ${
            isScrolled ? "backdrop-blur-xl z-50 " : "backdrop-filter backdrop-blur-sm "
          } w-11/12 mx-auto`}
        >
          <a className="font-bold text-2xl ml-2 mb-4 md:mb-0">ZEROSOFT</a>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 mb-4 md:mb-0">
            {headerItems.map((item, index) => (
              <li
                key={index}
                className="hover:opacity-75 font-bold text-center"
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <button onClick={scrollToAppointmentForm} className="px-6 py-3 rounded-full font-bold text-white bg-orange-600 hover:opacity-90 w-full md:w-auto">
            Talk to an expert
          </button>
        </nav>
        <nav className={`md:hidden z-50 fixed top-0 right-0 left-0 w-11/12 mx-auto ${
          isScrolled ? "py-3" : "py-5"
        }`}>
          <div className={`${
            isScrolled ? "backdrop-blur-xl z-50 " : "backdrop-filter backdrop-blur-sm "
          } flex justify-between items-center px-6 py-3 rounded-full bg-[#00000090]`}>
            <a className="font-bold text-lg md:text-2xl ml-2 md:mb-0 flex items-center">ZEROSOFT</a>
            <div className="">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-11/12 mx-auto pt-6 pb-6 absolute top-0 left-0 right-0 text-white">
        <div className="text-center mt-36 pb-20 md:mt-52">
          <h1 className="w-11/12 sm:w-7/12 md:w-9/12 lg:w-full mx-auto leading-tight text-3xl md:text-6xl font-bold" data-aos="fade-up">
            Optimize Your Cloud
            <br className="hidden lg:block"/> Journey With Us
          </h1>
          <p className="w-4/4 sm:w-7/12 md:w-9/12 lg:w-full mx-auto leading-relaxed mt-12 md:mt-12 text-lg md:text-2xl font-light" data-aos="fade-up" data-aos-delay="100">
            Empowering Businesses with Tailored, Scalable, and Secure Software {" "}
            <br className="hidden lg:block"/> 
            and Cloud Solutions for Enhanced Efficiency and Innovation.
          </p>
          <div className="w-2/3 md:w-full mx-auto flex flex-col md:flex-row justify-center gap-y-4 md:gap-x-5 mt-12 md:mt-12" data-aos="fade-up" data-aos-delay="200">
            <button onClick={scrollToAppointmentForm} className="bg-orange-600 px-5 py-4 font-bold rounded-full w-full md:w-48">
              Talk to an expert
            </button>
            <button className="border border-white px-5 py-4 font-bold rounded-full w-full md:w-48 backdrop-filter backdrop-blur-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto flex justify-center py-6 px-6 text-black -mt-10 z-10 bg-white shadow-xl relative" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-4 bg-white relative">
          {successArray.map((item, index) => (
            <div className="flex gap-x-9 mdgap-x-4" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div>
                <img src={item.img} alt={item.label} className="w-12 h-12" />
              </div>
              <div className="">
                <div className="font-bold text-2xl">{item.value}+</div>
                <div className="font-bold text-sm text-[#afafaf]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-10/12 mx-auto mt-16 md:mt-20">
        <h2 className="text-3xl md:text-4xl text-center font-bold" data-aos="fade-up">
          What We Do
        </h2>
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresArray.map((item, index) => (
            <div key={index} className="bg-white shadow-xl p-6 md:p-9" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="h-20">
                <img src={item.img} alt="feature icon" />
              </div>
              <h2 className="text-lg font-bold text-[#252B42] mt-5">
                {item.title}
              </h2>
              <p className="my-5 h-16 font-semibold text-[#737373]">
                {item.content}
              </p>
              <a
                href={item.moreLink}
                className="border border-[#0D5C63] text-[#0D5C63] px-8 py-3 font-bold rounded-full backdrop-filter backdrop-blur-sm inline-block mt-4"
              >
                More
              </a>
            </div>
          ))}
        </div>
        <h2 className="text-3xl md:text-4xl text-center font-bold mt-24" data-aos="fade-up">
          Who We Are
        </h2>
        <p className="text-[#737373] mt-4 w-full md:w-2/4 mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-20 flex flex-col md:flex-row justify-center md:space-x-20">
          <div className="w-full md:w-2/5 mb-8 md:mb-0" data-aos="fade-right">
            <img
              src={WhoWeAre}
              className="rounded-lg w-full"
              alt="Who We Are"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col justify-center" data-aos="fade-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              Most trusted in <br /> our field
            </h1>
            <div>
              <p className="text-[#737373] mt-6 md:mt-10">
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
            </div>
            <div className="mt-8 md:mt-10 space-y-8 md:space-y-10">
              <div className="flex gap-x-5" data-aos="fade-up">
                <img src={TeamImage} alt="" className="md:w-12 md:h-12 w-8 h-8" />
                <div>
                  <h3 className="font-bold text-lg">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1 text-sm">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5" data-aos="fade-up" data-aos-delay="100">
                <img src={SpeedImage} alt="" className="md:w-12 md:h-12 w-8 h-8" />
                <div>
                  <h3 className="font-bold text-lg">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1  text-sm">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 py-16 md:py-32 w-full bg-[#081539]">
        <h1 className="text-white text-3xl md:text-5xl text-center font-bold" data-aos="fade-up">
          What Our Clients Say
        </h1>
        <p className="text-[#FFFFFF90] mt-4 w-full md:w-2/5 mx-auto text-center px-4 md:px-0" data-aos="fade-up" data-aos-delay="100">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="w-11/12 md:w-10/12 mx-auto mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-20">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white shadow-xl p-6 md:p-9" data-aos="fade-up" data-aos-delay={index * 50}>
              <h2 className="text-lg font-bold text-[#252B42] mt-3">
                Regina Miles
              </h2>
              <h6>Designer</h6>
              <p className="my-5 font-semibold text-[#737373]">
                This proved to be impossible using the traditional concepts of
                space and time. Einstein developed a new view of time first and
                then space. This proved to be impossible using the traditional
                concepts of space and time. Einstein developed a new view of
                time first and then space.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h1 className="text-[#252B42] text-3xl md:text-5xl mt-20 font-bold text-center" data-aos="fade-up">
          Meet Our Team
        </h1>
        <p className="text-[#737373] mt-4 w-full md:w-2/5 mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresArray.map((item, index) => (
            <div key={index} className="bg-white shadow-xl p-6 md:p-9" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="h-20">
                <img src={item.img} alt="feature icon" />
              </div>
              <h2 className="text-lg font-bold text-[#252B42] mt-5">
                {item.title}
              </h2>
              <p className="my-5 h-20 font-semibold text-[#737373]">
                {item.content}
              </p>
              <a
                href={item.moreLink}
                className="border border-[#0D5C63] text-[#0D5C63] px-8 py-3 font-bold rounded-full backdrop-filter backdrop-blur-sm inline-block mt-6"
              >
                More
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 md:mt-40 py-16 md:py-32 w-full md:h-[600px] bg-[#081539] md:mb-[500px]">
        <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center md:text-left">
              We Can Serve You Anywhere
            </h1>
            <p className="text-[#FFFFFF90] mt-6 md:mt-10 w-full md:w-3/5 text-center md:text-left">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="w-full md:w-auto" data-aos="fade-left">
            <img
              src={WorldImage}
              className="w-full md:w-auto"
              alt="World Map"
            />
          </div>
        </div>
        <div ref={appointmentFormRef} className="w-11/12 md:w-9/12 bg-white mx-auto mt-12 md:mt-20 shadow-xl quote-bg flex flex-col md:flex-row justify-end" data-aos="fade-up">
          <div
            className="w-full md:w-1/3 h-48 md:h-auto opacity-90 bg-cover bg-center"
            style={{
              backgroundImage: "url('path-to-your-quote-bg-image.jpg')",
            }}
          ></div>
          <div className="w-full md:w-2/3 bg-white p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl text-[#252B42] font-bold">
              Get A Free Quote Here
            </h1>
            <form>
              <section className="flex flex-col mt-6 md:mt-10">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-[#252B42]"
                >
                  Name*
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                />
              </section>
              <section className="flex flex-col mt-4">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-[#252B42]"
                >
                  Email*
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="example@gmail.com"
                  className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                />
              </section>
              <section className="flex flex-col mt-4">
                <label
                  htmlFor="department"
                  className="text-sm font-bold text-[#252B42]"
                >
                  Department*
                </label>
                <input
                  name="department"
                  type="text"
                  placeholder="Department"
                  className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                />
              </section>
              <section className="flex flex-col mt-4">
                <label
                  htmlFor="time"
                  className="text-sm font-bold text-[#252B42]"
                >
                  Time*
                </label>
                <input
                  name="time"
                  type="text"
                  placeholder="Time"
                  className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                />
              </section>
              <section className="mt-8 md:mt-10">
                <button className="bg-[#FF7B47] px-5 py-4 text-white font-bold rounded-lg w-full">
                  Book an Appointment
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#081539] w-full">
        <div className="w-11/12 md:w-9/12 mx-auto flex justify-center py-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl text-[#fff] font-bold">
              ZEROSOFT.ng
            </h2>
            <p className="mt-4 text-white text-center">
              +2348133340884 | hello@zerosoft.ng
            </p>
            <div className="flex mt-5 gap-4 items-center text-white flex-wrap justify-center">
              <a
                href="https://instagram.com"
                className="w-10 h-10 flex items-center justify-center hover:opacity-85 p-2.5 bg-[#ffffff] rounded-full"
              >
                <img src={Instagram} alt="instagram icon" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 flex items-center justify-center hover:opacity-85 p-2.5 bg-[#ffffff] rounded-full"
              >
                <img src={Twitter} alt="twitter icon" />
              </a>
              <a
                href="https://youtube.com"
                className="w-10 h-10 flex items-center justify-center hover:opacity-85 p-2.5 bg-[#ffffff] rounded-full"
              >
                <img src={Youtube} alt="youtube icon" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 flex items-center justify-center hover:opacity-85 p-2.5 bg-[#ffffff] rounded-full"
              >
                <img
                  src={Facebook}
                  alt="facebook icon"
                  className="rounded-sm"
                />
              </a>
            </div>
            <p className="mt-7 text-white text-center text-sm md:text-base">
              Copyright ©2024. All rights Reserved. Zerosoft IT Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
