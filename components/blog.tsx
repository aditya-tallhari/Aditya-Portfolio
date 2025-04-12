"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, User } from "lucide-react"

const platforms = [
  {
    id: 1,
    name: "CodeChef",
    username: "basic_spark_55",
    rank: "1★",
    link: "https://www.codechef.com/users/basic_spark_55",
    image: "/codechef.png", // Replace with actual image path or use a placeholder
    description: "Solved 1000+ problems, participated in contests, and achieved 1-star rating.",
  },
  {
    id: 2,
    name: "HackerRank",
    username: "Aditya Tallare",
    rank: "Bronze Badge in Problem Solving",
    link: "https://www.hackerrank.com/profile/adityatallare797",
    image: "/hackerrank.png",
    description: "Earned gold badges in Problem Solving and Java. 50+ problems solved.",
  },
  {
    id: 3,
    name: "LeetCode",
    username: "aditya_tallhari_",
    rank: "",
    link: "https://leetcode.com/u/aditya_tallhari_/",
    image: "/leetcode.png",
    description: " ",
  },
]

export default function CompetitiveProgramming() {
  return (
    <section id="blog" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Competitive Programming</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Platforms I actively solve problems and participate in contests
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/9] bg-white flex items-center justify-center">
                  <Image
                    src={platform.image || "/placeholder.svg"}
                    alt={platform.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <User className="h-4 w-4" />
                    <span>@{platform.username}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Trophy className="h-4 w-4" />
                    <span>{platform.rank}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
