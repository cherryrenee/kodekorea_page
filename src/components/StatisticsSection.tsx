import React from 'react';
import { Users, Building2, Star } from 'lucide-react';
import './StatisticsSection.css';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card-icon-container">
        <div className="stat-card-icon-wrapper">
          {icon}
        </div>
      </div>
      <div className="stat-card-value">
        {value}
      </div>
      <div className="stat-card-label">
        {label}
      </div>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <StatCard 
          icon={<Users className="w-5 h-5" />}
          value="5,200+"
          label="Students Trained"
        />
        <StatCard 
          icon={<Building2 className="w-5 h-5" />}
          value="180+"
          label="Partner Companies"
        />
        <StatCard 
          icon={<Star className="w-5 h-5" />}
          value="98%"
          label="Satisfaction Score"
        />
      </div>
    </section>
  );
}
