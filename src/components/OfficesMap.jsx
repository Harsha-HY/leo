import React, { useState } from 'react';
import { MapPin, Building, Phone, ArrowRight } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function OfficesMap() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = pptData.officeLocations;

  const states = [
    {
      name: "Andhra Pradesh (Primary State)",
      districts: "Tirupati, NTR (Vijayawada), Kadapa, Visakhapatnam, Chittoor, Nellore, Prakasam, and all 26 districts via network.",
      activePrograms: "APIIATP, Azim Premji Natural Farming, Project DROP, ILP Education, Universal Salt Iodization, Tata Cancer Care."
    },
    {
      name: "Tamil Nadu",
      districts: "13 Focus Districts: Tirupathur, Vellore, Tiruvallur, Kancheepuram, Villupuram, Chengalpattu, Cuddalore, Kallakurichi, etc.",
      activePrograms: "Bonded Labour System Abolition, Released Bonded Labourers Association (RBLA), Worksite Inspections & Rescues."
    },
    {
      name: "Telangana",
      districts: "Nalgonda, Nagarkurnool, Mahbubnagar, Karimnagar, Vikarabad, Wanaparthy, Yadadri Bhongir, Medchal Malkajgiri.",
      activePrograms: "Trilinga Unorganised Workers Union (TUWU), Inter-State Migrant Rescues, Chenchu Tribal Welfare."
    },
    {
      name: "Karnataka & Southern States",
      districts: "Interstate border coordination (Jenu Kuruba tribes in Karnataka, Kurichiyas in Kerala).",
      activePrograms: "Anti-Trafficking alerts, Interstate Migrant Repatriation, National Adivasi Solidarity Council network."
    }
  ];

  return (
    <section id="offices" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <span>Geographical Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Six Dedicated Field Centres Across South India
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            From our headquarters in Tirupati, PPT maintains operational offices and grassroots units to coordinate rescues, manage agricultural collectives, and oversee educational initiatives.
          </p>
        </div>

        {/* Office Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Office Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {offices.map((office, idx) => {
              const isSelected = selectedOffice === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOffice(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-zinc-900 shadow-xs ring-1 ring-zinc-900'
                      : 'bg-white/70 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-50 text-zinc-500'}`}>
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-zinc-500 uppercase">
                          {office.type}
                        </span>
                        <span className="text-[10px] text-zinc-400">• {office.state}</span>
                      </div>
                      <h4 className="font-bold text-zinc-950 text-sm">
                        {office.city}
                      </h4>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-zinc-950' : 'text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Selected Office Card */}
          <div className="lg:col-span-7">
            {offices[selectedOffice] && (
              <div className="rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-xs h-full flex flex-col justify-between">
                
                <div className="relative h-60 sm:h-72 bg-zinc-100 overflow-hidden">
                  <img
                    src={offices[selectedOffice].image}
                    alt={offices[selectedOffice].city}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/images/office_tirupati_head.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-xs text-zinc-800 border border-zinc-200 shadow-xs">
                      {offices[selectedOffice].type} • {offices[selectedOffice].city}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/95 backdrop-blur-xs border border-zinc-200 text-xs text-zinc-800">
                    <p className="font-medium">{offices[selectedOffice].address}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                      Core Field Responsibilities:
                    </span>
                    <p className="text-sm text-zinc-800 font-medium mt-0.5">
                      {offices[selectedOffice].focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                      <span>{offices[selectedOffice].city}, {offices[selectedOffice].state}</span>
                    </div>
                    {offices[selectedOffice].phone && (
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-zinc-700" />
                        <span>{offices[selectedOffice].phone}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* State Jurisdictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {states.map((st, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-xs font-mono text-zinc-400 font-bold block mb-1">
                  Region 0{i + 1}
                </span>
                <h4 className="font-bold text-zinc-950 text-sm mb-1">
                  {st.name}
                </h4>
                <p className="text-xs text-zinc-600 mb-2 leading-relaxed">
                  <strong className="text-zinc-800">Districts:</strong> {st.districts}
                </p>
              </div>
              <div className="pt-2 border-t border-zinc-100 text-[11px] text-zinc-700 font-mono">
                {st.activePrograms}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
