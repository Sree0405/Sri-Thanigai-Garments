"use client"

import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { submitContact } from "@/src/services/contactService"

export default function ContactForm() {

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e:any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e:any) => {

    e.preventDefault()
    setLoading(true)

    try {

      await submitContact(formData)
      setSubmitted(true)

    } catch (error) {

      console.error(error)

    }

    setLoading(false)

  }

  if (submitted) {

    return (

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-2xl text-center border border-border"
      >

        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <Send className="w-6 h-6 text-primary"/>
        </div>

        <h3 className="text-2xl font-bold mb-2">
          Inquiry Sent Successfully
        </h3>

        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for contacting Sri Thanigai Garments. Our team will review
          your manufacturing requirements and get back to you shortly.
        </p>

      </motion.div>

    )

  }

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once:true }}
      transition={{ duration: .5 }}
      className="glass-card p-10 md:p-12 rounded-2xl border border-border shadow-xl backdrop-blur-xl"
    >

      <h2 className="font-heading font-bold text-3xl mb-2">
        Start Your Manufacturing Inquiry
      </h2>

      <p className="text-muted-foreground mb-8 max-w-lg">
        Tell us about your garment production requirements, bulk orders,
        or partnership opportunities. Our team will respond quickly
        with the best manufacturing solutions.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name + Email */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="relative">

            <User className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground"/>

            <input
              name="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            />

          </div>

          <div className="relative">

            <Mail className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground"/>

            <input
              name="email"
              type="email"
              required
              placeholder="Business Email Address"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            />

          </div>

        </div>


        {/* Phone */}

        <div className="relative">

          <Phone className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground"/>

          <input
            name="phone"
            type="number"
            placeholder="Phone Number (Optional)"
            onChange={handleChange}
            className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
          />

        </div>


        {/* Message */}

        <div className="relative">

          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground"/>

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Describe your garment production needs (product type, quantity, fabric, timeline, etc.)"
            onChange={handleChange}
            className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
          />

        </div>


        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold gradient-custom text-white hover:opacity-90 transition disabled:opacity-60"
        >

          {loading ? "Sending Inquiry..." : "Send Inquiry"}

          {!loading && <Send className="w-4 h-4"/>}

        </button>

      </form>

    </motion.div>

  )

}