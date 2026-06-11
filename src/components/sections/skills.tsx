"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import {
  SiAndroid,
  SiAndroidstudio,
  SiApple,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGooglemaps,
  SiJsonwebtokens,
  SiPostman,
  SiRazorpay,
  SiSocketdotio,
  SiSqlite,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";
import {
  Boxes,
  Camera,
  Database,
  Globe,
  Languages,
  LayoutGrid,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

type SkillItem = { name: string; icon: React.ReactNode; color: string };
type SkillGroup = { label: string; items: SkillItem[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      { name: "Dart", icon: <SiDart />, color: "#0175C2" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    ],
  },
  {
    label: "State & Architecture",
    items: [
      { name: "BLoC", icon: <Boxes />, color: "#2BB2AC" },
      { name: "GetX", icon: <Zap />, color: "#8A2BE2" },
      { name: "Clean Architecture", icon: <Layers />, color: "#22c55e" },
      { name: "MVVM", icon: <LayoutGrid />, color: "#60a5fa" },
    ],
  },
  {
    label: "Backend & Realtime",
    items: [
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "REST APIs / Dio", icon: <Globe />, color: "#38bdf8" },
      { name: "WebSocket / STOMP", icon: <SiSocketdotio />, color: "#ffffff" },
      { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#f472b6" },
    ],
  },
  {
    label: "On-device & Native",
    items: [
      { name: "TensorFlow Lite", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "Google ML Kit", icon: <SiGoogle />, color: "#4285F4" },
      { name: "Google Maps", icon: <SiGooglemaps />, color: "#34A853" },
      { name: "Camera", icon: <Camera />, color: "#f59e0b" },
    ],
  },
  {
    label: "Storage",
    items: [
      { name: "Hive / SQLite", icon: <SiSqlite />, color: "#1f9ed1" },
      { name: "Shared Preferences", icon: <Database />, color: "#a78bfa" },
    ],
  },
  {
    label: "Integrations",
    items: [
      { name: "Razorpay", icon: <SiRazorpay />, color: "#3395FF" },
      { name: "easy_localization", icon: <Languages />, color: "#22d3ee" },
      { name: "Lottie", icon: <Sparkles />, color: "#facc15" },
    ],
  },
  {
    label: "Tools & Deployment",
    items: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
      { name: "Android Studio", icon: <SiAndroidstudio />, color: "#3DDC84" },
      { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
      { name: "App Store", icon: <SiApple />, color: "#ffffff" },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 md:py-32"
    >
      {/* soft backdrop so the grid reads clearly over the 3D background */}
      <div className="absolute inset-0 -z-[1] bg-background/60 backdrop-blur-md" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-normal text-neutral-600 dark:text-neutral-300">
          My Flutter &amp; cross-platform mobile development toolkit
        </p>

        <div className="mt-14 flex flex-col gap-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 text-sm font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                {group.label}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={cn(
                      "group flex items-center gap-2.5 rounded-xl px-4 py-2.5",
                      "border border-zinc-300/60 dark:border-zinc-700/80",
                      "bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm",
                      "transition-colors hover:border-zinc-400 dark:hover:border-zinc-500"
                    )}
                  >
                    <span
                      className="text-xl md:text-2xl shrink-0"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-sm md:text-base text-neutral-800 dark:text-neutral-100 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
