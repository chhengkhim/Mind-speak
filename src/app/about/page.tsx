"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import image1 from "@/assets/image1.jpg"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Code,
  Database,
  Palette,
  Users2,
  Star,
  Zap,
  Award,
  Briefcase,
  ExternalLink,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Custom scroll animation component
const ScrollAnimation: React.FC<{
  children: React.ReactNode
  delay?: number
  direction?: string
  threshold?: number
}> = ({ children, delay = 0, direction = "up", threshold = 0.1 }) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={getDirectionVariants()}
    >
      {children}
    </motion.div>
  )
}

// Custom 3D tilt card component
const TiltCard: React.FC<{
  className?: string
  intensity?: number
  children?: React.ReactNode
}> = ({ children, className = "", intensity = 10 }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  interface MouseEventWithTarget extends React.MouseEvent<HTMLDivElement> {
    currentTarget: EventTarget & HTMLDivElement
  }

  const handleMouseMove = (e: MouseEventWithTarget): void => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setPosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setPosition({ x: 0, y: 0 })
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        transform: isHovered
          ? `rotateY(${position.x * intensity}deg) rotateX(${-position.y * intensity}deg)`
          : "rotateY(0deg) rotateX(0deg)",
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 30,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Add these custom CSS classes for 3D effects
  useEffect(() => {
    // Add perspective CSS
    const style = document.createElement("style")
    style.innerHTML = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  .team-card-gradient {
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
  }
  .team-card-shadow {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  .team-card-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%);
    z-index: 1;
  }
  .role-badge {
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    transform: translateY(-10px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .team-card:hover .role-badge {
    transform: translateY(0);
    opacity: 1;
  }
  .role-badge.backend {
    background: linear-gradient(90deg, #10b981 0%, #059669 100%);
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
  }
  .role-badge.design {
    background: linear-gradient(90deg, #ec4899 0%, #d946ef 100%);
    box-shadow: 0 2px 10px rgba(236, 72, 153, 0.3);
  }
  .role-badge.community {
    background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
    box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
  }
  .expertise-tag {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    display: inline-flex;
    align-items: center;
    margin: 0.25rem;
  }
  .expertise-tag:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
  }
  .social-icon-container {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 10;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .team-card:hover .social-icon-container {
    transform: translateY(0);
    opacity: 1;
  }
  .social-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    color: white;
  }
  .social-icon:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px) scale(1.1);
  }
  .team-card {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  .team-card-image {
    position: relative;
    overflow: hidden;
  }
  .team-card-image img {
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .team-card:hover .team-card-image img {
    transform: scale(1.1);
  }
  .achievements-badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 10;
  }
  .team-card:hover .achievements-badge {
    transform: translateY(0);
    opacity: 1;
  }
  .achievements-tooltip {
    position: absolute;
    bottom: 4rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    color: white;
    width: calc(100% - 3rem);
    max-width: 300px;
    transform: translateY(10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 20;
    pointer-events: none;
  }
  .achievements-badge:hover + .achievements-tooltip {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  .achievements-tooltip::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 20px;
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.8);
    transform: rotate(45deg);
  }
  .dark .team-card {
    background: #1f2937;
  }
  .dark .expertise-tag {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
  }
  .dark .expertise-tag:hover {
    background: rgba(59, 130, 246, 0.3);
  }
  
  /* Background animation keyframes */
  @keyframes slow-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes reverse-slow-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-delay {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-delay-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }
  
  /* Animation classes */
  .animate-slow-spin {
    animation: slow-spin 30s linear infinite;
  }
  
  .animate-reverse-slow-spin {
    animation: reverse-slow-spin 40s linear infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delay {
    animation: float-delay 8s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
  }
  
  .animate-float-delay-slow {
    animation: float-delay-slow 12s ease-in-out infinite;
  }
  
  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  
  .dark .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Team members data
  const teamMembers = [
    {
      name: "Pisethsambo Phok",
      role: "Lead Frontend Engineer",
      roleType: "frontend",
      roleIcon: <Code className="h-4 w-4 mr-1" />,
      bio: "Passionate about creating intuitive user experiences and leading the development of MindSpeak's frontend architecture with React and Next.js.",
      image: image1,
      socialLinks: [
        {
          icon: <Github className="h-5 w-5 text-white" />,
          url: "https://github.com",
          label: "GitHub",
        },
        {
          icon: <Linkedin className="h-5 w-5 text-white" />,
          url: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <Facebook className="h-5 w-5 text-white" />,
          url: "https://facebook.com",
          label: "Facebook",
        },
        {
          icon: <Mail className="h-5 w-5 text-white" />,
          url: "mailto:kimhak@example.com",
          label: "Email",
        },
      ],
      expertise: [
        { name: "React", icon: <Code className="h-3 w-3 mr-1" /> },
        { name: "Next.js", icon: <Zap className="h-3 w-3 mr-1" /> },
        { name: "UI/UX", icon: <Palette className="h-3 w-3 mr-1" /> },
        { name: "Team Leadership", icon: <Users2 className="h-3 w-3 mr-1" /> },
      ],
      achievements: "Led the development of MindSpeak's responsive interface and user authentication system.",
    },
    {
      name: "Pisethsambo Phok",
      role: "Senior Backend Developer",
      roleType: "backend",
      roleIcon: <Database className="h-4 w-4 mr-1" />,
      bio: "Specializes in server-side architecture and database management, ensuring MindSpeak's performance, security, and scalability.",
      image: image1,
      socialLinks: [
        {
          icon: <Github className="h-5 w-5 text-white" />,
          url: "https://github.com",
          label: "GitHub",
        },
        {
          icon: <Linkedin className="h-5 w-5 text-white" />,
          url: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <Instagram className="h-5 w-5 text-white" />,
          url: "https://instagram.com",
          label: "Instagram",
        },
        {
          icon: <Mail className="h-5 w-5 text-white" />,
          url: "mailto:kimheng@example.com",
          label: "Email",
        },
      ],
      expertise: [
        { name: "Node.js", icon: <Code className="h-3 w-3 mr-1" /> },
        {
          name: "Database Design",
          icon: <Database className="h-3 w-3 mr-1" />,
        },
        { name: "API Development", icon: <Zap className="h-3 w-3 mr-1" /> },
        {
          name: "System Architecture",
          icon: <Briefcase className="h-3 w-3 mr-1" />,
        },
      ],
      achievements: "Architected MindSpeak's secure data storage system and real-time messaging infrastructure.",
    },
    {
      name: "Pisethsambo Phok",
      role: "UI/UX Design Lead",
      roleType: "design",
      roleIcon: <Palette className="h-4 w-4 mr-1" />,
      bio: "Creates the visual identity and user experience of MindSpeak, focusing on accessibility, emotional design, and user research.",
      image: image1,
      socialLinks: [
        {
          icon: <Globe className="h-5 w-5 text-white" />,
          url: "https://portfolio.com",
          label: "Portfolio",
        },
        {
          icon: <Instagram className="h-5 w-5 text-white" />,
          url: "https://instagram.com",
          label: "Instagram",
        },
        {
          icon: <Twitter className="h-5 w-5 text-white" />,
          url: "https://twitter.com",
          label: "Twitter",
        },
        {
          icon: <Mail className="h-5 w-5 text-white" />,
          url: "mailto:kimhour@example.com",
          label: "Email",
        },
      ],
      expertise: [
        { name: "Figma", icon: <Palette className="h-3 w-3 mr-1" /> },
        { name: "User Research", icon: <Users2 className="h-3 w-3 mr-1" /> },
        { name: "Accessibility", icon: <Star className="h-3 w-3 mr-1" /> },
        { name: "Motion Design", icon: <Zap className="h-3 w-3 mr-1" /> },
      ],
      achievements: "Designed MindSpeak's award-winning interface and established our comprehensive design system.",
    },
    {
      name: "Pisethsambo Phok",
      role: "Community & Content Manager",
      roleType: "community",
      roleIcon: <Users2 className="h-4 w-4 mr-1" />,
      bio: "Oversees content strategy and community engagement, ensuring MindSpeak remains a supportive and informative space for all users.",
      image: image1,
      socialLinks: [
        {
          icon: <Linkedin className="h-5 w-5 text-white" />,
          url: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <Facebook className="h-5 w-5 text-white" />,
          url: "https://facebook.com",
          label: "Facebook",
        },
        {
          icon: <MessageCircle className="h-5 w-5 text-white" />,
          url: "https://telegram.org",
          label: "Telegram",
        },
        {
          icon: <Mail className="h-5 w-5 text-white" />,
          url: "mailto:kimhong@example.com",
          label: "Email",
        },
      ],
      expertise: [
        { name: "Content Strategy", icon: <Star className="h-3 w-3 mr-1" /> },
        {
          name: "Community Building",
          icon: <Users2 className="h-3 w-3 mr-1" />,
        },
        { name: "Social Media", icon: <Globe className="h-3 w-3 mr-1" /> },
        { name: "Event Management", icon: <Award className="h-3 w-3 mr-1" /> },
      ],
      achievements: "Built MindSpeak's community from the ground up, now reaching over 5,000 active members.",
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

          {/* Hero Section */}
          <section className="relative py-20 md:py-28 lg:py-36">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <ScrollAnimation>
                  <motion.div
                    className="inline-block mb-6 p-2 px-4 rounded-full bg-blue-500 text-white border border-blue-400/20 shadow-lg shadow-blue-500/20"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-sm font-medium flex items-center gap-1.5">
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                          times: [0, 0.2, 0.8, 1],
                        }}
                      >
                        <Users className="h-3.5 w-3.5" />
                      </motion.div>
                      Our Team
                    </span>
                  </motion.div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.1}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-blue-500 leading-tight flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                    The Minds Behind
                    <span className="relative flex items-center gap-1 sm:gap-2 text-red-500">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 fill-red-500" />
                      </motion.div>
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">MindSpeak</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 to-red-500/20 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </span>
                  </h1>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-[800px] mx-auto mb-8 leading-relaxed"
                    variants={slideUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    We are a team of passionate students from Paragon International University dedicated to creating a
                    safe space for mental health support and community connection.
                  </motion.p>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollAnimation direction="left">
                  <div className="space-y-6">
                    <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      <span className="text-sm text-blue-500 font-medium flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5 text-red-600" />
                        MindSpeak
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Our Mission
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      MindSpeak was born from our personal experiences with mental health challenges as university
                      students. We recognized the need for a platform where students could express themselves freely,
                      find support, and access resources without judgment. Our mission is to destigmatize mental health
                      discussions among Cambodian youth and create a supportive community where everyone feels heard,
                      understood, and empowered.
                    </p>
                    <ul className="space-y-3">
                      {["Compassion", "Safety", "Empowerment", "Inclusivity"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="rounded-full p-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500 mt-0.5">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300"
                    >
                      <Link href="/resources">Explore Resources</Link>
                    </Button>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right">
                  <motion.div
                    className="space-y-6"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div
                      className="inline-block p-2 px-4 rounded-full bg-blue-500/10 text-blue-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="text-sm font-medium flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        Our Values
                      </span>
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">What We Stand For</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      At the core of MindSpeak are values that guide everything we do:
                    </p>

                    <motion.ul
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {[
                        {
                          title: "Compassion",
                          description: "We approach every interaction with empathy and understanding.",
                        },
                        {
                          title: "Safety",
                          description: "We create secure spaces where vulnerability is respected and protected.",
                        },
                        {
                          title: "Inclusivity",
                          description: "We welcome all students regardless of background or experience.",
                        },
                        {
                          title: "Empowerment",
                          description:
                            "We provide tools and resources that help students take control of their mental wellbeing.",
                        },
                      ].map((value, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-4 items-start"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        >
                          <motion.div
                            className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <span className="text-blue-500 font-bold">{i + 1}</span>
                          </motion.div>
                          <div>
                            <h3 className="font-medium text-lg text-gray-900 dark:text-white">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Team Members Section */}
          <section className="relative py-20">
            <div className="container px-4 mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <motion.div
                    className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Meet The Team
                  </motion.div>

                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                    Our Talented Team
                  </h2>

                  <p className="mx-auto text-xl text-gray-600 max-w-2xl dark:text-gray-400">
                    The dedicated individuals who bring MindSpeak to life
                  </p>

                  <motion.div
                    className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, index) => {
                    const colors = [
                      {
                        accent: "from-blue-500 to-blue-600",
                        text: "text-blue-600",
                        darkText: "dark:text-blue-400",
                        light: "bg-blue-50 dark:bg-blue-900/20",
                      },
                      {
                        accent: "from-emerald-500 to-emerald-600",
                        text: "text-emerald-600",
                        darkText: "dark:text-emerald-400",
                        light: "bg-emerald-50 dark:bg-emerald-900/20",
                      },
                      {
                        accent: "from-amber-500 to-amber-600",
                        text: "text-amber-600",
                        darkText: "dark:text-amber-400",
                        light: "bg-amber-50 dark:bg-amber-900/20",
                      },
                      {
                        accent: "from-rose-500 to-rose-600",
                        text: "text-rose-600",
                        darkText: "dark:text-rose-400",
                        light: "bg-rose-50 dark:bg-rose-900/20",
                      },
                    ]
                    const colorSet = colors[index % colors.length]

                    return (
                      <ScrollAnimation key={index} delay={index * 0.1}>
                        <TiltCard className="team-card h-full" intensity={5}>
                          <div className="team-card-image aspect-square relative">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              width={300}
                              height={300}
                              priority
                              alt={member.name}
                              className="object-cover w-full h-full"
                            />
                            <div className={`role-badge ${member.roleType}`}>
                              <span className="flex items-center">
                                {member.roleIcon}
                                {member.role.split(" ")[0]}
                              </span>
                            </div>
                            <div className="social-icon-container">
                              {member.socialLinks.map((link, i) => (
                                <motion.a
                                  key={i}
                                  href={link.url}
                                  className="social-icon"
                                  aria-label={link.label}
                                  whileHover={{
                                    scale: 1.2,
                                    rotate: 5,
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  }}
                                >
                                  {link.icon}
                                </motion.a>
                              ))}
                            </div>
                            <div className="achievements-badge">
                              <Award className="h-4 w-4" />
                              <span>Achievements</span>
                            </div>
                            <div className="achievements-tooltip">{member.achievements}</div>
                          </div>
                          <div className="p-6 relative">
                            {/* Gradient accent line */}
                            <div
                              className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${colorSet.accent}`}
                            ></div>

                            <h3 className={`mb-1 text-xl font-bold text-gray-900 dark:text-white`}>{member.name}</h3>

                            <div className={`mb-4 text-sm font-medium ${colorSet.text} ${colorSet.darkText}`}>
                              {member.role}
                            </div>

                            <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {member.expertise.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  className="expertise-tag"
                                  whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  }}
                                >
                                  {skill.icon}
                                  {skill.name}
                                </motion.span>
                              ))}
                            </div>

                            {/* Hover highlight */}
                            <div
                              className={`absolute bottom-0 left-0 h-1 w-0 ${colorSet.light} group-hover:w-full transition-all duration-300`}
                            />
                          </div>
                        </TiltCard>
                      </ScrollAnimation>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <ScrollAnimation>
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-500/20" />
                  <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

                  <div className="relative p-8 md:p-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                      Want to Join Our Mission?{" "}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[800px] mx-auto mb-10">
                      We are always looking for passionate volunteers and collaborators who want to make a difference in
                      student mental health.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 group"
                      >
                        <Link href="/join" className="flex items-center gap-2">
                          Contact Us
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              ease: "easeInOut",
                              repeatDelay: 2,
                            }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-blue-500/20 hover:border-blue-500/50 rounded-full px-8 transition-all duration-300 text-blue-600 hover:text-blue-500 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/30"
                      >
                        <Link href="/telegram" className="flex items-center gap-2">
                          Join Our Team
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

