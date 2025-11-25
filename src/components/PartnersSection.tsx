import React from 'react';
import './PartnersSection.css';

export function PartnersSection() {
  const partners = [
    { name: "TechCorp", abbr: "TC" },
    { name: "DataFlow", abbr: "DF" },
    { name: "CloudSys", abbr: "CS" },
    { name: "InnoLab", abbr: "IL" },
    { name: "DevHub", abbr: "DH" },
    { name: "AICore", abbr: "AC" },
    { name: "NetSoft", abbr: "NS" },
    { name: "CodePro", abbr: "CP" }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">
            Trusted Partners
          </h2>
          <p className="partners-description">
            Collaborating with industry leaders
          </p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="partner-card"
            >
              <div className="partner-card-content">
                <div className="partner-card-abbr">
                  {partner.abbr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
