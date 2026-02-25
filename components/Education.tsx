import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-700">Education</h2>

        <div className="flex flex-col gap-12">
          {education.map((item, index) => (
            <div key={item.college} className="flex flex-col md:flex-row items-center md:items-start gap-8 text-gray-800">
              <div className="w-20 flex-shrink-0">
                <img
                  src={item.logo}
                  alt={item.college}
                  className="w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-gray-700 mb-2">{item.college} | {item.years}</p>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{item.description}</p>
              </div>
            </div>
            
          ))}
        </div>

      </div>
    </section>
  );
}
