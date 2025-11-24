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
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[390px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#0F172A] text-[28px] font-semibold mb-2">
            Trusted Partners
          </h2>
          <p className="text-[#475569] text-[14px]">
            Collaborating with industry leaders
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 flex items-center justify-center shadow-sm border border-[#CBD5E1]/30 aspect-square"
            >
              <div className="text-center">
                <div className="text-[#345FFF] text-[18px] font-semibold">
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
