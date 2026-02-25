import Badge from "./Badge";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Eranda Jayawardena
        </h1>

        <p className="text-xl text-gray-400 mb-4">
          Software Developer
        </p>

        <div className="mt-6 flex gap-3 mb-6 flex-wrap">
          <Badge color="green">Java</Badge>
          <Badge color="green">JavaScript</Badge>
          <Badge color="green">SQL</Badge>
          <Badge color="purple">React</Badge>
          <Badge color="purple">Node.js</Badge>
          <Badge color="pink">Git</Badge>

        </div>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg
                      shadow-md
                      hover:shadow-lg
                      hover:scale-103
                      transition-all duration-500"
          >
            View Projects
          </a>
          <a
            href="/Eranda_Jayawardena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 rounded-lg
                      hover:bg-black hover:text-blue-500
                      transition-all duration-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
