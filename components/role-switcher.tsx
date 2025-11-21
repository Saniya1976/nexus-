"use client"

import { motion } from "framer-motion"
import { User, ShieldCheck } from "lucide-react"

interface RoleSwitcherProps {
  role: "student" | "admin"
  setRole: (role: "student" | "admin") => void
}

export function RoleSwitcher({ role, setRole }: RoleSwitcherProps) {
  return (
    <div className="relative flex items-center justify-center p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 w-fit mx-auto mb-8">
      <motion.div
        className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-primary/80 to-primary/40 z-0"
        animate={{
          x: role === "student" ? 0 : "100%",
          background:
            role === "student"
              ? "linear-gradient(to right, var(--color-primary), transparent)"
              : "linear-gradient(to left, var(--color-secondary), transparent)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <button
        onClick={() => setRole("student")}
        className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-full transition-colors duration-300 ${
          role === "student" ? "text-white" : "text-white/50 hover:text-white/80"
        }`}
      >
        <User className="w-4 h-4" />
        <span className="font-medium">Student</span>
      </button>

      <button
        onClick={() => setRole("admin")}
        className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-full transition-colors duration-300 ${
          role === "admin" ? "text-white" : "text-white/50 hover:text-white/80"
        }`}
      >
        <ShieldCheck className="w-4 h-4" />
        <span className="font-medium">Admin</span>
      </button>
    </div>
  )
}
