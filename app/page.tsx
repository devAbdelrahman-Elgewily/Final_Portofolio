'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="space-y-8">
      <motion.section 
        className="text-center py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-8">Full-Stack Developer & Designer</p>
        <Button asChild>
          <Link href="/projects">View My Work</Link>
        </Button>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <Card className="transform transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Technical expertise and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>UI/UX Design</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="transform transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Professional journey</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Senior Developer at Tech Co</li>
                <li>Lead Developer at StartUp Inc</li>
                <li>Freelance Web Developer</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="transform transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>BS in Computer Science</li>
                <li>Web Development Certification</li>
                <li>UI/UX Design Course</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}