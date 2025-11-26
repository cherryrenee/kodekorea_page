import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const logoSrc = '/kodekorealogo.png';

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo/Brand */}
          <div className="footer-brand">
            <div className="footer-brand-title">
              {logoError ? (
                'KODE KOREA'
              ) : (
                <img
                  src={logoSrc}
                  alt="KODE KOREA 로고"
                  className="footer-logo-image"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <p className="footer-brand-description">
              Empowering the next generation of tech professionals
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="footer-contact">
            <div className="footer-contact-grid">
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <Mail className="footer-contact-icon" />
                </div>
                <div>
                  <div className="footer-contact-label">Email</div>
                  <div className="footer-contact-value">seongho.cho@kodekorea.kr</div>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <Phone className="footer-contact-icon" />
                </div>
                <div>
                  <div className="footer-contact-label">Phone</div>
                  <div className="footer-contact-value">010-</div>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <MapPin className="footer-contact-icon" />
                </div>
                <div>
                  <div className="footer-contact-label">Location</div>
                  <div className="footer-contact-value">부산시 금정구 중앙대로 1793번길 38 204호</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="footer-social">
          <button className="footer-social-button">
            <Facebook className="footer-social-icon" />
          </button>
          <button className="footer-social-button">
            <Twitter className="footer-social-icon" />
          </button>
          <button className="footer-social-button">
            <Linkedin className="footer-social-icon" />
          </button>
          <button className="footer-social-button">
            <Instagram className="footer-social-icon" />
          </button>
        </div>
        
        {/* Copyright */}
        <div className="footer-copyright">
          © 2024 KODE KOREA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
