import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] py-12">
      <div className="max-w-[390px] mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8 text-center">
          <h3 className="text-white text-[24px] font-semibold mb-2">
            TechLearn Academy
          </h3>
          <p className="text-white/70 text-[14px]">
            Empowering the next generation of tech professionals
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-10 h-10 rounded-full bg-[#345FFF]/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#345FFF]" />
            </div>
            <div>
              <div className="text-[13px] text-white/60 mb-0.5">Email</div>
              <div className="text-[14px]">hello@techlearn.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-10 h-10 rounded-full bg-[#345FFF]/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#345FFF]" />
            </div>
            <div>
              <div className="text-[13px] text-white/60 mb-0.5">Phone</div>
              <div className="text-[14px]">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-10 h-10 rounded-full bg-[#345FFF]/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#345FFF]" />
            </div>
            <div>
              <div className="text-[13px] text-white/60 mb-0.5">Location</div>
              <div className="text-[14px]">San Francisco, CA</div>
            </div>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#345FFF] transition-colors flex items-center justify-center text-white">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#345FFF] transition-colors flex items-center justify-center text-white">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#345FFF] transition-colors flex items-center justify-center text-white">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#345FFF] transition-colors flex items-center justify-center text-white">
            <Instagram className="w-5 h-5" />
          </button>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-white/50 text-[12px] pt-6 border-t border-white/10">
          © 2024 TechLearn Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
