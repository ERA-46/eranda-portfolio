"use client";

import { skills } from "@/data/skills";
import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

useEffect(() => {
const timeout = setTimeout(() => {
  setAnimate(true);
}, 100);

  return () => clearTimeout(timeout);
}, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-700">Skills</h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2 bg-black rounded-full transition-all duration-2000`}
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}