"use client";

import { useState } from "react";
import { Check, Loader2, Star } from "lucide-react";

import { submitTestimonials } from "@/src/services/contactService";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { cn } from "@/src/lib/utils";

const highlights = [
  "Premium garment manufacturing",
  "Trusted partner for global brands",
  "Consistent quality and delivery",
];

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rating: 5,
    testimonial: "",
  });

  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        testimonial: "",
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      <Separator className="opacity-60" />

      <div className="grid gap-10 pt-10 sm:gap-12 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16">
        <header className="max-w-md lg:pt-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Client feedback
          </p>
          <h2 className="font-heading mt-2 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Share your experience
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your feedback helps us improve our manufacturing services and
            strengthen partnerships. Brief details are enough—we read every
            submission.
          </p>

          <ul className="mt-6 space-y-2.5">
            {highlights.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 lg:border-l lg:border-border/70 lg:pl-10"
        >
          <div className="space-y-2">
            <Label htmlFor="testimonial-name">Name</Label>
            <Input
              id="testimonial-name"
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonial-company">Company</Label>
            <Input
              id="testimonial-company"
              type="text"
              name="company"
              placeholder="Company or brand name"
              value={formData.company}
              onChange={handleChange}
              required
              autoComplete="organization"
            />
          </div>

          <div className="space-y-2">
            <Label id="rating-label">Rating</Label>
            <div
              className="flex gap-1"
              role="group"
              aria-labelledby="rating-label"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, rating: star })
                  }
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={cn(
                    "rounded-md p-1 transition-transform hover:scale-105",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  aria-pressed={formData.rating === star}
                >
                  <Star
                    className={cn(
                      "h-6 w-6 sm:h-7 sm:w-7",
                      star <= (hover || formData.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/35"
                    )}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonial-body">Testimonial</Label>
            <Textarea
              id="testimonial-body"
              name="testimonial"
              rows={4}
              placeholder="How was your experience working with us?"
              value={formData.testimonial}
              onChange={handleChange}
              required
              className="min-h-[120px] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg",
              "bg-gradient-to-r from-primary to-indigo-600 text-sm font-semibold text-primary-foreground",
              "shadow-sm transition hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Submitting…
              </>
            ) : (
              "Submit testimonial"
            )}
          </button>

          {success && (
            <p
              className="text-center text-sm text-primary"
              role="status"
            >
              Thank you. Your testimonial has been received.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;
