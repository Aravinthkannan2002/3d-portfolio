import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGooglemaps,
  SiJsonwebtokens,
  SiRazorpay,
  SiShadcnui,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <SiDart />,
  },
  getx: {
    title: "GetX",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-bold text-sm">
        Get<strong>X</strong>
      </span>
    ),
  },
  bloc: {
    title: "BLoC",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-sm">BLoC</span>,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  rest: {
    title: "REST APIs",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-sm">REST</span>,
  },
  razorpay: {
    title: "Razorpay",
    bg: "black",
    fg: "white",
    icon: <SiRazorpay />,
  },
  hive: {
    title: "Hive / SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  maps: {
    title: "Google Maps",
    bg: "black",
    fg: "white",
    icon: <SiGooglemaps />,
  },
  tflite: {
    title: "TensorFlow Lite",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  stomp: {
    title: "WebSocket / STOMP",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  jwt: {
    title: "JWT Auth",
    bg: "black",
    fg: "white",
    icon: <SiJsonwebtokens />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "talentturbo",
    category: "Job Discovery",
    title: "TalentTurbo",
    src: `${BASE_PATH}/talentturbo/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
        PROJECT_SKILLS.getx,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.rest,
        PROJECT_SKILLS.jwt,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            TalentTurbo is a production-grade job discovery &amp; referral
            platform serving active users across Android &amp; iOS. I owned
            end-to-end delivery &mdash; from requirements gathering through Play
            Store releases (currently on v1.0.7) &mdash; and the app earned a
            4.7&#9733; user rating.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Multi-channel Auth</TypographyH3>
          <p className="font-mono mb-2">
            Built a complete authentication system (Email/Password, Mobile OTP,
            Google Sign-In, Forgot Password) with secure token persistence,
            session refresh handling, and a centralized API authorization layer.
          </p>
          <TypographyH3 className="my-4 mt-8">Refer &amp; Earn</TypographyH3>
          <p className="font-mono mb-2">
            Led development of the rewards engine with unique referral code
            generation, real-time status tracking, and a rewards dashboard,
            driving measurable growth in organic user acquisition.
          </p>
          <TypographyH3 className="my-4 mt-8">Deep Linking</TypographyH3>
          <p className="font-mono mb-2">
            Engineered deep linking with Firebase Dynamic Links and app_links,
            enabling seamless redirection from shared URLs, push notifications,
            and email campaigns directly into job detail and referral screens.
          </p>
          <TypographyH3 className="my-4 mt-8">Performance</TypographyH3>
          <p className="font-mono mb-2">
            During the v1.0.7 cycle, reduced APK size, fixed memory leaks in
            image-heavy lists using cached_network_image and shimmer
            placeholders, and improved cold-start time.
          </p>
        </div>
      );
    },
  },
  {
    id: "bellybutton",
    category: "Event Management",
    title: "BellyButton",
    src: `${BASE_PATH}/bellybutton/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
        PROJECT_SKILLS.getx,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.stomp,
        PROJECT_SKILLS.jwt,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            BellyButton (v1.0.2+8) is a real-time event management and
            photo-sharing application built with Flutter, GetX, and Clean
            Architecture &mdash; spanning 26 feature modules and 30+ reusable
            widgets. Live on the App Store.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Secure Auth</TypographyH3>
          <p className="font-mono mb-2">
            Phone OTP authentication with SMS auto-read (smart_auth), JWT token
            lifecycle management, and centralized authorization via Dio
            interceptors with automatic session-expiry handling.
          </p>
          <TypographyH3 className="my-4 mt-8">Event Lifecycle</TypographyH3>
          <p className="font-mono mb-2">
            Timezone-aware event creation, a multi-step wizard with review &amp;
            confirm flow, contact-based invitations with smart filtering and
            duplicate detection, and native device calendar sync via
            device_calendar with Hive-persisted mappings.
          </p>
          <TypographyH3 className="my-4 mt-8">Advanced Photos</TypographyH3>
          <p className="font-mono mb-2">
            A WhatsApp-style multi-capture camera, an Instagram-style
            auto-playing slideshow with screenshot protection, and a face-filter
            carousel for filtering photos by event members.
          </p>
          <TypographyH3 className="my-4 mt-8">Real-time Updates</TypographyH3>
          <p className="font-mono mb-2">
            STOMP over WebSocket and Firebase Cloud Messaging push notifications
            across foreground, background, and terminated app states, with rich
            in-app notification overlays.
          </p>
        </div>
      );
    },
  },
  {
    id: "face-attendance",
    category: "AI / Biometric",
    title: "Face Recognition Attendance",
    src: `${BASE_PATH}/face-attendance/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
        PROJECT_SKILLS.getx,
      ],
      backend: [
        PROJECT_SKILLS.tflite,
        PROJECT_SKILLS.hive,
        PROJECT_SKILLS.maps,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI-powered, multi-tenant attendance platform with
            face-recognition-based check-in/check-out, break tracking, and admin
            dashboards, built with Flutter &amp; GetX.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">On-device Face ML</TypographyH3>
          <p className="font-mono mb-2">
            Implemented on-device face recognition using TensorFlow Lite and
            Google ML Kit &mdash; enabling offline biometric verification with
            sub-second matching and zero server-side image storage for privacy
            compliance.
          </p>
          <TypographyH3 className="my-4 mt-8">Kiosk Mode</TypographyH3>
          <p className="font-mono mb-2">
            Designed a Kiosk Mode for shared-device workplaces with employee
            selection, liveness-aware face capture, and automated check-in/out
            flows, eliminating manual punch-in fraud.
          </p>
          <TypographyH3 className="my-4 mt-8">Geofencing</TypographyH3>
          <p className="font-mono mb-2">
            Geolocation-based attendance validation using Geolocator to enforce
            on-site check-ins within a configurable office radius, preventing
            remote and proxy attendance.
          </p>
          <TypographyH3 className="my-4 mt-8">Offline-first</TypographyH3>
          <p className="font-mono mb-2">
            Hive local storage with connectivity-aware sync, ensuring
            uninterrupted attendance capture during network outages.
          </p>
        </div>
      );
    },
  },
  {
    id: "homiefix",
    category: "On-demand Services",
    title: "HomieFix",
    src: `${BASE_PATH}/homiefix/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
        PROJECT_SKILLS.bloc,
      ],
      backend: [
        PROJECT_SKILLS.razorpay,
        PROJECT_SKILLS.rest,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            HomieFix is a scalable home service booking application with
            real-time service availability, dynamic pricing, and instant booking
            confirmation, built with Flutter &amp; BLoC architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Refer &amp; Earn</TypographyH3>
          <p className="font-mono mb-2">
            Unique referral code tracking with coupon validation logic,
            improving user acquisition and engagement.
          </p>
          <TypographyH3 className="my-4 mt-8">Welcome Coupons</TypographyH3>
          <p className="font-mono mb-2">
            A coupon system with expiry validation, usage limits, and server +
            client-side eligibility checks.
          </p>
          <TypographyH3 className="my-4 mt-8">Payments</TypographyH3>
          <p className="font-mono mb-2">
            Razorpay payment gateway for secure in-app transactions with
            post-payment order verification for reliable success tracking.
            Multi-language support (English &amp; Tamil) via easy_localization.
          </p>
        </div>
      );
    },
  },
  {
    id: "gold-scheme",
    category: "Fintech",
    title: "Gold Scheme",
    src: `${BASE_PATH}/gold-scheme/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [
        PROJECT_SKILLS.razorpay,
        PROJECT_SKILLS.rest,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A gold subscription &amp; investment platform letting users join gold
            schemes, transact securely, and track live gold rates.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Secure Payments</TypographyH3>
          <p className="font-mono mb-2">
            Razorpay-powered payment module with encrypted processing and
            real-time payment validation for seamless transactions.
          </p>
          <TypographyH3 className="my-4 mt-8">API Integration</TypographyH3>
          <p className="font-mono mb-2">
            RESTful APIs with Dio for authentication, subscription plans, and
            transaction history, with efficient request handling and structured
            error responses.
          </p>
          <TypographyH3 className="my-4 mt-8">Live Gold Rates</TypographyH3>
          <p className="font-mono mb-2">
            Real-time Gold Rate Chart built with FL Chart, letting users track
            daily price fluctuations with smooth animation and optimized data
            visualization.
          </p>
        </div>
      );
    },
  },
  {
    id: "mvaahna",
    category: "Vehicle Service",
    title: "Mvaahna",
    src: `${BASE_PATH}/mvaahna/cover.svg`,
    screenshots: ["cover.svg"],
    live: " ",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
        PROJECT_SKILLS.getx,
      ],
      backend: [PROJECT_SKILLS.maps, PROJECT_SKILLS.rest],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Mvaahna is a production garage &amp; vehicle service management
            platform (live on the App Store). I built feature screens for
            vehicle service tracking, customer management, and appointment
            scheduling using Flutter &amp; GetX, under senior developer
            mentorship.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Localization</TypographyH3>
          <p className="font-mono mb-2">
            Multi-language support across 8 Indian languages (English, Hindi,
            Tamil, Telugu, Malayalam, Kannada, Marathi, Gujarati) using
            easy_localization, expanding accessibility for regional users.
          </p>
          <TypographyH3 className="my-4 mt-8">Maps &amp; Media</TypographyH3>
          <p className="font-mono mb-2">
            Google Maps and Geolocator with reverse geocoding to capture garage
            and customer locations, alongside image_picker and image_cropper for
            capturing vehicle service photos.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: `${BASE_PATH}/portfolio/landing.png`,
    screenshots: ["landing.png"],
    live: "https://github.com/Aravinthkannan2002/3d-portfolio",
    github: "https://github.com/Aravinthkannan2002/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Welcome to my digital playground, where creativity meets code. This
            very portfolio &mdash; an interactive 3D experience built with
            Next.js, Spline, and Framer Motion.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Beautiful 3D Objects</TypographyH3>
          <p className="font-mono mb-2">
            That interactive 3D keyboard is rendered live on the page &mdash;
            pressing each keycap reveals a skill in a goofy way. Typing, but make
            it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skillss.png`,
            ]}
          />
          <TypographyH3 className="my-4">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio &mdash; it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
