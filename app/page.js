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
import DB_1 from "../portofolioDashboard/DB_1.png"
import DB_2 from "../portofolioDashboard/DB_2.png"
import DB_3 from "../portofolioDashboard/DB_3.png"
import DB_4 from "../portofolioDashboard/DB_4.png"

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
              Freelancer yang menyediakan layanan untuk kebutuhan programming dan design. Mari bergabung dan mari kita mulai bekerja sama.
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
        <section className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Layanan yang Saya Tawarkan</h3>
            <p className="text-lg py-2 leading-8 text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Sejak awal perjalanan saya sebagai freelance developer, saya telah bekerja remote untuk beberapa <span className="text-teal-500 font-semibold">Klien</span> dan berkolaborasi dengan berbagai <span className="text-teal-500 font-semibold">Tim</span>
            </p>
            <p className="text-lg py-2 leading-8 text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Saya menawarkan berbagai macam layanan, termasuk programming dan design.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Design Services */}
            <div className="bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src={design} width={50} height={50} className="mx-auto" alt="design"/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Desain yang Menarik
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6">
                Membuat desain yang elegan dan sesuai dengan kebutuhan Anda
              </p>
              <h4 className="text-teal-600 font-semibold mb-4">Tools Desain yang Saya Gunakan</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-pink-500"><FaFigma /></span>
                  <p className="text-gray-700 dark:text-slate-300">Figma</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-blue-500"><SiCanva /></span>
                  <p className="text-gray-700 dark:text-slate-300">Canva</p>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src={code} width={50} height={50} className="mx-auto" alt="code" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Bahasa Pemrograman
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6">
                Bahasa pemrograman yang saya gunakan untuk coding
              </p>
              <h4 className="text-teal-600 font-semibold mb-4">Bahasa Pemrograman yang Saya Kuasai</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-orange-500"><AiOutlineHtml5 /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">HTML</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-blue-500"><FaCss3 /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">CSS</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-yellow-500"><IoLogoJavascript /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">JS</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-cyan-500"><RiTailwindCssFill /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">Tailwind</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-purple-500"><FaPhp /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">PHP</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-indigo-500"><FaBootstrap /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-blue-400"><FaReact /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">React</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <span className="text-2xl mb-1 text-green-500"><DiMongodb /></span>
                  <p className="text-xs text-gray-700 dark:text-slate-300">MongoDB</p>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-gray-800 text-center shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src={framework} width={50} height={50} className="mx-auto" alt="framework" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Framework Pemrograman
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6">
                Framework yang saya gunakan untuk membuat proyek
              </p>
              <h4 className="text-teal-600 font-semibold mb-4">Framework yang Saya Gunakan</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-gray-800 dark:text-white"><RiNextjsLine /></span>
                  <p className="text-gray-700 dark:text-slate-300">Next.js</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-red-500"><FaLaravel /></span>
                  <p className="text-gray-700 dark:text-slate-300">Laravel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Portofolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Dengan keahlian dalam <span className="text-teal-500 font-semibold">Programming</span>, saya memberikan solusi digital yang inovatif, terstruktur dan efisien. Portofolio ini menunjukkan dedikasi saya dalam mengubah konsep menjadi implementasi yang robust. Saya berharap portofolio ini dapat menginspirasi dan menunjukkan <span className="text-teal-500 font-semibold">perjalanan saya</span> serta karya digital yang telah saya hasilkan.
            </p>
          </div>

          {/* MineTrack Dashboard Project */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">MineTrack Dashboard</h4>
                <p className="text-lg text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  <span className="text-teal-600 font-semibold">MineTrack Dashboard</span> adalah sistem manajemen pertambangan yang komprehensif yang dirancang untuk membantu perusahaan pertambangan mengelola operasi mereka secara efisien. Dashboard ini menyediakan antarmuka yang user-friendly untuk mengelola berbagai aspek operasi pertambangan.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">Laravel</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">PHP</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">Bootstrap</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    className="rounded-lg object-cover w-full h-64"
                    src={DB_1}
                    alt="MineTrack Dashboard - Overview"
                  />
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Dashboard Overview</h5>
                    <p className="text-sm text-gray-600 dark:text-slate-300">Tampilan utama dashboard dengan statistik dan grafik</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    className="rounded-lg object-cover w-full h-64"
                    src={DB_2}
                    alt="MineTrack Dashboard - Analytics"
                  />
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Analytics & Reports</h5>
                    <p className="text-sm text-gray-600 dark:text-slate-300">Laporan dan analisis data pertambangan</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    className="rounded-lg object-cover w-full h-64"
                    src={DB_3}
                    alt="MineTrack Dashboard - Management"
                  />
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Management Panel</h5>
                    <p className="text-sm text-gray-600 dark:text-slate-300">Panel manajemen operasi pertambangan</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    className="rounded-lg object-cover w-full h-64"
                    src={DB_4}
                    alt="MineTrack Dashboard - Settings"
                  />
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Settings & Configuration</h5>
                    <p className="text-sm text-gray-600 dark:text-slate-300">Pengaturan dan konfigurasi sistem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Proyek Lainnya</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="rounded-lg object-cover w-full h-48 mb-4"
                  src={web1}
                  alt="Web Project 1"
                />
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Web Development Project</h5>
                <p className="text-sm text-gray-600 dark:text-slate-300">Proyek pengembangan web dengan teknologi modern</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="rounded-lg object-cover w-full h-48 mb-4"
                  src={web2}
                  alt="Web Project 2"
                />
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">E-commerce Platform</h5>
                <p className="text-sm text-gray-600 dark:text-slate-300">Platform e-commerce dengan fitur lengkap</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="rounded-lg object-cover w-full h-48 mb-4"
                  src={web3}
                  alt="Web Project 3"
                />
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Corporate Website</h5>
                <p className="text-sm text-gray-600 dark:text-slate-300">Website perusahaan dengan desain profesional</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="rounded-lg object-cover w-full h-48 mb-4"
                  src={web4}
                  alt="Web Project 4"
                />
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Portfolio Website</h5>
                <p className="text-sm text-gray-600 dark:text-slate-300">Website portofolio dengan animasi interaktif</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="rounded-lg object-cover w-full h-48 mb-4"
                  src={web5}
                  alt="Web Project 5"
                />
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Mobile App Interface</h5>
                <p className="text-sm text-gray-600 dark:text-slate-300">Interface aplikasi mobile yang responsif</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}


