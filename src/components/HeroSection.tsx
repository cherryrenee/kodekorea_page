import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1763560956421-b3e4083e9fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzOTgxNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Modern tech building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/60 to-[#0F172A]/80" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start px-6 max-w-[390px] mx-auto">
        <h1 className="text-white mb-4 leading-tight text-[32px] font-semibold">
          Transform Your Career in Tech
        </h1>
        <p className="text-white/90 mb-8 leading-relaxed text-[16px]">
          Master cutting-edge IT skills with industry-leading bootcamps and corporate training programs.
        </p>
        <Button 
          className="bg-[#345FFF] hover:bg-[#1D3FE3] text-white px-8 py-6 rounded-full transition-colors"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
}
