import React from 'react';
import { Users, Building2 } from 'lucide-react';
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
        <div className="stat-card-icon-wrapper">{icon}</div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}

function DonutCard() {
  const percent = 98;
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * ((100 - percent) / 100);

  return (
    <div className="stat-donut-card">
      <div className="stat-donut-graphic">
        <svg width="340" height="340" viewBox="0 0 340 340">
          <circle className="stat-donut-track" cx="170" cy="170" r={radius} />
          <circle
            className="stat-donut-fill"
            cx="170"
            cy="170"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text
            className="stat-donut-text"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {percent}%
          </text>
        </svg>
      </div>
      <div className="stat-donut-content">
        <div className="stat-donut-title">Satisfaction Score</div>
        <p className="stat-donut-description">
          평균 만족도 {percent}%로, 수강생들이 추천하는 프로그램입니다.
        </p>
      </div>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-left">
          <div className="stat-list">
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
          </div>
        </div>
        <div className="statistics-right">
          <DonutCard />
        </div>
      </div>
    </section>
  );
}
