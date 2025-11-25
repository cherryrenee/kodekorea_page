import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import './NavigationSection.css';

function Logo() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <div className="navigation-logo-text">KODE KOREA</div>;
  }

  return (
    <img
      src="/logo.png"
      alt="KODE KOREA"
      className="navigation-logo-image"
      onError={() => setImageError(true)}
    />
  );
}

export function NavigationSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navigation-section">
      {/* Desktop Navigation */}
      <div className="navigation-desktop">
        <div className="navigation-logo-container">
          <Logo />
        </div>
        <ul className="navigation-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="navigation-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="navigation-mobile">
        <div className="navigation-mobile-header">
          <div className="navigation-logo-container">
            <Logo />
          </div>
          <button 
            className="navigation-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="navigation-icon" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`navigation-overlay ${isOpen ? 'navigation-overlay-open' : ''}`} onClick={toggleMenu} />

        {/* Mobile Menu Sidebar */}
        <div className={`navigation-sidebar ${isOpen ? 'navigation-sidebar-open' : ''}`}>
          <div className="navigation-sidebar-header">
            <button 
              className="navigation-close"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="navigation-icon-close" />
            </button>
          </div>
          <ul className="navigation-menu-mobile">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="navigation-link-mobile"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

