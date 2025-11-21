"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface LoginFormProps {
  role: "student" | "admin"
}

export function LoginForm({ role }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (email && password) {
      setStatus("success")
    } else {
      setStatus("error")
    }
    setIsLoading(false)
  }

  const themeColor = role === "student" ? "text-primary" : "text-secondary"
  const borderColor = role === "student" ? "focus:border-primary" : "focus:border-secondary"
  const ringColor = role === "student" ? "focus:ring-primary/50" : "focus:ring-secondary/50"
  const buttonGradient =
    role === "student"
      ? "bg-gradient-to-r from-primary to-blue-600 hover:from-blue-400 hover:to-primary"
      : "bg-gradient-to-r from-secondary to-green-600 hover:from-green-400 hover:to-secondary"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <label className={`text-sm font-medium ${themeColor} ml-1`}>
              {role === "admin" ? "Admin ID / Email" : "Student Email"}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 transition-all duration-300 ${borderColor} ${ringColor}`}
              placeholder={role === "admin" ? "admin@nexus.edu" : "student@nexus.edu"}
            />
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r ${role === "student" ? "from-primary/20" : "from-secondary/20"} to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500`}
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <label className={`text-sm font-medium ${themeColor} ml-1`}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 transition-all duration-300 ${borderColor} ${ringColor}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div
              className={`w-4 h-4 rounded border border-white/20 flex items-center justify-center transition-colors ${role === "student" ? "group-hover:border-primary" : "group-hover:border-secondary"}`}
            >
              {/* Checkbox logic would go here */}
            </div>
            <span className="text-white/60 group-hover:text-white transition-colors">Remember me</span>
          </label>
          <a href="#" className={`${themeColor} hover:underline hover:brightness-125 transition-all`}>
            Forgot password?
          </a>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full relative overflow-hidden rounded-xl py-3.5 font-bold text-white shadow-lg transition-all duration-300 ${buttonGradient}`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : status === "success" ? (
              <CheckCircle2 className="animate-bounce" />
            ) : status === "error" ? (
              <AlertCircle className="animate-pulse" />
            ) : (
              <>
                Sign In <ArrowRight size={18} />
              </>
            )}
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
        </motion.button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black/40 backdrop-blur-xl px-2 text-white/40">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["Google", "GitHub"].map((provider) => (
            <motion.button
              key={provider}
              type="button"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20"
            >
              {provider}
            </motion.button>
          ))}
        </div>
      </form>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
          >
            Invalid credentials. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
