"use client"

import { motion } from "framer-motion"
import { FaReact, FaPython, FaNodeJs, FaAndroid, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { Code, Database, FileCode, Globe, Layout, Server, Smartphone, Sparkles, Github, AppWindowMac, SquareDashedBottom } from "lucide-react"

const skills = [
  {
    name: "React",
    icon: <FaReact className="h-8 w-8" />,
    color: "bg-blue-500/10 text-blue-500",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    name: "Python",
    icon: <FaPython className="h-8 w-8" />,
    color: "bg-black/10 dark:bg-white/10 text-foreground",
    hoverColor: "hover:bg-black/20 dark:hover:bg-white/20",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-8 w-8" />,
    color: "bg-blue-600/10 text-blue-600",
    hoverColor: "hover:bg-blue-600/20",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-8 w-8" />,
    color: "bg-cyan-500/10 text-cyan-500",
    hoverColor: "hover:bg-cyan-500/20",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-500",
    hoverColor: "hover:bg-green-500/20",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="h-8 w-8" />,
    color: "bg-yellow-500/10 text-yellow-500",
    hoverColor: "hover:bg-yellow-500/20",
  },
  {
    name: "Android Development",
    icon: <FaAndroid className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-500",
    hoverColor: "hover:bg-purple-500/20",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="h-8 w-8" />,
    color: "bg-red-500/10 text-red-500",
    hoverColor: "hover:bg-red-500/20",
  },
]


export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              The tools and technologies I use to bring projects to life
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center justify-center p-6 rounded-lg ${skill.color} ${skill.hoverColor} transition-all duration-300 hover:scale-105`}
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
            </motion.div>


          ))}
        </div>
      </div>
    </section>
  )
}

