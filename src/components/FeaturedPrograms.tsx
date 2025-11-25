import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import './FeaturedPrograms.css';

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

function ProgramCard({ image, title, description, duration, level }: ProgramCardProps) {
  return (
    <div className="program-card">
      {/* Image - 모바일: 위, 데스크탑: 왼쪽 */}
      <div className="program-card-image-container">
        <ImageWithFallback
          src={image}
          alt={title}
          className="program-card-image"
        />
        <div className="program-card-level-badge">
          {level}
        </div>
      </div>
      
      {/* Content - 모바일: 아래, 데스크탑: 오른쪽 */}
      <div className="program-card-content">
        <h3 className="program-card-title">
          {title}
        </h3>
        <p className="program-card-description">
          {description}
        </p>
        <div className="program-card-footer">
          <span className="program-card-duration">{duration}</span>
          <button className="program-card-button">
            Learn More <ArrowRight className="program-card-button-icon" />
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
    <section className="featured-programs-section">
      <div className="featured-programs-container">
        <div className="featured-programs-header">
          <h2 className="featured-programs-title">
            Featured Programs
          </h2>
          <p className="featured-programs-description">
            Explore our most popular training courses
          </p>
        </div>
        
        {/* Carousel - All Screen Sizes */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'center',
          }}
          className="featured-programs-carousel"
        >
          <CarouselContent className="carousel-content-wrapper">
            {programs.map((program, index) => (
              <CarouselItem key={index} className="carousel-item-wrapper">
                <div className="carousel-item-inner">
                  <ProgramCard {...program} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots indicator */}
        <div className="featured-programs-dots">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`featured-programs-dot ${current === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}