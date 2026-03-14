"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { submitTestimonials } from "@/src/services/contactService";

const TestimonialForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rating: 5,
    testimonial: ""
  });

  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      setLoading(true);

      await submitTestimonials(formData);

      setSuccess(true);

      setFormData({
        name: "",
        company: "",
        rating: 5,
        testimonial: ""
      });

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="pt-28 px-4 bg-white">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CONTENT */}

        <div>

          <h2 className="
          text-3xl md:text-4xl font-semibold leading-tight
          bg-gradient-to-r from-primary to-indigo-600
          bg-clip-text text-transparent
          ">
            Share Your Experience
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Your feedback helps us improve our garment manufacturing
            services and build stronger partnerships with global brands.
            Tell us about your experience working with us.
          </p>

          <div className="mt-8 space-y-3 text-sm text-gray-500">

            <p>✔ Premium garment manufacturing</p>
            <p>✔ Trusted export partner for global brands</p>
            <p>✔ Consistent quality and delivery</p>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <form
          onSubmit={handleSubmit}
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          border border-gray-100
          space-y-5
          "
        >

          {/* Name */}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
            w-full
            border border-gray-200
            rounded-lg
            px-4 py-2.5
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
            "
          />

          {/* Company */}

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="
            w-full
            border border-gray-200
            rounded-lg
            px-4 py-2.5
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
            "
          />

          {/* Star Rating */}

          <div>

            <label className="text-sm text-gray-600 block mb-2">
              Your Rating
            </label>

            <div className="flex gap-2">

              {[1,2,3,4,5].map((star)=>(
                <button
                  key={star}
                  type="button"
                  onClick={()=>setFormData({...formData,rating:star})}
                  onMouseEnter={()=>setHover(star)}
                  onMouseLeave={()=>setHover(0)}
                  className="transition hover:scale-110"
                >
                  <Star
                    size={24}
                    className={
                      star <= (hover || formData.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                    }
                  />
                </button>
              ))}

            </div>

          </div>

          {/* Testimonial */}

          <textarea
            name="testimonial"
            rows={3}
            placeholder="Write your testimonial..."
            value={formData.testimonial}
            onChange={handleChange}
            required
            className="
            w-full
            border border-gray-200
            rounded-lg
            px-4 py-2.5
            text-sm
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
            "
          />

          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-gradient-to-r
            from-primary
            to-indigo-600
            text-white
            py-2.5
            rounded-xl
            font-semibold
            shadow-md
            hover:opacity-90
            transition
            "
          >
            {loading ? "Submitting..." : "Submit Testimonial"}
          </button>

          {success && (
            <p className="text-green-600 text-sm text-center">
              Thank you! Your testimonial has been submitted.
            </p>
          )}

        </form>

      </div>

    </section>
  );
};

export default TestimonialForm;