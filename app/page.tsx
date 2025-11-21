"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BackgroundParticles } from "@/components/background-particles"
import { FloatingShapes } from "@/components/floating-shapes"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary selection:text-primary-foreground flex flex-col">
      <BackgroundParticles />
      <FloatingShapes />

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          NEXUS<span className="text-primary">.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link href="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium text-white transition-all backdrop-blur-sm"
          >
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center mt-10 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30">
            The Future of
            <br />
            <span className="text-primary neon-text-blue">Academic</span> Management
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Experience a seamless, secure, and immersive portal designed for the next generation of students and
            administrators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/login" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black font-bold text-lg shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all flex items-center justify-center gap-2"
              >
                Sign In <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link href="/signup" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/50 border border-white/20 text-white font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all"
              >
                Create Account
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Lightning Fast",
              description: "Optimized performance for instant access to your data.",
              icon: Zap,
              color: "text-primary",
              border: "group-hover:border-primary/50",
              glow: "group-hover:shadow-[0_0_30px_-10px_var(--color-primary)]",
            },
            {
              title: "Secure Core",
              description: "Enterprise-grade security protecting your academic records.",
              icon: Shield,
              color: "text-secondary",
              border: "group-hover:border-secondary/50",
              glow: "group-hover:shadow-[0_0_30px_-10px_var(--color-secondary)]",
            },
            {
              title: "Global Access",
              description: "Connect from anywhere in the world with 99.9% uptime.",
              icon: Globe,
              color: "text-purple-400",
              border: "group-hover:border-purple-400/50",
              glow: "group-hover:shadow-[0_0_30px_-10px_#c084fc]",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl transition-all duration-500 ${feature.border} ${feature.glow}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.description}</p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
