import { Star } from "lucide-react";

interface Props {
  name: string;
  company: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({ name, company, rating, testimonial }: Props) => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-6
      border
      border-gray-100
      shadow-lg
      hover:shadow-2xl
      transition
      h-full
      flex
      flex-col
      justify-between
      "
    >
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        “{testimonial}”
      </p>

      <div>
        <div className="flex mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>

        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;