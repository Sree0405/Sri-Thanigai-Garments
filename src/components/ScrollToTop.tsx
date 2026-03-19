"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // 🔥 Replace with your number (with country code, no + or spaces)
  const phoneNumber = "919841522297"

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-10 h-10 rounded-full
          bg-green-500
          flex items-center justify-center
          shadow-lg
          transition
        "
      >
        <FaWhatsapp className="w-5 h-5 text-white" />
      </motion.button>

      {/* Scroll To Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="
              w-10 h-10 rounded-full
              bg-gradient-to-br from-primary to-indigo-500
              flex items-center justify-center
              shadow-lg
              hover:scale-110
              active:scale-95
              transition
            "
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}

export default FloatingButtons