"use client";

import { useState, useRef, useEffect, JSX } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiReact,
  SiExpo,
  SiGooglegemini,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="mr-1" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1" />,
  Firebase: <SiFirebase className="mr-1" />,
  Typescript: <SiTypescript className="mr-1" />,
  MongoDB: <SiMongodb className="mr-1" />,
  Mongoose: <SiMongoose className="mr-1" />,
  Prisma: <SiPrisma className="mr-1" />,
  "React Native": <SiReact className="mr-1" />,
  Expo: <SiExpo className="mr-1" />,
  "Gemini AI": <SiGooglegemini className="mr-1" />, // Temsili
  Nativewind: <SiTailwindcss className="mr-1" />, // Tailwind benzeri
};

const allTags = [
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "Gemini AI",
  "Typescript",
  "Prisma",
  "Mongoose",
  "MongoDB",
  "React Native",
  "Expo",
  "Nativewind",
];

const projects = [
  {
    id: 1,
    title: "Syntalkic.",
    description:
      "This project is a voice-based AI conversation platform built with Next.js and Firebase. Users can select specific topics and take on different roles to engage in immersive, real-time voice chats with an AI tailored to their chosen scenario.",
    image: "/syntalkicP.png",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Gemini AI", "Typescript"],
    liveUrl: "https://syntalkic.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Quest Store",
    description:
      "Quest Store is an online e-commerce platform designed for a seamless shopping experience. The platform ensures a smooth and interactive user experience, featuring authentication, cart management, and a dynamic product catalog.",
    image: "/questStoreP.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Typescript"],
    liveUrl: "https://quest-store.vercel.app",
    githubUrl: "https://github.com/enesarihan/quest-store",
  },
  {
    id: 3,
    title: "Property Quest",
    description:
      "Property Quest is a user-friendly platform that connects renters with property owners. Renters can browse, bookmark, and contact owners directly, while owners can list properties for short- or long-term rent. The platform supports various property types like apartments, studios, houses, and more.",
    image: "/propertyQuestP.png",
    tags: ["Next.js", "Mongoose", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://property-quest-psi.vercel.app",
    githubUrl: "https://github.com/enesarihan/PropertyQuest",
  },
  {
    id: 4,
    title: "MovieQuest",
    description:
      "MovieQuest is a React Native app that allows users to explore and discover movies. It features a modern UI, real-time movie data, and smooth navigation to browse trending, popular, and top-rated films.",
    image: "/placeholder-image.png",
    tags: ["React Native", "Expo", "Nativewind", "Typescript"],
    githubUrl: "https://github.com/enesarihan/MovieQuest",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
  const featuredProjectRef = useRef(null);
  const isFeaturedInView = useInView(featuredProjectRef, {
    once: true,
    amount: 0.3,
  });

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  const featuredProject = projects.find((project) => project.featured);

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    setIsTagMenuOpen(false);
  };

  // Close tag menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".tag-filter")) {
        setIsTagMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-num-5 text-white relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-num-1/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-num-1/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-num-1">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Some of the projects I&apos;ve developed. Each one features
            different technologies and solutions.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            ref={featuredProjectRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="text-num-1 w-5 h-5 fill-num-1" />
              <h3 className="text-xl font-semibold text-num-1">
                Featured Project
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="relative h-64 md:h-80 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src={
                    featuredProject.image ||
                    "/placeholder.svg?height=600&width=800"
                  }
                  alt={featuredProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {featuredProject.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="default"
                      className="bg-num-1 hover:bg-num-1/90"
                    >
                      <Link
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {featuredProject.githubUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-white/20 hover:bg-white/10"
                    >
                      <Link
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <SiGithub size={14} /> View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-white/80 mb-6 text-lg">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-num-1/20 hover:bg-num-1/30 text-white border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button asChild className="group bg-num-1 hover:bg-num-1/90">
                    <Link
                      href={
                        featuredProject.liveUrl ||
                        featuredProject.githubUrl ||
                        "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Explore Project
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <h3 className="text-xl font-semibold">All Projects</h3>
          <div className="relative tag-filter">
            <Button
              onClick={() => setIsTagMenuOpen(!isTagMenuOpen)}
              className="border-white/20 hover:bg-white/10"
            >
              {selectedTag || "Filter by Technology"}
            </Button>
            <AnimatePresence>
              {isTagMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-num-5 border rounded-lg shadow-xl z-50"
                >
                  <div className="p-2">
                    <Button
                      onClick={() => handleTagSelect(null)}
                      className={`w-full justify-start mb-1 bg-num-5 ${
                        !selectedTag ? "bg-num-1/20" : ""
                      }`}
                    >
                      All Technologies
                    </Button>
                    {allTags.map((tag) => (
                      <Button
                        key={tag}
                        onClick={() => handleTagSelect(tag)}
                        className={`w-full justify-start mb-1 bg-num-5 ${
                          selectedTag === tag ? "bg-num-1/20" : ""
                        }`}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="h-full"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full border-num-1/10 hover:border-num-1/30 transition-all duration-300 hover:shadow-lg hover:shadow-num-1/5 bg-white/5 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=300&width=500"
                      }
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        transform:
                          hoveredProject === project.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-num-1 text-white border-none">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`${
                            selectedTag === tag
                              ? "bg-num-1 text-white"
                              : "bg-white/10 hover:bg-white/20"
                          } transition-colors duration-300 cursor-pointer`}
                          onClick={() => handleTagSelect(tag)}
                        >
                          {techIcons[tag]} {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="default"
                          className="bg-num-1 hover:bg-num-1/90"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={16} /> Live
                          </Link>
                        </Button>
                      )}

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 hover:bg-white/10"
                        disabled={!project.githubUrl}
                      >
                        <Link
                          href={project.githubUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <SiGithub size={16} />{" "}
                          {project.githubUrl ? "GitHub" : "Private"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/70 text-lg mb-4">
              No projects found with the selected technology.
            </p>
            <Button
              onClick={() => setSelectedTag(null)}
              className="border-white/20 hover:bg-white/10"
            >
              Clear Filter
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="border-num-1/30 text-white hover:bg-num-1/10 hover:border-num-1/50 group"
          >
            <Link
              href="https://github.com/enesarihan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <SiGithub size={18} />
              View More on GitHub
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
