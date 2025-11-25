import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import './ReviewsSection.css';

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

function ReviewCard({ name, role, rating, quote, avatar }: ReviewCardProps) {
  return (
    <div className="review-card">
      {/* Rating */}
      <div className="review-card-rating">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`review-card-star ${
              index < rating
                ? 'review-card-star-filled'
                : 'review-card-star-empty'
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="review-card-quote">
        "{quote}"
      </p>
      
      {/* Profile */}
      <div className="review-card-profile">
        <div className="review-card-avatar">
          {avatar}
        </div>
        <div>
          <div className="review-card-name">
            {name}
          </div>
          <div className="review-card-role">
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
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">
            Student Success Stories
          </h2>
          <p className="reviews-description">
            Hear from our graduates
          </p>
        </div>
        
        {/* Carousel - All Screen Sizes */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'center',
          }}
          className="reviews-carousel"
        >
          <CarouselContent className="reviews-carousel-content">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="reviews-carousel-item">
                <div className="reviews-carousel-item-inner">
                  <ReviewCard {...review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots indicator */}
        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`reviews-dot ${current === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
