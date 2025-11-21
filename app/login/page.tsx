"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BackgroundParticles } from "@/components/background-particles"
import { FloatingShapes } from "@/components/floating-shapes"
import { RoleSwitcher } from "@/components/role-switcher"
import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "admin">("student")

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background selection:bg-primary selection:text-primary-foreground">
      <BackgroundParticles />
      <FloatingShapes />

      <Link
        href="/"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block space-y-8"
        >
          <div className="relative">
            <motion.h1
              className="text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NEXUS
              <br />
              <span className={role === "student" ? "text-primary neon-text-blue" : "text-secondary neon-text-green"}>
                LOGIN
              </span>
            </motion.h1>

            <motion.div
              className={`absolute -left-8 top-0 w-1 h-full rounded-full ${role === "student" ? "bg-primary neon-border-blue" : "bg-secondary neon-border-green"}`}
              layoutId="sidebar-line"
            />
          </div>

          <motion.p
            className="text-xl text-white/60 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome back. Access your dashboard and manage your academic journey.
          </motion.p>
        </motion.div>

        {/* Right Side: Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            {/* Decorative gradients inside card */}
            <div
              className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-50 transition-colors duration-500 ${role === "student" ? "bg-primary/30" : "bg-secondary/30"}`}
            />
            <div
              className={`absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-[80px] opacity-50 transition-colors duration-500 ${role === "student" ? "bg-blue-600/30" : "bg-green-600/30"}`}
            />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/40 text-sm">Please enter your details to sign in</p>
              </div>

              <RoleSwitcher role={role} setRole={setRole} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LoginForm role={role} />
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 text-center">
                <p className="text-white/40 text-sm">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
