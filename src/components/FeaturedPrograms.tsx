import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

function ProgramCard({ image, title, description, duration, level }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#CBD5E1]/30">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#FFB800] text-[#0F172A] px-3 py-1 rounded-full text-[12px] font-medium">
          {level}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-[#0F172A] text-[20px] font-semibold mb-2">
          {title}
        </h3>
        <p className="text-[#475569] text-[14px] mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#475569] text-[14px]">{duration}</span>
          <button className="text-[#345FFF] flex items-center gap-1 text-[14px] font-medium hover:gap-2 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedPrograms() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const programs = [
    {
      image: "https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3NjM5NTkzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "AI/Data Bootcamp",
      description: "Master machine learning, deep learning, and data analytics with hands-on projects.",
      duration: "12 weeks",
      level: "Advanced"
    },
    {
      image: "https://images.unsplash.com/photo-1726607424623-6d9fee974241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5NzI1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Corporate DX Training",
      description: "Transform your organization with digital tools and innovative strategies.",
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      image: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM5MDI1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Live Coding Workshop",
      description: "Build real-world applications with expert mentors in interactive sessions.",
      duration: "4 weeks",
      level: "All Levels"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[390px] mx-auto px-4">
        <div className="mb-8 px-2">
          <h2 className="text-[#0F172A] text-[28px] font-semibold mb-2">
            Featured Programs
          </h2>
          <p className="text-[#475569] text-[14px]">
            Explore our most popular training courses
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
            {programs.map((program, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                <ProgramCard {...program} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {programs.map((_, index) => (
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