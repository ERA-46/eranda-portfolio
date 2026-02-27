"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0a0a0a] shadow-2xl text-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <span className="font-bold text-lg">Eranda Jayawardena</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#education" className="hover:text-blue-400">Education</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
        } bg-[#0a0a0a] px-4 flex flex-col space-y-4 text-sm font-medium`}
        >
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default NavBar