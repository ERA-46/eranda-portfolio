"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <a href="#hero" className="font-bold text-lg text-gray-900">
          Eranda Jayawardena
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 transition-colors duration-200">About</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors duration-200">Experience</a>
          <a href="#education" className="hover:text-blue-500 transition-colors duration-200">Education</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a>
        </div>

        <button
          className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col space-y-4 text-sm font-medium text-gray-700">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">About</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Education</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default NavBar