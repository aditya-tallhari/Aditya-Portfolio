"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Eco-Connect",
    description:
      "EcoConnect is a sustainability-focused web app that helps users calculate their carbon footprint, get real-time eco-tips, track weather, and connect with a green-minded community.",
    image: "/eco.png?height=400&width=600",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase", "OpenWeatherMap API", "Geolocation API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditya-tallare/Ecoconnect",
  },
  {
    id: 2,
    title: "Event Management App",
    description: "A productivity app for managing College Events and team collaboration with real-time updates.",
    image: "/event.jpg?height=200&width=600",
    technologies: ["Java", "XML", "Firebase", "Android Studio"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditya-tallare/IdeaEvent",
  },
  {
    id: 3,
    title: "AI-Powered Sign Language Translator",
    description: "Real-time translator using AI and Computer Vision to convert sign language into text and speech.",
    image: "/hand.png?height=400&width=600",
    technologies: ["TensorFlow", "OpenCV", "MediaPipe", "Google TTS", "Google Teachable"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditya-tallare/AI-Powered-Sign-Language-Translator",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    image: "/port.jpeg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  // Add more if needed...
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 md:py-28 w-full bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work and personal projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <CardContent className="flex-1 p-4">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <Globe className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-10">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "More Projects"}
          </Button>
        </div>
      </div>
    </section>
  )
}
