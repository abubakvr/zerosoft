import { Link } from "react-router-dom";

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
  { label: "Clients", value: "201", img: ICN },
  { label: "Completed", value: "100", img: ICN1 },
  { label: "Ongoing", value: "102", img: ICN2 },
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
  return (
    <div>
      <div className="bg-black backdrop-filter backdrop-blur-sm">
        <div className="bg-hero-bg bg-black opacity-60 backdrop-filter backdrop-blur-sm"></div>
      </div>
      <div className="w-11/12 mx-auto py-6 absolute top-0 left-0 right-0 text-white">
        <nav className="flex justify-between py-4 items-center px-6 rounded-full bg-[#00000090] backdrop-filter backdrop-blur-sm">
          <a className="font-bold text-2xl ml-2">ZEROSOFT</a>
          <ul className="flex space-x-5">
            {headerItems.map((item, index) => (
              <li key={index} className="hover:opacity-75 font-bold">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <button className="px-6 py-3 rounded-full font-bold text-white bg-orange-600 hover:opacity-90">
            Talk to an expert
          </button>
        </nav>
        <div className="text-center mt-40">
          <h1 className="text-6xl font-bold">
            Accelerate and Optimize Your
            <br /> Cloud Journey With Us
          </h1>
          <p className="mt-12 text-2xl font-thin">
            Empowering Businesses with Tailored, Scalable, and Secure Software
            <br />
            and Cloud Solutions for Enhanced Efficiency and Innovation.
          </p>
          <div className="flex justify-center gap-x-5 mt-12">
            <button className="bg-orange-600 px-5 py-4 font-bold rounded-full w-48">
              Talk to an expert
            </button>
            <button className="border border-white px-5 py-4 font-bold rounded-full w-48 backdrop-filter backdrop-blur-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto flex justify-center py-6 px-6 text-black -mt-10 z-9999 opacity-100 bg-white shadow-xl relative">
        <div className="flex justify gap-x-24 bg-white relative">
          {successArray.map((item, index) => (
            <div className="flex gap-x-4" key={index}>
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
      <div className="w-11/12 mx-auto mt-20">
        <h2 className="text-4xl text-center font-bold">What We Do</h2>
        <div className="mt-12 flex gap-x-5">
          {featuresArray.map((item, index) => (
            <div key={index} className="bg-white shadow-xl p-9">
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
                className="border border-[#0D5C63] text-[#0D5C63] px-8 py-3 font-bold rounded-full backdrop-filter backdrop-blur-sm"
              >
                More
              </a>
            </div>
          ))}
        </div>
        <h2 className="text-4xl text-center font-bold mt-24">Who We Are</h2>
        <p className="text-[#737373] mt-4 w-2/4 mx-auto text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-20 flex justify-center space-x-20">
          <div className="w-2/5">
            <img src={WhoWeAre} className="rounded-lg" />
          </div>
          <div className="w-[500px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold">
              Most trusted in <br /> our field
            </h1>
            <div>
              <p className="text-[#737373] mt-10">
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
            </div>
            <div className="mt-10 gap-y-10">
              <div className="flex gap-x-5">
                <img src={TeamImage} alt="" />
                <div>
                  <h3 className="font-bold">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 mt-8">
                <img src={SpeedImage} alt="" />
                <div>
                  <h3 className="font-bold">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 h-auto py-32 w-full bg-[#081539]">
        <h1 className="text-white text-5xl text-center font-bold">
          What Our Clients Say
        </h1>
        <p className="text-[#FFFFFF90] mt-4 w-2/5 mx-auto text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="w-10/12 mx-auto mt-20 flex gap-x-20">
          <div className="bg-white shadow-xl p-9">
            <h2 className="text-lg font-bold text-[#252B42] mt-3">
              Regina Miles
            </h2>
            <h6>Designer</h6>
            <p className="my-5 h-auto font-semibold text-[#737373]">
              This proved to be impossible using the traditional concepts of
              space and time. Einstein developed a new view of time first and
              then space. This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a new view of time
              first and then space.
            </p>
          </div>
          <div className="bg-white shadow-xl p-9">
            <h2 className="text-lg font-bold text-[#252B42] mt-3">
              Regina Miles
            </h2>
            <h6>Designer</h6>
            <p className="my-5 h-16 font-semibold text-[#737373]">
              This proved to be impossible using the traditional concepts of
              space and time. Einstein developed a new view of time first and
              then space. This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a new view of time
              first and then space.
            </p>
          </div>
          <div className="bg-white shadow-xl p-9">
            <h2 className="text-lg font-bold text-[#252B42] mt-3">
              Regina Miles
            </h2>
            <h6>Designer</h6>
            <p className="my-5 h-16 font-semibold text-[#737373]">
              This proved to be impossible using the traditional concepts of
              space and time. Einstein developed a new view of time first and
              then space. This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a new view of time
              first and then space.
            </p>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-[#252B42] text-5xl mt-20 font-bold text-center">
          Meet Our Team
        </h1>
        <p className="text-[#737373] mt-4 w-2/5 mx-auto text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-12 flex gap-x-5">
          {featuresArray.map((item, index) => (
            <div key={index} className="bg-white shadow-xl p-9">
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
                className="border border-[#0D5C63] text-[#0D5C63] px-8 py-3 font-bold rounded-full backdrop-filter backdrop-blur-sm mt-6"
              >
                More
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-40 h-[600px] py-32 w-full bg-[#081539] mb-[600px]">
        <div className="w-9/12 mx-auto flex">
          <div>
            <h1 className="text-white text-5xl font-bold">
              What Our Clients Say
            </h1>
            <p className="text-[#FFFFFF90] mt-10 w-3/5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div>
            <img src={WorldImage} className="" />
          </div>
        </div>
        <div className="w-9/12 h-auto bg-white mx-auto mt-20 shadow-xl quote-bg flex justify-right">
          <div className="w-1/3 h-max opacity-90"></div>
          <div className="w-2/3 h-max bg-white p-12">
            <h1 className="text-4xl text-[#252B42] font-bold">
              Get A Free Quote Here
            </h1>
            <form>
              <section className="flex flex-col mt-10">
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
              <section className="mt-10">
                <button className="bg-[#FF7B47] px-5 py-4 text-white font-bold rounded-lg w-full">
                  Book an Appointment
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#081539] w-full">
        <div className="w-9/12 mx-auto flex justify-center py-10">
          <div className="flex flex-col items-center ">
            <h2 className="text-3xl text-[#fff] font-bold">ZEROSOFT.ng</h2>
            <p className="mt-4 text-white">
              +2348133340884 | hello@zerosoft.ng
            </p>
            <div className="flex mt-5 gap-x-4 items-center text-white">
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

            <p className="mt-7 text-white">
              Copyright ©2024. All rights Reserved. Zerosoft IT Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
