"use client"

import Image from "next/image";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import myProfile from '../public/myProfile.png'
import design from '../public/design.png'
import framework from '../public/framework.png'
import code from '../public/code.png'
import web1 from "../public/web1.jpg"
import web2 from "../public/web2.jpg"
import web3 from "../public/web3.jpg"
import web4 from "../public/web4.jpg"
import web5 from "../public/web5.jpg"
import web6 from "../public/web6.jpg"
import web7 from "../public/web7.jpg"



import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-slate-300 poppins">
        <section className="min-h-screen">
          <nav className="py-6 mb-16 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white fraunces">cahyoDEV</h1>
            <ul className="flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform" 
                />
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform" 
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-4 text-teal-600 font-bold md:text-7xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Cahyo Saputra
            </h2>
            <h3 className="text-3xl py-4 md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              Developer & Designer
            </h3>
            <p className="text-lg py-6 leading-8 text-gray-600 md:text-xl max-w-2xl mx-auto dark:text-slate-300">
              Fullstack Developer yang menyediakan layanan untuk kebutuhan programming dan design. Mari bergabung dan mari kita mulai bekerja sama.
            </p>
          </div>
          <div className="flex justify-center gap-8 py-6">
            <a 
              href="https://github.com/cahyo988" 
              className="text-4xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>
            <a 
              href="https://www.linkedin.com/in/cahyo-saputra-a26411204/" 
              className="text-4xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a 
              href="https://www.instagram.com/saputracah_/" 
              className="text-4xl text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
          </div>
          <div className="relative bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 rounded-full w-64 h-64 mt-12 mx-auto overflow-hidden md:w-80 md:h-80 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <Image 
              src={myProfile} 
              layout="fill" 
              objectFit="cover" 
              alt="Cahyo Saputra Profile" 
              className="hover:scale-110 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800/30">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Layanan yang Saya Tawarkan</h3>
            <p className="text-lg leading-8 text-gray-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
              Sejak awal perjalanan saya sebagai freelance developer, saya telah bekerja remote untuk beberapa <span className="text-teal-600 dark:text-teal-400 font-bold">Klien</span> dan berkolaborasi dengan berbagai <span className="text-teal-600 dark:text-teal-400 font-bold">Tim</span>
            </p>
            <p className="text-lg leading-8 text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Saya menawarkan berbagai macam layanan, termasuk programming dan design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Design Services */}
            <div className="group bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-3xl border-2 border-transparent hover:border-pink-200 dark:hover:border-pink-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Image src={design} width={50} height={50} className="mx-auto" alt="design"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Desain yang Menarik
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                Membuat desain yang elegan dan sesuai dengan kebutuhan Anda
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
              <h4 className="text-teal-600 dark:text-teal-400 font-bold mb-6 text-lg">Tools Desain</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-4xl text-pink-500"><FaFigma /></span>
                  <p className="text-gray-700 dark:text-slate-300 font-medium text-lg">Figma</p>
                </div>
                <div className="flex items-center justify-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-4xl text-blue-500"><SiCanva /></span>
                  <p className="text-gray-700 dark:text-slate-300 font-medium text-lg">Canva</p>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="group bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-3xl border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Image src={code} width={50} height={50} className="mx-auto" alt="code" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Bahasa Pemrograman
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                Bahasa pemrograman yang saya gunakan untuk coding
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6"></div>
              <h4 className="text-teal-600 dark:text-teal-400 font-bold mb-6 text-lg">Tech Stack</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-orange-500"><AiOutlineHtml5 /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">HTML</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-blue-500"><FaCss3 /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">CSS</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-yellow-500"><IoLogoJavascript /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">JS</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-cyan-500"><RiTailwindCssFill /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">Tailwind</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-purple-500"><FaPhp /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">PHP</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-indigo-500"><FaBootstrap /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-blue-400"><FaReact /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">React</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <span className="text-3xl mb-2 text-green-500"><DiMongodb /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300 font-medium">MongoDB</p>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="group bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-3xl border-2 border-transparent hover:border-green-200 dark:hover:border-green-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Image src={framework} width={50} height={50} className="mx-auto" alt="framework" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Framework Pemrograman
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                Framework yang saya gunakan untuk membuat proyek
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
              <h4 className="text-teal-600 dark:text-teal-400 font-bold mb-6 text-lg">Framework</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-4xl text-gray-800 dark:text-white"><RiNextjsLine /></span>
                  <p className="text-gray-700 dark:text-slate-300 font-medium text-lg">Next.js</p>
                </div>
                <div className="flex items-center justify-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-4xl text-red-500"><FaLaravel /></span>
                  <p className="text-gray-700 dark:text-slate-300 font-medium text-lg">Laravel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">💼 My Works</span>
            </div>
            <h3 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Portofolio Saya
            </h3>
            <p className="text-xl leading-8 text-gray-600 dark:text-slate-300 max-w-4xl mx-auto">
              Dengan keahlian dalam <span className="text-teal-600 dark:text-teal-400 font-bold">Programming</span>, saya memberikan solusi digital yang inovatif, terstruktur dan efisien. Portofolio ini menunjukkan dedikasi saya dalam mengubah konsep menjadi implementasi yang robust.
            </p>
          </div>

          {/* Portfolio Grid - All Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Web Project 1 - E-commerce Simple */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-300 dark:hover:border-green-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">E-Commerce</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web1}
                  alt="E-commerce Simple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">E-commerce Simple</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Platform toko online sederhana dengan fitur shopping cart dan katalog produk</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 text-green-800 dark:text-green-200 text-xs rounded-full font-semibold shadow-sm">React</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 text-teal-800 dark:text-teal-200 text-xs rounded-full font-semibold shadow-sm">Tailwind</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 text-cyan-800 dark:text-cyan-200 text-xs rounded-full font-semibold shadow-sm">Node.js</span>
                </div>
              </div>
            </div>

            {/* Web Project 2 - Daily Task */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Productivity</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web2}
                  alt="Daily Task Manager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Daily Task Manager</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Aplikasi manajemen tugas harian dengan fitur reminder dan tracking progress</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 text-xs rounded-full font-semibold shadow-sm">React</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-800 dark:text-indigo-200 text-xs rounded-full font-semibold shadow-sm">Redux</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 text-purple-800 dark:text-purple-200 text-xs rounded-full font-semibold shadow-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Web Project 3 - Food Web */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-orange-300 dark:hover:border-orange-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Food & Beverage</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web3}
                  alt="Food Website"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Food Delivery Website</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Platform food delivery dengan online ordering dan real-time tracking pengiriman</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 text-orange-800 dark:text-orange-200 text-xs rounded-full font-semibold shadow-sm">Next.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 text-red-800 dark:text-red-200 text-xs rounded-full font-semibold shadow-sm">Tailwind</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50 text-yellow-800 dark:text-yellow-200 text-xs rounded-full font-semibold shadow-sm">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Web Project 4 - Anime Streaming */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-violet-300 dark:hover:border-violet-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Entertainment</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web4}
                  alt="Anime Streaming"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">Anime Streaming Platform</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Platform streaming anime dengan koleksi lengkap, watchlist, dan episode tracking</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 text-violet-800 dark:text-violet-200 text-xs rounded-full font-semibold shadow-sm">React</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 text-purple-800 dark:text-purple-200 text-xs rounded-full font-semibold shadow-sm">Video.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 dark:from-fuchsia-900/50 dark:to-fuchsia-800/50 text-fuchsia-800 dark:text-fuchsia-200 text-xs rounded-full font-semibold shadow-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Web Project 5 - Save Prompt Website */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-cyan-300 dark:hover:border-cyan-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Utility</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web5}
                  alt="Prompt Management"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">Prompt Library Manager</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Platform untuk menyimpan, mengorganisir, dan berbagi AI prompts dengan komunitas</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 text-cyan-800 dark:text-cyan-200 text-xs rounded-full font-semibold shadow-sm">Next.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 text-teal-800 dark:text-teal-200 text-xs rounded-full font-semibold shadow-sm">Prisma</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 text-xs rounded-full font-semibold shadow-sm">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Web Project 6 - POS */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-emerald-300 dark:hover:border-emerald-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Business</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web6}
                  alt="POS System"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Point of Sale System</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Sistem POS lengkap dengan inventory management, sales reporting, dan payment integration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 text-emerald-800 dark:text-emerald-200 text-xs rounded-full font-semibold shadow-sm">Laravel</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 text-green-800 dark:text-green-200 text-xs rounded-full font-semibold shadow-sm">Vue.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 text-teal-800 dark:text-teal-200 text-xs rounded-full font-semibold shadow-sm">MySQL</span>
                </div>
              </div>
            </div>

            {/* Web Project 7 - Mining Web */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-amber-300 dark:hover:border-amber-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Industry</span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={web7}
                  alt="Mining Website"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Mining Management System</h5>
                <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">Sistem manajemen pertambangan dengan monitoring operasional, safety tracking, dan production analytics</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 text-amber-800 dark:text-amber-200 text-xs rounded-full font-semibold shadow-sm">React</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50 text-yellow-800 dark:text-yellow-200 text-xs rounded-full font-semibold shadow-sm">Node.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 text-orange-800 dark:text-orange-200 text-xs rounded-full font-semibold shadow-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}


