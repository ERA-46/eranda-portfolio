"use client";

import { Mail, Phone, Linkedin} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold mb-6 text-gray-600">Contact Me</h2>

        <p className="text-gray-600 mb-12 max-w-6xl">
          I’m currently open to opportunities and collaborations.
          Feel free to reach out. I’d be happy to connect.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:erandairushan98@gmail.com"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm 
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#ff0505]/60 hover:text-white
                    transition-all duration-300"
          >
            <Mail className="text-gray-800" size={28} />
            <div>
              <p className="font-semibold text-gray-600">Email</p>
              <p className="text-gray-500 text-sm">erandairushan98@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+12368635178"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm 
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#05ff71]/60 hover:text-white
                    transition-all duration-300"
          >
            <Phone className="text-gray-800" size={28} />
            <div>
              <p className="font-semibold text-gray-600">Phone</p>
              <p className="text-gray-500 text-sm">+1 (236) 863-5178</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/eranda-jayawardena/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm 
                    hover:shadow-md hover:scale-[1.02]
                    hover:bg-[#058fff]/60 hover:text-white
                    transition-all duration-300"
          >
            <Linkedin className="text-gray-800" size={28} />
            <div>
              <p className="font-semibold text-gray-600">LinkedIn</p>
              <p className="text-gray-500 text-sm">https://www.linkedin.com/in/eranda-jayawardena/</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}