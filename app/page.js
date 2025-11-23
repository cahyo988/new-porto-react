"use client";

import Image from "next/image";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineHtml5 } from "react-icons/ai";
import myProfile from "../public/myProfile.png";
import design from "../public/design.png";
import framework from "../public/framework.png";
import code from "../public/code.png";
import web1 from "../public/web1.jpg";
import web2 from "../public/web2.jpg";
import web3 from "../public/web3.jpg";
import web4 from "../public/web4.jpg";
import web5 from "../public/web5.jpg";
import web6 from "../public/web6.jpg";
import web7 from "../public/web7.jpg";

import {
  FaFigma,
  FaCss3,
  FaReact,
  FaLaravel,
  FaPhp,
  FaBootstrap,
  FaGithub,
  FaInstagram,
  FaNodeJs,
  FaVuejs,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { SiCanva, SiFlutter, SiExpress, SiMysql, SiDart } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const frontendStack = [
    { icon: <AiOutlineHtml5 />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3 />, name: "CSS", color: "text-blue-500" },
    { icon: <IoLogoJavascript />, name: "JS", color: "text-yellow-500" },
    { icon: <RiTailwindCssFill />, name: "Tailwind", color: "text-cyan-500" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-indigo-500" },
    { icon: <FaReact />, name: "React", color: "text-blue-400" },
    { icon: <RiNextjsLine />, name: "Next.js", color: "text-gray-800" },
    { icon: <FaVuejs />, name: "Vue.js", color: "text-green-500" },
  ];

  const backendStack = [
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
    { icon: <SiExpress />, name: "Express", color: "text-gray-700" },
    { icon: <FaPhp />, name: "PHP", color: "text-purple-500" },
    { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
    { icon: <DiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-600" },
  ];

  const mobileStack = [
    { icon: <SiFlutter />, name: "Flutter", color: "text-blue-400" },
    { icon: <SiDart />, name: "Dart", color: "text-blue-600" },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Platform toko online dengan shopping cart dan payment integration",
      image: web1,
      tags: ["React", "Tailwind", "Node.js"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Task Manager App",
      description: "Aplikasi manajemen tugas dengan reminder dan tracking",
      image: web2,
      tags: ["React", "Redux", "MongoDB"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Food Delivery",
      description: "Platform food delivery dengan real-time tracking",
      image: web3,
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Streaming Platform",
      description: "Platform streaming dengan episode tracking",
      image: web4,
      tags: ["React", "Video.js", "MongoDB"],
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "AI Prompt Library",
      description: "Platform untuk menyimpan dan berbagi AI prompts",
      image: web5,
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "POS System",
      description: "Sistem POS dengan inventory management",
      image: web6,
      tags: ["Laravel", "Vue.js", "MySQL"],
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        {/* Compact Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              cahyo<span className="text-purple-600">DEV</span>
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
            >
              {darkMode ? (
                <BsSunFill className="text-xl" />
              ) : (
                <BsFillMoonStarsFill className="text-xl" />
              )}
            </button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6">
          {/* Compact Hero Section */}
          <section className="py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Tersedia untuk Freelance
                </div>

                <div>
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
                    <TypeAnimation
                      sequence={["Cahyo Saputra", 3000, "", 500]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </h2>
                  <p className="text-2xl font-medium text-gray-600 dark:text-gray-400">
                    Fullstack Developer
                  </p>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Halo! Saya adalah Fullstack Developer yang suka membangun aplikasi web yang mudah diakses dan digunakan.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/cahyo988"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cahyo-saputra-a26411204/"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/saputracah_/"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="mailto:cahyos493@gmail.com"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <FaEnvelope className="text-2xl" />
                  </a>
                  <a
                    href="https://wa.me/6289636958917"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative mx-auto">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800">
                  <Image
                    src={myProfile}
                    alt="Cahyo Saputra"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="mb-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 inline-block border-b-4 border-purple-600 pb-1">
                Layanan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Saya menawarkan berbagai layanan untuk membantu membangun kehadiran digital Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Design Card */}
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4">
                  <Image
                    src={design}
                    width={30}
                    height={30}
                    alt="design"
                    className="filter brightness-0 invert"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Desain
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Membuat desain yang elegan dan sesuai kebutuhan
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-sm">
                    <FaFigma className="text-pink-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-sm">
                    <SiCanva className="text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Canva
                    </span>
                  </div>
                </div>
              </div>

              {/* Frontend Card */}
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Image
                    src={code}
                    width={30}
                    height={30}
                    alt="frontend"
                    className="filter brightness-0 invert"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Frontend
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Teknologi frontend untuk UI/UX
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {frontendStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-2 rounded-lg bg-white dark:bg-gray-700 hover:scale-110 transition-transform duration-300"
                      title={tech.name}
                    >
                      <span
                        className={`text-2xl ${tech.color} dark:${tech.color}`}
                      >
                        {tech.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Card */}
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Image
                    src={framework}
                    width={30}
                    height={30}
                    alt="backend"
                    className="filter brightness-0 invert"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Backend
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Pengembangan sisi server & database
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {backendStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-2 rounded-lg bg-white dark:bg-gray-700 hover:scale-110 transition-transform duration-300"
                      title={tech.name}
                    >
                      <span
                        className={`text-2xl ${tech.color} dark:${tech.color}`}
                      >
                        {tech.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Development Card */}
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                  <SiFlutter className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Pengembangan Mobile
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Pengembangan aplikasi mobile lintas platform
                </p>
                <div className="space-y-2">
                  {mobileStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800"
                    >
                      <span className={`text-2xl ${tech.color}`}>
                        {tech.icon}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="py-16">
            <div className="mb-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 inline-block border-b-4 border-purple-600 pb-1">
                Proyek Pilihan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Berikut adalah beberapa proyek yang telah saya kerjakan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 text-center border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Cahyo Saputra. Hak cipta dilindungi.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
