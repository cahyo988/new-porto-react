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
          <nav className="py-5 mb-12 flex justify-between bg-slate ">
            <h1 className="text-xl fraunces">cahyoDEV</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li>
                <a className="bg-gradient-to-b from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-5" href="">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-4xl py-2 text-teal-700 font-medium md:text-6xl">Cahyo Saputra</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer And Designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-300">
              Freelancer providing services for programming and design content needs. Join me down bellow and let's get cracking.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-14 py-3 text-gray-600">
            <a href="https://github.com/cahyo988"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/cahyo-saputra-a26411204/"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/saputracah_/"><FaSquareInstagram /></a>
            

          </div>
          <div className="relative bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden">
            <Image src={myProfile} layout="fill" objectFit="cover" alt="my-profile" />
          </div>
        </section>

        {/* Services */}
        <section>
          <div>
            <h3 className="text-3xl py-5 ">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              Since the beginning of my jurney as a freelance developer, I've done remote work for some <span className="text-teal-500">Customer</span> and colaborated with some <span className="text-teal-500">People</span>
            </p>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-slate-300">
              I Offer from a wide range of services, Including programming and design.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="basis-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
              <Image src={design} width={100} height={100} className="mx-auto" alt="design"/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 p-5">
                <div className="text-gray-800 py-1 dark:text-slate-300 flex gap-3 justify-center">
                  <span className="py-1 text-4xl"><FaFigma /></span>
                  <p className="py-2">Figma</p>
                </div>
                <div className="text-gray-800 py-1 dark:text-slate-300 flex gap-3 justify-center">
                  <span className="py-1 text-4xl"><SiCanva /></span>
                  <p className="py-2">Canva</p>
                </div>

              </div>
            </div>
            <div className="basis-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
              <Image src={code} width={100} height={100} className="mx-auto" alt="code" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Programming Language
              </h3>
              <p className="py-2">
                The programming language I use to code
              </p>
              <h4 className="py-4 text-teal-600">
                Programming Language i use
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><AiOutlineHtml5 /></span>
                  <p className="text-sm md:text-xs">HTML</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><FaCss3 /></span>
                  <p className="text- md:text-xs">CSS</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><IoLogoJavascript /></span>
                  <p className="text-sm md:text-xs">JS</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><RiTailwindCssFill /></span>
                  <p className="text-sm md:text-xs">Tailwind</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><FaPhp /></span>
                  <p className="text-sm md:text-xs">PHP</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><FaBootstrap /></span>
                  <p className="text-sm md:text-xs">Bootstrap</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><FaReact /></span>
                  <p className="text-sm md:text-xs">React</p>
                </div>
                <div className="text-gray-800 dark:text-slate-300 flex flex-col items-center">
                  <span className="text-4xl mb-2 md:text-3xl"><DiMongodb /></span>
                  <p className="text-sm md:text-xs">MongoDB</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
              <Image src={framework} width={100} height={100} className="mx-auto" alt="framework" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Programming Framework
              </h3>
              <p className="py-2">
                The framework I use to create projects
              </p>
              <h4 className="py-4 text-teal-600">Coding Framework I Use</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 p-5">
                <div className="text-gray-800 py-1 dark:text-slate-300 flex gap-3 justify-center">
                  <span className="py-1 text-4xl"><RiNextjsLine /></span>
                  <p className="py-2">Next.js</p>
                </div>
                <div className="text-gray-800 py-1 dark:text-slate-300 flex gap-3 justify-center">
                  <span className="py-1 text-4xl"><FaLaravel />
                  </span>
                  <p className="py-2">Laravel</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              With expertise in <span className="text-teal-500"> Programming</span>, I deliver innovative digital solutions that are structured and efficient. This portfolio showcases my dedication in turning concepts into robust implementations. I hope this portfolio inspires and showcases <span className="text-teal-500"> my journey</span>  and the digital works I have produced.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="web1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="web2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="web3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="web4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="web5"
              />
            </div>
          </div>


        </section>
      </main>
    </div>

  );
}
