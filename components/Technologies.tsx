"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Layout,
  Palette,
  Server,
  Smartphone,
  CheckCircle2,
  CircleSlash,
  CircleDot,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpo,
  SiGit,
  SiGithub,
  SiPrisma,
  SiMongoose,
  SiZod,
  SiShadcnui,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Skill levels: "Expert", "Advanced", "Intermediate", "Learning"
const technologies = [
  {
    name: "Frontend",
    icon: <Layout className="w-10 h-10 text-num-1" />,
    description:
      "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    items: [
      { name: "React", icon: <SiReact />, level: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Expert" },
      { name: "JavaScript", icon: <SiJavascript />, level: "Expert", years: 5 },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: "Advanced",
        years: 3,
      },
      { name: "HTML5", icon: <SiHtml5 />, level: "Expert" },
      { name: "CSS3", icon: <SiCss3 />, level: "Expert" },
    ],
  },
  {
    name: "Styling",
    icon: <Palette className="w-10 h-10 text-num-1" />,
    description:
      "Creating beautiful and responsive designs with modern CSS frameworks and animation libraries.",
    items: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: "Expert",
      },
      { name: "Shadcn UI", icon: <SiShadcnui />, level: "Expert" },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        level: "Learning",
      },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-10 h-10 text-num-1" />,
    description:
      "Developing robust server-side applications and APIs to power web applications.",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, level: "Expert" },
      { name: "Next.js API", icon: <SiNextdotjs />, level: "Advanced" },
      { name: "Express", icon: <SiExpress />, level: "Advanced" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-10 h-10 text-num-1" />,
    description:
      "Working with various database systems to store and manage application data efficiently.",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, level: "Advanced" },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: "Intermediate",
        years: 2,
      },
      { name: "Firebase", icon: <SiFirebase />, level: "Advanced" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-10 h-10 text-num-1" />,
    description:
      "Building cross-platform mobile applications with React Native and Expo.",
    items: [
      { name: "React Native", icon: <SiReact />, level: "Advanced" },
      { name: "Expo", icon: <SiExpo />, level: "Advanced" },
    ],
  },
  {
    name: "Tools",
    icon: <Code className="w-10 h-10 text-num-1" />,
    description:
      "Utilizing various development tools and utilities to streamline the development process.",
    items: [
      { name: "Git", icon: <SiGit />, level: "Expert" },
      { name: "GitHub", icon: <SiGithub />, level: "Expert" },
      { name: "Prisma", icon: <SiPrisma />, level: "Advanced" },
      { name: "Mongoose", icon: <SiMongoose />, level: "Advanced" },
      { name: "Zod", icon: <SiZod />, level: "Expert" },
    ],
  },
];

// Get skill level icon
const getSkillLevelIcon = (level: string) => {
  switch (level) {
    case "Expert":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    case "Advanced":
      return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
    case "Intermediate":
      return <CircleDot className="w-4 h-4 text-yellow-500" />;
    case "Learning":
      return <CircleSlash className="w-4 h-4 text-gray-500" />;
    default:
      return null;
  }
};

// Get skill level color
const getSkillLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Advanced":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "Learning":
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    default:
      return "";
  }
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  // Filter technologies based on active tab
  const filteredTechnologies =
    activeTab === "all"
      ? technologies
      : technologies.filter((tech) => tech.name === activeTab);

  // Count total technologies
  const totalTechnologies = technologies.reduce(
    (acc, tech) => acc + tech.items.length,
    0
  );

  // Get all unique skill levels
  const skillLevels = ["Expert", "Advanced", "Intermediate", "Learning"];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-num-1/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-num-1/5 rounded-full blur-3xl"></div>

        {/* Tech pattern background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-num-1">Technologies</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I bring your projects to life with modern web development tools and
            technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 justify-center items-center"
        >
          <Card className="border-num-1/10">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <p className="text-4xl font-bold text-num-1">
                {technologies.length}
              </p>
              <p className="text-sm text-foreground/70">Categories</p>
            </CardContent>
          </Card>
          <Card className="border-num-1/10">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <p className="text-4xl font-bold text-num-1">
                {totalTechnologies}
              </p>
              <p className="text-sm text-foreground/70">Technologies</p>
            </CardContent>
          </Card>
          <Card className="border-num-1/10">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <p className="text-4xl font-bold text-num-1">10+</p>
              <p className="text-sm text-foreground/70">Projects Completed</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill level legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {skillLevels.map((level) => (
            <div key={level} className="flex items-center gap-1.5">
              {getSkillLevelIcon(level)}
              <span className="text-sm text-foreground/70">{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full flex flex-wrap justify-center h-auto bg-transparent p-0 mb-8">
              <TabsTrigger
                value="all"
                className={`px-4 py-2 rounded-full m-1 data-[state=active]:bg-num-1 data-[state=active]:text-white transition-all`}
              >
                All
              </TabsTrigger>
              {technologies.map((tech) => (
                <TabsTrigger
                  key={tech.name}
                  value={tech.name}
                  className={`px-4 py-2 rounded-full m-1 data-[state=active]:bg-num-1 data-[state=active]:text-white transition-all`}
                >
                  <span className="flex items-center gap-2">
                    {tech.icon && <span className="w-4 h-4">{tech.icon}</span>}
                    {tech.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredTechnologies.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants} layout>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-num-1/10 hover:border-num-1/30 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-num-1/10 group-hover:bg-num-1/20 transition-colors duration-300">
                              {tech.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">
                                {tech.name}
                              </h3>
                              <p className="text-sm text-foreground/60">
                                {tech.items.length} technologies
                              </p>
                            </div>
                          </div>

                          <p className="text-foreground/70 text-sm mb-4">
                            {tech.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mt-auto">
                            {tech.items.map((item) => (
                              <motion.div
                                key={`${tech.name}-${item.name}`}
                                className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-num-1/20 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                                whileHover={{ y: -5 }}
                              >
                                <motion.div
                                  variants={iconVariants}
                                  initial="hidden"
                                  animate="visible"
                                  whileHover="hover"
                                  className="text-2xl mb-2 text-num-1"
                                >
                                  {item.icon}
                                </motion.div>
                                <p className="text-sm font-medium text-center">
                                  {item.name}
                                </p>
                                <div className="mt-1 flex items-center gap-1">
                                  <Badge
                                    variant="outline"
                                    className={`text-xs py-0 px-1.5 ${getSkillLevelColor(
                                      item.level
                                    )}`}
                                  >
                                    {item.level}
                                  </Badge>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
