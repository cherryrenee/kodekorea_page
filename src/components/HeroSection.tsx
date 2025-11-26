import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1763560956421-b3e4083e9fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzOTgxNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Modern tech building"
        className="hero-background-image"
      />
      
      {/* Dark Gradient Overlay - 데스크탑에서 더 투명하게 */}
      <div className="hero-gradient-overlay" />
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Career in Tech
        </h1>
        <p className="hero-description">
          미래의 일은 사람이 혼자 만드는 것이 아닙니다. AI와 나란히 걷는 새로운 협업을 배우는 시대의 교육.
        </p>
        <Button className="hero-button">
          Get Started Today
        </Button>
      </div>
    </section>
  );
}
