import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

function ReviewCard({ name, role, rating, quote, avatar }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#CBD5E1]/30">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? 'fill-[#FFB800] text-[#FFB800]'
                : 'fill-[#CBD5E1] text-[#CBD5E1]'
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-[#475569] text-[15px] leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#345FFF] to-[#1D3FE3] flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <div className="text-[#0F172A] text-[15px] font-semibold">
            {name}
          </div>
          <div className="text-[#475569] text-[13px]">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Data Analyst",
      rating: 5,
      quote: "The AI bootcamp transformed my career. The hands-on projects and expert mentorship were invaluable.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      rating: 5,
      quote: "Best investment I've made in my career. The live coding workshops helped me land my dream job.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      rating: 5,
      quote: "Corporate DX training helped our team embrace digital transformation. Highly recommended!",
      avatar: "ER"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[390px] mx-auto px-4">
        <div className="mb-8 px-2">
          <h2 className="text-[#0F172A] text-[28px] font-semibold mb-2">
            Student Success Stories
          </h2>
          <p className="text-[#475569] text-[14px]">
            Hear from our graduates
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'center',
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index
                  ? 'bg-[#345FFF] w-6'
                  : 'bg-[#CBD5E1]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
