import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[390px] mx-auto px-6">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjM5MDU1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
            className="w-full h-56 object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="mb-6">
          <div className="text-[#345FFF] text-[12px] font-semibold mb-2 uppercase tracking-wider">
            About Us
          </div>
          <h2 className="text-[#0F172A] text-[28px] font-semibold mb-4 leading-tight">
            Building the Future of Tech Education
          </h2>
          <p className="text-[#475569] text-[15px] leading-relaxed mb-4">
            We're on a mission to make world-class IT education accessible to everyone. Our expert-led programs combine cutting-edge curriculum with hands-on experience.
          </p>
          <p className="text-[#475569] text-[15px] leading-relaxed">
            With over 5 years of industry experience, we've helped thousands of students launch successful careers in technology.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-[#0F172A] text-[24px] font-semibold">5+</div>
            <div className="text-[#475569] text-[12px]">Years</div>
          </div>
          <div className="text-center">
            <div className="text-[#0F172A] text-[24px] font-semibold">50+</div>
            <div className="text-[#475569] text-[12px]">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-[#0F172A] text-[24px] font-semibold">100%</div>
            <div className="text-[#475569] text-[12px]">Online</div>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button className="w-full bg-[#345FFF] hover:bg-[#1D3FE3] text-white py-6 rounded-full transition-colors">
          Discover Our Story
        </Button>
      </div>
    </section>
  );
}
