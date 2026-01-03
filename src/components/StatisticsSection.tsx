import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './StatisticsSection.css';

const PARTNERS = [
  { name: "경남교육청", src: "/brand_logo/경남_교육청.png" },
  { name: "경상국립대", src: "/brand_logo/경상_국립대.png" },
  { name: "국민은행", src: "/brand_logo/국민은행.png" },
  { name: "동명대", src: "/brand_logo/동명대.png" },
  { name: "동서대", src: "/brand_logo/동서대.png" },
  { name: "동아대", src: "/brand_logo/동아대.png" },
  { name: "부경대", src: "/brand_logo/부경대.png" },
  { name: "부산과고", src: "/brand_logo/부산_과고.png" },
  { name: "부산과기대", src: "/brand_logo/부산_과기대.png" },
  { name: "부산기계공고", src: "/brand_logo/부산_기계공고.png" },
  { name: "부산디자인진흥원", src: "/brand_logo/부산_디자인_진흥원.png" },
  { name: "부산소마고", src: "/brand_logo/부산_소마고.png" },
  { name: "부산일과고", src: "/brand_logo/부산_일과고.png" },
  { name: "부산정보산업진흥원", src: "/brand_logo/부산_정도산업진흥원.png" },
  { name: "부산대", src: "/brand_logo/부산대.png" },
  { name: "부산시교육청", src: "/brand_logo/부산시_교육청.png" },
  { name: "안동대", src: "/brand_logo/안동대.png" },
  { name: "울산과고", src: "/brand_logo/울산과고.png" },
  { name: "울산시교육청", src: "/brand_logo/울산시_교육청.png" },
  { name: "한국과학영재학교", src: "/brand_logo/한국_과학_영재학교.png" },
];

function Counter({ from, to }: { from: number; to: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "circOut",
        onUpdate: (latest) => setCount(latest)
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return <span ref={ref}>{Math.round(count).toLocaleString()}</span>;
}

export function StatisticsSection() {
  return (
    <section className="statistics-section-new">
      <div className="statistics-container-new">
        {/* 1. Counting Section */}
        <div className="stats-counting-container">
          <h2 className="stats-counting-title">
            <span className="stats-number-highlight">
              <Counter from={0} to={7200} />+
            </span>
            <span className="stats-text-suffix">
              명의 교육생이<br className="mobile-break" /> 선택한 코드코리아
            </span>
          </h2>
          <p className="stats-counting-description">
            검증된 커리큘럼과 현업 전문가 멘토링으로 여러분의 커리어 성장을 함께합니다.
          </p>
        </div>

        {/* 2. Infinite Partner Slider */}
        <div className="stats-partners-slider-wrapper">
          <p className="stats-partners-label">코드코리아와 함께한 파트너</p>
          <div className="stats-slider-track">
            {/* Double the list for seamless looping */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={index} className="stats-partner-item">
                <div className="stats-partner-logo">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="stats-partner-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
