import React, { useState } from 'react';
import { ArrowUpRight, X, ArrowRight } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    "All",
    "Human Rights & Legal Justice",
    "Child Education & ECCE",
    "Urban Sustainability & Recycling",
    "Climate Resilience & Natural Farming",
    "Financial Inclusion & Security",
    "Public Health & Nutrition",
    "Tribal Welfare & Skills"
  ];

  const filteredProjects = selectedCategory === "All"
    ? pptData.flagshipProjects
    : pptData.flagshipProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
              <span>Initiatives & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Featured Programmes & Operations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Active projects implemented in direct partnership with government departments, international charities, and corporate CSR programs.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-full self-start md:self-auto">
            8 Detailed Programs
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/images/hero_happy_children.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/95 backdrop-blur-xs text-zinc-800 border border-zinc-200 shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5">
                  <span className="text-[11px] font-mono font-medium text-zinc-500 block mb-1">
                    Partner: {project.partner}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Micro stats */}
                  <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-zinc-100">
                    {project.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="bg-zinc-50 p-2 rounded-lg border border-zinc-200/60">
                        <span className="text-sm font-bold text-zinc-950 block">
                          {st.value}
                        </span>
                        <span className="text-[10px] text-zinc-500 block truncate">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-3xl shadow-xl p-6 sm:p-8 text-left">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1.5 pr-8">
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
                {activeModalProject.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-zinc-600 font-medium">
                Partner: {activeModalProject.partner}
              </p>
            </div>

            <div className="mt-4 h-56 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {activeModalProject.stats.map((st, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
                  <span className="text-base font-bold text-zinc-950 block">
                    {st.value}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-zinc-200 pt-5">
              <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">
                Overview & Execution:
              </h4>
              <p>{activeModalProject.details}</p>
              <p>{activeModalProject.summary}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">
                Verified against PPT official annual reports.
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-full text-xs font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
