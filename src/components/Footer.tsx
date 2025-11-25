import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo/Brand */}
          <div className="footer-brand">
            <h3 className="footer-brand-title">
              KODE KOREA
            </h3>
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
                  <div className="footer-contact-value">hello@techlearn.com</div>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <Phone className="footer-contact-icon" />
                </div>
                <div>
                  <div className="footer-contact-label">Phone</div>
                  <div className="footer-contact-value">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <MapPin className="footer-contact-icon" />
                </div>
                <div>
                  <div className="footer-contact-label">Location</div>
                  <div className="footer-contact-value">San Francisco, CA</div>
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
