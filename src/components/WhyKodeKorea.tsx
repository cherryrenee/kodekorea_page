import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import './WhyKodeKorea.css';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon-wrapper">
        {icon}
      </div>
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description">{description}</p>
      </div>
    </div>
  );
}

export function WhyKodeKorea() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "실무 중심의 커리큘럼",
      description: "이론에 그치지 않고, 현업에서 즉시 활용 가능한 프로젝트 기반의 실전 기술을 학습합니다."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "현직 전문가 멘토링",
      description: "네카라쿠배 등 IT 대기업 출신의 현직 개발자와 데이터 전문가가 1:1로 밀착 지도합니다."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "압도적인 성장 속도",
      description: "체계적인 로드맵과 몰입 환경을 통해, 단기간에 비전공자도 전문가 수준으로 성장시킵니다."
    }
  ];

  return (
    <section className="why-kodekorea-section">
      <div className="why-kodekorea-container">
        <div className="why-kodekorea-header">
          <h2 className="why-kodekorea-title">
            왜 코드코리아인가?
          </h2>
          <p className="why-kodekorea-description">
            단순한 교육을 넘어, 여러분의 커리어 전환점이 되어드립니다.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}