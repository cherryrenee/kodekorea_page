import { Users, Building2, Star } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#CBD5E1]/30">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#345FFF]/10 flex items-center justify-center text-[#345FFF]">
          {icon}
        </div>
      </div>
      <div className="text-[#0F172A] text-[28px] font-semibold mb-1">
        {value}
      </div>
      <div className="text-[#475569] text-[14px]">
        {label}
      </div>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="px-6 py-12 bg-[#F8FAFC]">
      <div className="max-w-[390px] mx-auto grid grid-cols-1 gap-4">
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
