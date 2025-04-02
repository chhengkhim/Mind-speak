import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, MessageCircle, Shield, Users } from "lucide-react"
import { ScrollAnimation, ParallaxScroll } from "@/components/ui/scroll-animation"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-3xl" />
        <ParallaxScroll speed={-0.2} className="space-y-4 max-w-3xl relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Welcome to MindSpeak
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              A safe haven for expressing mental struggles and sharing experiences. You are not alone in your journey.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Link href="/stories">Read Stories</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Link href="/share">Share Your Story</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </ParallaxScroll>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">How MindSpeak Helps</h2>
            <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
              Our platform provides multiple ways to support your mental health journey
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollAnimation direction="up" delay={0.1}>
            <Card className="border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Safe Space</h3>
                  <p className="text-muted-foreground">
                    Express yourself in a judgment-free environment where privacy is respected
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <Card className="border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Anonymous Sharing</h3>
                  <p className="text-muted-foreground">
                    Share your thoughts and experiences without revealing your identity
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <Card className="border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Community Support</h3>
                  <p className="text-muted-foreground">Connect with others who understand what you are going through</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
            <Card className="border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Healing Together</h3>
                  <p className="text-muted-foreground">
                    Find comfort in shared experiences and grow stronger as a community
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
              Connect with fellow Paragon International University students in a supportive environment. Share your
              journey and find strength in community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Link href="/join">Join Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Link href="/telegram">Join Telegram Group</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}

