import React, { useState, useEffect } from 'react';
import { getTypingSequence } from '../utils/hangul';
import './BottomUpHero.css';

const PHRASES = [
    '기초부터 업무 적용까지',
    '단계별 쌓아올리는',
    'Bottom-up IT 교육'
];

interface TypewriterLineProps {
    text: string;
    start: boolean;
    onComplete?: () => void;
}

function TypewriterLine({ text, start, onComplete }: TypewriterLineProps) {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!start || isComplete) return;

        const sequence = getTypingSequence(text);
        let interval: NodeJS.Timeout;
        let step = 0;

        interval = setInterval(() => {
            if (step < sequence.length) {
                setDisplayText(sequence[step]);
                step += 1;
            } else {
                clearInterval(interval);
                setIsComplete(true);
                if (onComplete) onComplete();
            }
        }, 50); // Speed per Jamo step

        return () => clearInterval(interval);
    }, [start, text, isComplete, onComplete]);

    if (!start) return null;

    return (
        <div className="scramble-line">
            {displayText}
            {!isComplete && <span className="blinking-cursor" />}
        </div>
    );
}

export function BottomUpHero() {
    const [activeLine, setActiveLine] = useState(0);

    const handleLineComplete = () => {
        setActiveLine((prev) => prev + 1);
    };

    return (
        <section className="bottom-up-hero">
            {/* Digital Grid Background - Moved to App.tsx wrapper */}

            {/* Foreground Content */}
            <div className="hero-content-container">
                <div className="scramble-title-container">
                    {PHRASES.map((phrase, index) => (
                        <TypewriterLine
                            key={index}
                            text={phrase}
                            start={index <= activeLine}
                            onComplete={index === activeLine ? handleLineComplete : undefined}
                        />
                    ))}
                </div>

                <p className="hero-sub-description" style={{ opacity: activeLine >= PHRASES.length ? 1 : 0, transition: 'opacity 1s ease' }}>
                    AI·데이터·DX 기반 실무 교육 및 자동화 워크샵 전문, <br className='only-mobile' />코드코리아
                </p>
            </div>
        </section>
    );
}
