"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import {
  SiAndroid,
  SiAndroidstudio,
  SiApple,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGooglemaps,
  SiJsonwebtokens,
  SiPostman,
  SiRazorpay,
  SiSocketdotio,
  SiSqlite,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "aravindkannan4614@gmail.com",
    href: "mailto:aravindkannan4614@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 7010465822",
    href: "tel:+917010465822",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arvindhkannan/",
    content: "/arvindhkannan",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Aravinthkannan2002",
    content: "/Aravinthkannan2002",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Flutter",
    content: "Google's UI toolkit for building cross-platform apps",
    icon: <SiFlutter size={"50px"} color={"#02569B"} />,
    color: "#02569B",
  },
  {
    name: "Dart",
    content: "The client-optimized language behind Flutter",
    icon: <SiDart size={"50px"} color={"#0175C2"} />,
    color: "#0175C2",
  },
  {
    name: "Android",
    content: "Building and shipping production apps to the Play Store",
    icon: <SiAndroid size={"50px"} color="#3DDC84" />,
    color: "#3DDC84",
  },
  {
    name: "iOS",
    content: "Building and shipping production apps to the App Store",
    icon: <SiApple size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Firebase",
    content: "Auth, Firestore, FCM, Dynamic Links, Analytics & Crashlytics",
    icon: <SiFirebase size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "TensorFlow Lite",
    content: "On-device ML for offline face recognition",
    icon: <SiTensorflow size={"50px"} color="#FF6F00" />,
    color: "#FF6F00",
  },
  {
    name: "SQLite / Hive",
    content: "Offline-first local storage and persistence",
    icon: <SiSqlite size={"50px"} color="#003B57" />,
    color: "#003B57",
  },
  {
    name: "Razorpay",
    content: "Secure in-app payment gateway integration",
    icon: <SiRazorpay size={"50px"} color="#3395FF" />,
    color: "#3395FF",
  },
  {
    name: "Google Maps",
    content: "Maps, Geolocator & reverse geocoding integrations",
    icon: <SiGooglemaps size={"50px"} color="#4285F4" />,
    color: "#4285F4",
  },
  {
    name: "WebSocket / STOMP",
    content: "Real-time updates across app lifecycle states",
    icon: <SiSocketdotio size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "JWT",
    content: "Token-based auth with secure session handling",
    icon: <SiJsonwebtokens size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Android Studio",
    content: "Primary IDE for Flutter & native Android development",
    icon: <SiAndroidstudio size={"50px"} color="#3DDC84" />,
    color: "#3DDC84",
  },
  {
    name: "VS Code",
    content: "Lightweight editor for fast Flutter iteration",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Postman",
    content: "Testing and debugging RESTful APIs",
    icon: <SiPostman size={"50px"} color="#FF6C37" />,
    color: "#FF6C37",
  },
  {
    name: "Git",
    content: "Version control for every project",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Hosting, collaboration and code reviews",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Aravinth Kannan</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Flutter Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Aravinth Kannan, a Flutter Mobile Application
              Developer with 2+ years of experience shipping production-grade
              cross-platform apps for Android &amp; iOS. I&apos;ve delivered six
              live apps with 100k+ combined downloads and a 4.7&#9733; flagship
              rating, spanning job discovery, fintech, event management,
              biometric attendance, and on-demand services.
            </p>
            <p className="mb-10">
              I specialize in Clean Architecture with BLoC &amp; GetX, Firebase,
              RESTful APIs, real-time WebSocket/STOMP, offline-first storage, and
              on-device ML using TensorFlow Lite and Google ML Kit. I love owning
              features end-to-end &mdash; from requirements gathering all the way
              through Play Store and App Store releases.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
