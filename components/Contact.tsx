"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-2">

        <h2 className="text-3xl font-bold mb-6 text-gray-600">Contact Me</h2>

        <p className="text-gray-600 mb-12 max-w-6xl">
          I&apos;m open to junior and entry-level developer roles. If you have something interesting in mind or just want to connect — my inbox is always open.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          <a
            href="mailto:erandairushan98@gmail.com"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#ff0505]/60 hover:text-white
                    transition-all duration-300 min-w-0"
          >
            <Mail className="text-gray-800 shrink-0" size={28} />
            <div className="min-w-0">
              <p className="font-semibold text-gray-600">Email</p>
              <p className="text-gray-500 text-sm truncate">erandairushan98@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+12368635178"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#05ff71]/60 hover:text-white
                    transition-all duration-300 min-w-0"
          >
            <Phone className="text-gray-800 shrink-0" size={28} />
            <div className="min-w-0">
              <p className="font-semibold text-gray-600">Phone</p>
              <p className="text-gray-500 text-sm truncate">+1 (236) 863-5178</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eranda-jayawardena/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#058fff]/60 hover:text-white
                    transition-all duration-300 min-w-0"
          >
            <Linkedin className="text-gray-800 shrink-0" size={28} />
            <div className="min-w-0">
              <p className="font-semibold text-gray-600">LinkedIn</p>
              <p className="text-gray-500 text-sm truncate">linkedin.com/in/eranda-jayawardena</p>
            </div>
          </a>

          <a
            href="https://github.com/ERA-46"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#7842f5]/60 hover:text-white
                    transition-all duration-300 min-w-0"
          >
            <Github className="text-gray-800 shrink-0" size={28} />
            <div className="min-w-0">
              <p className="font-semibold text-gray-600">GitHub</p>
              <p className="text-gray-500 text-sm truncate">github.com/ERA-46</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}