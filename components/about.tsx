"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, User } from "lucide-react"
import Image from "next/image"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "RC Patel Institute of Technology",
      period: "2024 - 2027",
      description:
        "Pursuing my degree while building strong skills in application development and modern web technologies.",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Godavari College of Engineering and Polytechnic",
      period: "2021 - 2024",
      description:
        "Focused on application development, web technologies, and core programming through practical, project-based learning.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">Get to know me and my background</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/ph.jpg?height=600&width=600"
                  alt="Aditya"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-3/5"
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">About</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <p>
                  Hello! I'm Aditya, a passionate application developer and B.Tech Computer Engineering student with a strong interest in building modern web applications. I enjoy creating responsive, and user-friendly digital experiences.
                </p>
                <p>
                  My journey in web development began in college, where I started experimenting with HTML, CSS, and JavaScript. Since then, I’ve been diving deep into frameworks like React and Node.js to build personal projects and collaborate on team-based applications.
                </p>
                <p>
                  I also have a strong foundation in Android development. I have built several Android applications using Java focusing on performance and providing seamless user experiences. I enjoy working on mobile apps that offer real-world value and contribute to simplifying people's lives.
                </p>
                <p>
                  Outside of coding, I love exploring new technologies and sometimes heading outdoors for a refreshing hike. I'm always excited to learn, improve, and contribute to real-world projects that make a difference.
                </p>

              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-4">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
