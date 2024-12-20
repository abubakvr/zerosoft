import { useState, useEffect, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ICN from "/assets/icn-settings-icn-lg.svg";
import ICN1 from "/assets/icn-settings-icn-lg-1.svg";
import ICN2 from "/assets/icn-settings-icn-lg-2.svg";
import ICN3 from "/assets/icn-settings-icn-lg-3.svg";

import BookImage from "/assets/book-image.svg";
import BranchImage from "/assets/branch-image.svg";
import BusinessImage from "/assets/business-image.svg";
import TravelImage from "/assets/travel-image.svg";

import WhoWeAre from "/assets/people-image.webp";

import SpeedImage from "/assets/speed-image.svg";
import TeamImage from "/assets/team-image.svg";
import HeroImage from "/assets/hero-image-4.svg";
import Logo from "/assets/zerosoft-image.png";

import WorldImage from "/assets/world-image.png";

import Facebook from "/assets/facebook.svg";
import Twitter from "/assets/twitter.svg";
import Youtube from "/assets/youtube.svg";
import Instagram from "/assets/instagram.svg";

const headerItems = [
  { label: "Home", link: "/home" },
  { label: "Services", link: "/services" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const successArray = [
  { label: "Successful Cloud Migrations", value: "500+", img: ICN },
  { label: "DevOps Implementations", value: "300+", img: ICN1 },
  { label: "Active Cloud Environments", value: "1000+", img: ICN2 },
  { label: "Client Cost Savings", value: "$10M+", img: ICN3 },
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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
      const y =
        appointmentFormRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const meetingResponse = await fetch(
        "https://abubakar.life/api/create-meeting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: "Cloud & DevOps Consultation with Zerosoft",
            startTime: formData.time,
            endTime: new Date(
              new Date(formData.time).getTime() + 60 * 60 * 1000
            ).toISOString(), // Calculate end time 1 hour after start time
            attendees: [formData.email],
            summary: "Cloud & DevOps Consultation with Zerosoft",
          }),
        }
      );

      const meetingData = await meetingResponse.json();

      if (meetingResponse.ok) {
        const response = await fetch("https://abubakar.life/api/send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: { email: formData.email, name: formData.name },
            subject: "Cloud & DevOps Consultation Confirmation",
            htmlContent: `
              <div style="background-color: #f8f8f8; padding: 30px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 10px;">
                <p style="color: #555; font-size: 16px; line-height: 1.5;">Dear ${formData.name},</p>
                <p style="color: #555; font-size: 16px; line-height: 1.5;">We're excited to confirm your consultation with our <strong>${formData.department}</strong> department scheduled for <strong>${formData.time}</strong>.</p>
                <p style="color: #555; font-size: 16px; line-height: 1.5;">At Zerosoft, we're committed to providing you with the best cloud and DevOps consultation services. Our team of experts is ready to help you optimize your infrastructure, streamline your operations, and accelerate your digital transformation journey.</p>
                <p style="color: #555; font-size: 16px; line-height: 1.5;">During your consultation, we'll discuss:</p>
                <ul style="color: #555; font-size: 16px; line-height: 1.5;">
                  <li>Your current cloud architecture and DevOps practices</li>
                  <li>Tailored solutions to meet your specific cloud and automation needs</li>
                  <li>Best practices for cloud migration, security, and cost optimization</li>
                  <li>Strategies to enhance your team's productivity through DevOps methodologies</li>
                </ul>
                <p style="color: #555; font-size: 16px; line-height: 1.5;">If you need to reschedule or have any questions before your consultation, please don't hesitate to contact us.</p>
                <p style="color: #555; font-size: 16px; line-height: 1.5;">Thank you for choosing Zerosoft. We look forward to helping you achieve your cloud and DevOps goals!</p>
                <p style="color: #777; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">© 2023 Zerosoft. All rights reserved.</p>
              </div>
            `,
            params: {
              department: formData.department,
              time: formData.time,
            },
          }),
        });

        const data = await response.json();
        if (response.ok) {
          setMessage(
            "Consultation booked successfully! Please check your email for the confirmation."
          );
          setFormData({
            name: "",
            email: "",
            department: "",
            time: "",
          });
        } else {
          setMessage(`Error: ${data.message}`);
          console.error(`Error: ${data.message}`);
        }
      } else {
        setMessage(`Error: ${meetingData.error}`);
        console.error(`Error: ${meetingData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error booking consultation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-black backdrop-filter backdrop-blur-sm">
          <div className="bg-hero-bg w bg-[#081539] opacity-100 backdrop-filter backdrop-blur-sm"></div>
        </div>
        <header
          className={`w-full mx-auto z-50 fixed top-0 left-0 right-0  text-white transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-xl z-50 bg-[#00000090]"
              : "backdrop-filter"
          }`}
        >
          <nav
            className={` w-10/12 lg:w-10/12  2xl:w-[1100px] hidden md:flex flex-col md:flex-row justify-between  ${
              isScrolled ? "py-4" : "py-6"
            } items-center mx-auto`}
          >
            <a href="/" className="font-bold mb-4 md:mb-0 flex items-center">
              <img src={Logo} className="w-8 mr-1" alt="" />
              <span className="ml-1 text-white text-lg lg:text-xl">
                ZEROSOFT
              </span>
            </a>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 mb-4 md:mb-0">
              {headerItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:opacity-75 font-bold text-center text-sm lg:text-lg"
                >
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToAppointmentForm}
              className="px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-white  bg-orange-500 hover:opacity-90 w-full md:w-auto"
            >
              Get Consultation
            </button>
          </nav>
          <nav
            className={`md:hidden z-50 fixed top-0 right-0 left-0 w-11/12 mx-auto ${
              isScrolled ? "py-3" : "py-5"
            }`}
          >
            <div
              className={`${
                isScrolled
                  ? "backdrop-blur-xl z-50 "
                  : "backdrop-filter backdrop-blur-sm "
              } flex justify-between items-center px-6 py-3 rounded-full bg-[#00000090]`}
            >
              <a
                href="/"
                className="font-bold text-lg md:text-2xl ml-2 md:mb-0 flex items-center"
              >
                ZEROSOFT
              </a>
              <div className="">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
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
        </header>
        <main className="w-10/12 2xl:w-[1100px] mx-auto pt-6 pb-6 absolute top-0 left-0 right-0 text-white">
          <div className="flex justify-between">
            <div className="mt-36 pb-20 md:mt-52 w-1/2">
              <h1
                className="w-11/12 sm:w-7/12 md:w-9/12 lg:w-full mx-auto leading-tight text-3xl md:text-5xl lg:text-5xl font-bold"
                data-aos="fade-up"
              >
                Accelerate Your Cloud
                <br className="hidden md:block" /> and DevOps Journey
              </h1>
              <p
                className="w-4/4 sm:w-7/12 md:w-9/12 lg:w-full mx-auto leading-relaxed mt-12 md:mt-6 text-lg md:text-xl lg:text-xl font-light"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Empowering Businesses with Scalable Cloud Solutions and{" "}
                <br className="hidden lg:block" />
                Efficient DevOps Practices for Enhanced Innovation and Growth.
              </p>
              <div
                className="md:w-full mx-auto flex flex-col md:flex-row gap-y-4 md:gap-x-5 mt-12 md:mt-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button
                  onClick={scrollToAppointmentForm}
                  className="bg-orange-500 hover:opacity-90 transition-colors duration-300 text-sm lg:text-lg px-4 text-white lg:px-5 py-3 lg:py-4 font-bold rounded-full w-full md:w-48"
                >
                  Get Consultation
                </button>
                <button className="border border-orange-500 hover:bg-white hover:text-orange-500 text-orange-500 transition-colors duration-300 text-sm lg:text-lg px-4 lg:px-5 py-3 lg:py-4 font-bold rounded-full w-full md:w-48 backdrop-filter backdrop-blur-sm">
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-1/2 flex items-center mt-20 justify-end">
              <img src={HeroImage} className="w-full" alt="" />
            </div>
          </div>
        </main>
        <section
          className="w-fit mx-auto flex justify-center py-6 px-6 text-black -mt-10 z-10 bg-white shadow-xl relative"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-4 bg-white relative">
            {successArray.map((item, index) => (
              <div
                className="flex gap-x-9 mdgap-x-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-12 h-12"
                      loading="lazy"
                    />
                  </Suspense>
                </div>
                <div className="">
                  <div className="font-bold text-2xl">{item.value}</div>
                  <div className="font-bold text-sm text-[#afafaf]">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-10/12 mx-auto mt-16 md:mt-20">
          <h2
            className="text-3xl md:text-4xl text-center font-bold"
            data-aos="fade-up"
          >
            What We Do
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresArray.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 md:p-9"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="h-20">
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={item.img}
                      alt={`${item.title} icon`}
                      loading="lazy"
                    />
                  </Suspense>
                </div>
                <h3 className="text-lg font-bold text-[#252B42] mt-5">
                  {item.title}
                </h3>
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
          <h2
            className="text-3xl md:text-4xl text-center font-bold mt-24"
            data-aos="fade-up"
          >
            Who We Are
          </h2>
          <p
            className="text-[#737373] mt-4 w-full md:w-2/4 mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="mt-20 flex flex-col md:flex-row justify-center md:space-x-20">
            <div className="w-full md:w-2/5 mb-8 md:mb-0" data-aos="fade-right">
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={WhoWeAre}
                  className="rounded-lg w-full"
                  alt="Who We Are"
                  loading="lazy"
                />
              </Suspense>
            </div>
            <div
              className="w-full md:w-[500px] flex flex-col justify-center"
              data-aos="fade-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Most trusted in <br /> our field
              </h2>
              <div>
                <p className="text-[#737373] mt-6 md:mt-10">
                  Our team of expert consultants specializes in DevOps practices
                  and cloud technologies. We provide tailored solutions to help
                  businesses optimize their infrastructure, streamline
                  operations, and accelerate digital transformation.
                </p>
              </div>
              <div className="mt-8 md:mt-10 space-y-8 md:space-y-10">
                <div className="flex gap-x-5" data-aos="fade-up">
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={TeamImage}
                      alt="Team"
                      className="md:w-12 md:h-12 w-8 h-8"
                      loading="lazy"
                    />
                  </Suspense>
                  <div>
                    <h3 className="font-bold text-lg">
                      Expert DevOps Consulting
                    </h3>
                    <p className="text-[#737373] mt-1 text-sm">
                      Streamline your development pipeline and improve
                      collaboration with our DevOps expertise
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-x-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={SpeedImage}
                      alt="Speed"
                      className="md:w-12 md:h-12 w-8 h-8"
                      loading="lazy"
                    />
                  </Suspense>
                  <div>
                    <h3 className="font-bold text-lg">
                      Cloud Migration & Optimization
                    </h3>
                    <p className="text-[#737373] mt-1  text-sm">
                      Seamlessly transition to the cloud and optimize your
                      infrastructure for performance and cost-efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-40 py-16 md:py-32 w-full bg-[#081539]">
          <h2
            className="text-white text-3xl md:text-5xl text-center font-bold"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-[#FFFFFF90] mt-4 w-full md:w-2/5 mx-auto text-center px-4 md:px-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="w-11/12 md:w-10/12 mx-auto mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-20">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 md:p-9"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <h3 className="text-lg font-bold mt-3">Regina Miles</h3>
                <h4 className="text-orange-500 mt-1">Designer at Microsoft</h4>
                <p className="my-4 font-semibold text-[#737373]">
                  This proved to be impossible using the traditional concepts of
                  space and time. Einstein developed a new view of time first
                  and then space. This proved to be impossible using the
                  traditional concepts of space and time. Einstein developed a
                  new view of time first and then space.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-11/12 md:w-10/12 mx-auto">
          <h2
            className="text-[#252B42] text-3xl md:text-5xl mt-20 font-bold text-center"
            data-aos="fade-up"
          >
            Meet Our Team
          </h2>
          <p
            className="text-[#737373] mt-4 w-full md:w-2/5 mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresArray.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 md:p-9"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="h-20">
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={item.img}
                      alt={`${item.title} icon`}
                      loading="lazy"
                    />
                  </Suspense>
                </div>
                <h3 className="text-lg font-bold text-[#252B42] mt-5">
                  {item.title}
                </h3>
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
        </section>
        <section className="mt-20 md:mt-40 py-16 md:py-32 w-full md:h-[600px] bg-[#081539] md:mb-[500px]">
          <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center md:text-left">
                We Can Serve You Anywhere
              </h2>
              <p className="text-[#FFFFFF90] mt-6 md:mt-10 w-full md:w-3/5 text-center md:text-left">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="w-full md:w-auto" data-aos="fade-left">
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={WorldImage}
                  className="w-full md:w-auto"
                  alt="World Map"
                  loading="lazy"
                />
              </Suspense>
            </div>
          </div>
          <div
            ref={appointmentFormRef}
            className="w-11/12 md:w-9/12 bg-white mx-auto mt-12 md:mt-20 shadow-xl quote-bg flex flex-col md:flex-row justify-end"
            data-aos="fade-up"
          >
            <div
              className="w-full md:w-1/3 h-48 md:h-auto opacity-90 bg-cover bg-center"
              style={{
                backgroundImage: "url('path-to-your-quote-bg-image.jpg')",
              }}
            ></div>
            <div className="w-full md:w-2/3 bg-white p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl text-[#252B42] font-bold">
                Get A Free Quote Here
              </h2>
              <form onSubmit={handleSubmit}>
                <section className="flex flex-col mt-6 md:mt-10">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-[#252B42]"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border border-[#BDBDBD80] text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </section>
                <section className="flex flex-col mt-4">
                  <label
                    htmlFor="department"
                    className="text-sm font-bold text-[#252B42] px-2"
                  >
                    Department*
                  </label>
                  <div className="relative">
                    <select
                      id="department"
                      name="department"
                      className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border flex items-center text-[#737373] border-[#BDBDBD80] text-sm appearance-none w-full"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a Department</option>
                      <option value="software-development">
                        Software Development
                      </option>
                      <option value="network-infrastructure">
                        Network Infrastructure
                      </option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="it-support">IT Support</option>
                      <option value="project-management">
                        Project Management
                      </option>
                      <option value="quality-assurance">
                        Quality Assurance
                      </option>
                      <option value="systems-integration">
                        Systems Integration
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col mt-4">
                  <label
                    htmlFor="time"
                    className="text-sm font-bold text-[#252B42] px-2"
                  >
                    Time*
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      name="time"
                      className="bg-[#F9F9F9] p-4 mt-2.5 rounded-lg border flex items-center text-[#737373] border-[#BDBDBD80] text-sm appearance-none w-full"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a time slot</option>
                      {Array.from({ length: 9 }, (_, i) => {
                        const hour = i + 9;
                        const date = new Date();
                        date.setDate(date.getDate() + 1); // Set to next day
                        date.setHours(hour, 0, 0, 0);
                        const isoString =
                          date.toISOString().slice(0, -5) + "+01:00";
                        const displayTime = date.toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                        return (
                          <option key={hour} value={isoString}>
                            {displayTime}
                          </option>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4 mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </section>
                <section className="mt-8 md:mt-10">
                  <button
                    type="submit"
                    className="bg-orange-500 px-5 py-4 text-white font-bold rounded-lg w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Booking...
                      </>
                    ) : (
                      "Book an Appointment"
                    )}
                  </button>
                </section>
              </form>
              {message && (
                <p className="mt-4 text-center text-green-600">{message}</p>
              )}
            </div>
          </div>
        </section>
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
    </>
  );
};

export default App;
