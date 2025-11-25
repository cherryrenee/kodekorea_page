import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import './AboutSection.css';

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Image - 모바일: 위, 데스크탑: 왼쪽 */}
          <div className="about-image-container">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjM5MDU1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="about-image"
            />
          </div>
          
          {/* Content + Stats + Button - 모바일: 아래, 데스크탑: 오른쪽 */}
          <div className="about-content">
            <div className="about-label">
              About Us
            </div>
            <h2 className="about-title">
              Building the Future of Tech Education
            </h2>
            <p className="about-description">
              We're on a mission to make world-class IT education accessible to everyone. Our expert-led programs combine cutting-edge curriculum with hands-on experience.
            </p>
            <p className="about-description about-description-last">
              With over 5 years of industry experience, we've helped thousands of students launch successful careers in technology.
            </p>
            
            {/* Stats */}
            <div className="about-stats">
              <div className="about-stat-item">
                <div className="about-stat-value">5+</div>
                <div className="about-stat-label">Years</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-value">50+</div>
                <div className="about-stat-label">Courses</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-value">100%</div>
                <div className="about-stat-label">Online</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button className="about-button">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
