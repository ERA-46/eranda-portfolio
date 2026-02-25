const NavBar = () => {
    return ( 
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0a0a0a] shadow-2xl">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <span className="font-bold text-lg">Eranda Jayawardena</span>

            <div className="space-x-8 text-sm font-medium">
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#education" className="hover:text-blue-500">Education</a>
                <a href="#skills" className="hover:text-blue-500">Skills</a>
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
                
            </div>
            </div>
        </nav>
     );
}

export default NavBar;