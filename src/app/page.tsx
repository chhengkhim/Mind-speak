"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Shield,
  Users,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      {/* Background Elements - These will be visible throughout the page */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl opacity-60 animate-slow-spin" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-primary/10 blur-3xl opacity-50 animate-reverse-slow-spin" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]" />

        {/* Floating shapes */}
        <div className="absolute top-20 right-[10%] w-24 h-24 rounded-xl bg-primary/10 blur-xl animate-float opacity-70" />
        <div className="absolute top-[40%] left-[5%] w-16 h-16 rounded-full bg-blue-400/10 blur-xl animate-float-delay opacity-70" />
        <div className="absolute bottom-[20%] right-[15%] w-20 h-20 rounded-lg bg-purple-400/10 blur-xl animate-float-slow opacity-70" />
        <div className="absolute bottom-[10%] left-[20%] w-32 h-32 rounded-full bg-primary/10 blur-xl animate-float-delay-slow opacity-70" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <ScrollAnimation>
              <motion.div
                className="inline-block mb-6 p-2 px-4 rounded-full bg-blue-500 text-white text-primary border border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-sm font-medium flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-500" />Paragon International
                  University
                </span>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70 leading-tight flex flex-wrap items-center gap-1 sm:gap-2">
                Welcome to
                <span className="relative flex items-center gap-1 sm:gap-2 text-red-500">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    MindSpeak
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-primary/20 dark:bg-red-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto mb-8 leading-relaxed">
                A safe haven for expressing mental struggles and sharing
                experiences. You are not alone in your journey.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <Link href="/stories" className="flex items-center gap-2">
                    Read Stories
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 rounded-full px-8 transition-all duration-300 bg-teal-500 text-white hover:bg-teal-400 hover:text-white"
                >
                  <Link href="/share">Share Your Story</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl underline font-bold tracking-tight mb-4">
                How MindSpeak Helps
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Our platform provides multiple ways to support your mental
                health journey
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <Card className="border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-300 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-medium">Safe Space</h3>
                    <p className="text-muted-foreground">
                      Express yourself in a judgment-free environment where
                      privacy is respected and your voice matters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <Card className="border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-300 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-medium">Anonymous Sharing</h3>
                    <p className="text-muted-foreground">
                      Share your thoughts and experiences without revealing your
                      identity, in a supportive community
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <Card className="border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-300 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-medium">Community Support</h3>
                    <p className="text-muted-foreground">
                      Connect with others who understand what you are going
                      through and find strength in shared experiences
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <Card className="border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-rose-300 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-800/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-8 w-8 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-medium">Healing Together</h3>
                    <p className="text-muted-foreground">
                      Find comfort in shared experiences and grow stronger as a
                      community that supports each other
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What Our Community Says
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Real stories from students who found support through MindSpeak
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <Card className="border border-primary/10 hover:border-primary/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:shadow-blue-500 dark:hover:shadow-blue-500 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">
                      Finding MindSpeak was a turning point for me. Being able
                      to share my anxiety struggles anonymously and receive
                      support from others who understand has been incredibly
                      healing.
                    </p>
                    <div className="pt-4">
                      <p className="font-medium">Computer Science Student</p>
                      <p className="text-sm text-muted-foreground">
                        Paragon University
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <Card className="border border-primary/10 hover:border-primary/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:shadow-blue-500 dark:hover:shadow-blue-500 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">
                      The resources and support I found here helped me through a
                      really difficult time with depression. It is comforting to
                      know I am not alone in what I am experiencing.
                    </p>
                    <div className="pt-4">
                      <p className="font-medium">
                        Business Administration Student
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Paragon University
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <Card className="border border-primary/10 hover:border-primary/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:shadow-blue-500 dark:hover:shadow-blue-500 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">
                      The mood tracker has been a game-changer for me. Being
                      able to visualize my emotional patterns has helped me
                      identify triggers and develop better coping strategies.
                    </p>
                    <div className="pt-4">
                      <p className="font-medium">Psychology Student</p>
                      <p className="text-sm text-muted-foreground">
                        Paragon University
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  <span className="text-sm font-medium flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    Featured Resources
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Access Mental Health Resources
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find professional support, educational materials, and
                  emergency contacts all in one place. Our curated resources
                  help you navigate your mental health journey with confidence.
                </p>
                <ul className="space-y-3">
                  {[
                    "Emergency mental health contacts",
                    "Campus counseling services",
                    "Educational articles on mental wellbeing",
                    "Self-help guides and techniques",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500 mt-0.5">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
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
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-2xl blur-xl opacity-70" />
                <Card className="relative border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden rounded-2xl shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-px bg-muted/20">
                      <div className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                          <svg
                            className="h-6 w-6 text-red-600 dark:text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium">Emergency Help</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Immediate support for crisis situations
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                          <svg
                            className="h-6 w-6 text-teal-600 dark:text-teal-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium">Campus Resources</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Support services at your university
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                          <svg
                            className="h-6 w-6 text-amber-600 dark:text-amber-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium">Educational Materials</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Learn about mental health topics
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                          <svg
                            className="h-6 w-6 text-purple-600 dark:text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium">Self-Help Techniques</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Practical strategies for wellbeing
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background" />
              <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />

              <div className="relative p-8 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  Join Our Community
                </h2>
                <p className="text-xl text-muted-foreground max-w-[800px] mx-auto mb-10">
                  Connect with fellow Paragon International University students
                  in a supportive environment. Share your journey and find
                  strength in community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
                  >
                    <Link href="/join" className="flex items-center gap-2">
                      Join Now
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary/50 rounded-full px-8 transition-all duration-300 bg-teal-500 text-white hover:bg-teal-400 hover:text-white"
                  >
                    <Link href="/telegram">Join Telegram Group</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
