import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Skills from "../Skills";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./style.css";

const navigation = [
  { name: "Profile", href: "#Profile", current: false },
  // { name: "About", href: "#", current: false },
  { name: "Projects", href: "#Project", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import "./style.css";

const projectList = [
  {
    id: 1,
    projectUrl: "https://rajuxecommerce.ccbp.tech/",
    name: "E-Commerce",
    description:
      "E-Commerce Website like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc...",
  },
  {
    id: 2,
    projectUrl: "https://rajuxfoodx.ccbp.tech/",
    name: "Food Munch",
    description: "Food Munch website is a user-centric food tech website",
  },
  {
    id: 3,
    projectUrl: "https://rajuxdailymood.ccbp.tech/",
    name: "Daily Mood Tracker",
    description: "A Daily Mood Tracker website is tracking your Daily moods",
  },
];

class Home extends React.Component {
  render() {
    return (
      <>
        {/* {Navbar container} */}

        <Disclosure as="nav" className="bg-cyan-400">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block text-white h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 text-white group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-cyan-400 menu-bar-menu">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-700 hover: text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

        {/* {Home container} */}

        <div className="home-container">
          <h1 className="home-heading cssanimation leFadeInLeft">Profile</h1>

          <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>

            <div className="infotop">
              <div className="self-intro-container">
                <img
                  src="https://i.postimg.cc/DZztqyvq/Picsart-24-10-28-19-55-42-191.png"
                  alt="profile"
                  className="mobile-view-profile"
                />
                <h1 className="fade-sequence">
                  Hello! <span className=" highlight-text">I’m Rajasekar</span>
                </h1>

                <p className="name">
                  a <span className="highlight-text">MERN stack developer</span>{" "}
                  focused on building efficient and user-friendly web
                  applications. I’m skilled in MongoDB, Express, React, and
                  Node.js, creating interactive and scalable solutions. With a
                  strong attention to detail, I’m committed to delivering clean,
                  maintainable code for every project.
                </p>
              </div>
              <img
                src="https://i.postimg.cc/L5NDjM2t/sketch1679837884359.png"
                alt="profile"
                className="profile-image"
              />
            </div>
          </div>

          <h1 className="home-heading">Projects</h1>
          <ul id="Project" className="project-list-container">
            {projectList.map((each) => (
              <li key={each.id} className="project-card-container">
                <div className="project-card">
                  <div className="front-content">
                    <p>{each.name}</p>
                  </div>
                  <div className="content">
                    <h1 className="heading">{each.name}</h1>
                    <p>{each.description}</p>
                    <a
                      className="url-link"
                      href={each.projectUrl}
                      target="_black"
                    >
                      <FaExternalLinkAlt className="link-icon" /> Website
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* {skills} */}
          {/* {<h1 className="home-heading">Skills</h1> 
          <Skills />*/}

          {/* {contacts} */}
          <h1 className="home-heading">Contacts</h1>
          <div id="Contact" className="contact-card">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rajasekarrdx35@gmail.com&su=Portfolio%20Inquiry&body=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20work."
              target="_black"
              className="mail"
            >
              <IoMailOutline className="mail-icon" />
            </a>
            <div className="profile-pic">
              <img
                src="https://i.postimg.cc/FKSLpsPN/IMG-20241026-201344.jpg"
                alt="siva"
              />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">I'm Rajasekar</span>
                <span className="about-me">MERN Stack Developer</span>
              </div>
              <div className="bottom-bottom">
                <div className="social-links-container">
                  <a href="https://github.com/RajaX934467" target="_black">
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajasekar-s-4b36172a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_black"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/snstr_xx/" target="_black">
                    <FaInstagram />
                  </a>
                  <a>
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
