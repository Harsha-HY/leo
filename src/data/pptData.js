export const pptData = {
  organization: {
    name: "Praja Pragati Trust",
    shortName: "PPT",
    tagline: "Empowering People, Protecting the Dignity of the Poor, Preserving Nature, and Safeguarding the Future through Sustainable Development.",
    establishedYear: 1983,
    yearsOfService: 41,
    chairman: "Mr. M. Srinivasulu",
    registrationNo: "24/83 (Trust Deed Act 1882, Machilipatnam)",
    darpanId: "AP/2013/0068300",
    fcraNo: "010140011 (Valid to 31/03/2028)",
    csrNo: "CSR00017363",
    tax12A: "AAATP8682KE20041 / AAATP8682K25HY01 (Valid till 2036-37)",
    tax80G: "AAATP8682KF20213 / AAATP8682K25HY02 (Valid till 2031-32)",
    panNo: "AAATP8682K",
    tanNo: "HYDP13059E",
    registeredOffice: "Door No: 13-42, L.B. Nagar, Tirupati, Chittoor District - 517502, Andhra Pradesh, India",
    phone: "(0877) 2244392",
    mobile: "+91 98482 42394",
    emailPrimary: "ppt_srinu@rediffmail.com",
    emailSecondary: "gandhippt@gmail.com",
    website: "www.pptindia.org",
    bankDetails: {
      accountName: "Praja Pragati Trust",
      accountNumber: "1965101010276",
      ifscCode: "CNRB0001965",
      bankName: "Canara Bank",
      branch: "R.C. Road, Bairagipatteda, Tirupati – 517501"
    }
  },

  vision: "Realization of 'Grama Swaraj' — fostering a self-sustained, progressive, and empowered civil society where every citizen lives with dignity, equality, and peace.",
  
  mission: "To enlighten and empower the poorest of the poor through awareness, human resource cultivation, ecological balance, and integration into the socio-economic mainstream for holistic, self-reliant community development.",

  guidingPrinciples: [
    { title: "Gandhian Philosophy", desc: "Simple living and high thinking as the cornerstone of community trust and selfless service." },
    { title: "Universal Dignity & Equity", desc: "Prioritizing the most marginalized tribal groups (Yanadis, Irulas, Chenchus) and vulnerable children." },
    { title: "Accountability & Transparency", desc: "Rigorous statutory compliance (80G, 12A, FCRA, CSR) and transparent participatory social audits." },
    { title: "Ecological Stewardship", desc: "Promoting climate resilience, soil health, water conservation, and zero-budget natural farming." },
    { title: "Human Rights & Legal Justice", desc: "Active enforcement of Bonded Labour Abolition, Child Labour Prohibition, RTE, POCSO, and POA Acts." }
  ],

  keyImpactStats: [
    { label: "Children & Adolescents Reached", value: "17,179+", change: "+24% YoY", desc: "Quality education, preschool care, libraries & safety" },
    { label: "Rescued from Bonded Labour", value: "489", change: "382 worksites", desc: "Systematic rescue, release certificates & rehabilitation" },
    { label: "Anganwadi Centres Strengthened", value: "441", change: "100 Model AWCs", desc: "Activity-based TLM kits & preschool teacher training" },
    { label: "Plastic Waste Collected & Recycled", value: "43.7 MT", change: "309 locations", desc: "DROP initiative in Vijayawada & Visakhapatnam" },
    { label: "Govt. Scheme Entitlements Linked", value: "8,643+", change: "ABHA, e-Shram", desc: "Direct social security, ration, housing & pensions" },
    { label: "Small & Marginal Farmers Supported", value: "805+", change: "1,351+ acres", desc: "Zero-budget natural farming, irrigation & bio-inputs" }
  ],

  thematicPillars: [
    {
      id: "agriculture-environment",
      title: "Sustainable Agriculture, Environment & Climate",
      tagline: "Cultivating ecological resilience, soil health, and water abundance for smallholder farmers.",
      badge: "Environment & Livelihood",
      color: "from-emerald-500/20 via-emerald-600/10 to-transparent",
      accent: "#10B981",
      image: "/images/natural_farming_field.jpg",
      description: "Working across Andhra Pradesh and Telangana to transform conventional farming into climate-resilient natural systems. We collaborate with Azim Premji Foundation and World Bank-supported APIIATP to rehabilitate water tanks, establish bio-resource centres, and eliminate toxic pesticides.",
      points: [
        "1,351+ acres under sustainable and natural farming with 26 Farmer Interest Groups (NFIGs).",
        "Constructed/restored 12 tanks, 22 borewells, 15 check dams, and 10 community wells.",
        "50 Jeevamrutham drums and 12 vermicompost pits supplying local bio-fertilizers.",
        "Promoted Crop Water Budgeting (CWB) reducing ground water wastage by over 20% in 24 mandals.",
        "Project DROP: 309 urban collection points across Vijayawada and Vizag, channelizing 43+ MT of plastic to recyclers."
      ]
    },
    {
      id: "child-education-health",
      title: "Child Development, Quality Education & Nutrition",
      tagline: "Guaranteeing every child's fundamental right to quality education, health, and holistic protection.",
      badge: "Education & Child Rights",
      color: "from-blue-500/20 via-indigo-600/10 to-transparent",
      accent: "#3B82F6",
      image: "/images/hero_happy_children.jpg",
      description: "Partnering with India Literacy Project (ILP), Smile Foundation, and ChildFund International to strengthen the educational continuum from Early Childhood Care and Education (ECCE) to Class 12 career guidance and adolescent health.",
      points: [
        "441 Anganwadi Centres upgraded with child-friendly Sitting Circles and low-cost TLM materials.",
        "Over 17,179 children supported through model village learning centres and foundational learning.",
        "Established 6 GROWBY libraries and distributed 30 sports kits and 12 science experiment kits.",
        "3,451 high school students received career guidance and 2,435 completed Holland Code assessments.",
        "Launched Chulbuli Digital App for adolescent Sexual & Reproductive Health (SRH) and life skills.",
        "Universal Salt Iodization (USI) program covering all 26 districts of Andhra Pradesh with Nutrition International."
      ]
    },
    {
      id: "women-rights-justice",
      title: "Women Empowerment, Human Rights & Ending Bonded Labour",
      tagline: "Eradicating modern slavery, child marriages, and empowering tribal women through dignified livelihoods.",
      badge: "Human Rights & Justice",
      color: "from-amber-500/20 via-rose-600/10 to-transparent",
      accent: "#F59E0B",
      image: "/images/project_bonded_labour_rescue.jpg",
      description: "PPT stands on the frontlines combating the root causes of bonded labour and human trafficking across Tamil Nadu, Andhra Pradesh, and Telangana. We support survivors through legal defense, unionization, and alternative livelihood creation.",
      points: [
        "Rescued 489 bonded labourers across 382 surveyed worksites and secured government Release Certificates.",
        "42 active cases under continuous legal follow-up with police, prosecutors, and District Legal Services Authorities.",
        "Organized Released Bonded Labourers Associations (RBLA) and Trilinga Unorganised Workers Union (TUWU with 1,200+ members).",
        "Safe Village Program (SVP) in 96 villages: successfully prevented child marriages and child trafficking.",
        "Trained 50 Yanadi tribal women in professional garment tailoring with Sri City and 30 women in organic agriculture.",
        "Conducted 40 DEAF Financial Literacy workshops supported by RBI, educating 2,412 women on cyber fraud and banking."
      ]
    }
  ],

  flagshipProjects: [
    {
      id: "bonded-labour",
      title: "Bonded Labour Abolition & Survivor Rehabilitation",
      partner: "Foundation for Sustainable Development (FSD) & Govt. of AP/TN/TS",
      category: "Human Rights & Legal Justice",
      image: "/images/rescued_labourers_community.jpg",
      summary: "End-to-end casework covering survey, worksite inspection, legal rescue, repatriation, and sustainable socio-economic reintegration.",
      stats: [
        { label: "Districts Covered", value: "21" },
        { label: "Labourers Rescued", value: "489" },
        { label: "Migrants Repatriated", value: "109" },
        { label: "Active Court Cases", value: "42" }
      ],
      details: "Operating under the Bonded Labour System (Abolition) Act 1976 and Section 370 IPC, PPT conducts multi-state raids alongside district revenue and police officials across brick kilns, stone quarries, rice mills, and agriculture fields. We ensure freed workers receive the ₹30,000 to ₹1,00,000 cash rehabilitation assistance under the Central Sector Scheme."
    },
    {
      id: "ilp-education",
      title: "Empowerment of Children through Quality Education & RTE",
      partner: "India Literacy Project (ILP)",
      category: "Child Education & ECCE",
      image: "/images/children_hands_up_education.jpg",
      summary: "Strengthening early childhood preschool care, model primary education, STEM kits, and high-school career counseling.",
      stats: [
        { label: "AWCs Strengthened", value: "205" },
        { label: "Teachers Trained", value: "224" },
        { label: "Career Counselled", value: "3,451" },
        { label: "GROWBY Libraries", value: "6" }
      ],
      details: "Implemented in KVB Puram, Varadaiahpalem, and NTR District (Vijayawada Rural, G. Konduru, Ibrahimpatnam). We convert traditional Anganwadis into joyful learning spaces with interactive activity walls, sensory toys, and kitchen gardens. We administer the Holland Code Career Assessment to guide students toward vocational and college success."
    },
    {
      id: "drop-plastic",
      title: "Project DROP – Develop Responsible Outlook for Plastic",
      partner: "Indian Pollution Control Association (IPCA) & Kia India CSR",
      category: "Urban Sustainability & Recycling",
      image: "/images/drop_cleanup_drive.jpg",
      summary: "Promoting source segregation, door-to-door collection, and scientific recycling across residential societies and commercial zones.",
      stats: [
        { label: "Collection Points", value: "309" },
        { label: "Plastic Recycled", value: "43.7 MT" },
        { label: "Refresher Sessions", value: "200" },
        { label: "Citizens Sensitized", value: "50,000+" }
      ],
      details: "Phase III operations in Vijayawada (159 locations) and Visakhapatnam (150 locations). Involves dedicated DROP collection vehicles, specialized collection bins, street plays by cultural troupes, and World Environment Day clean-up drives at Rushikonda Beach and Krishna River banks."
    },
    {
      id: "apf-agriculture",
      title: "Integrated Natural Farming & Livelihood Enhancement",
      partner: "Azim Premji Foundation (APF)",
      category: "Climate Resilience & Natural Farming",
      image: "/images/vermicompost_pit.jpg",
      summary: "Restoring soil fertility, establishing water security, and organizing smallholder farmers into bio-input collectives.",
      stats: [
        { label: "Eligible Farmers", value: "445" },
        { label: "Acreage Mapped", value: "1,284.8" },
        { label: "Fallow Cultivated", value: "135 acres" },
        { label: "Wells & Borewells", value: "10 units" }
      ],
      details: "Implemented in Pallamala Panchayat and Krishnapuram ST Colony in B.N. Kandriga Mandal. Farmers are trained in Jeevamrutham, Beejamrutham, Neem Kashayam, and five-layer multilayer crop models. Fallow lands have been brought back to productive groundnut, millet, and fodder cultivation."
    },
    {
      id: "safe-village",
      title: "Safe Village Program (SVP) for Girl Child Safety",
      partner: "My Choices Foundation",
      category: "Child Protection & Anti-Trafficking",
      image: "/images/project_safe_village_program.jpg",
      summary: "Grassroots defense against child marriage, domestic violence, and sex trafficking through vigilant community networks.",
      stats: [
        { label: "Villages Reached", value: "96" },
        { label: "Rakshaks Appointed", value: "96" },
        { label: "Marriages Stopped", value: "40+" },
        { label: "Girls Sensitized", value: "13,430" }
      ],
      details: "Empowers local stakeholders — Gram Rakshaks, Nodal Teachers, and Grama Mitras — to act as rapid-response guardians. Features community rallies, toll-free helpline sensitization (1098, 181, 1800-419-8588), and Mother-Daughter (Maa-Beti) conventions."
    },
    {
      id: "deaf-rbi",
      title: "DEAF Financial Literacy & Cyber Fraud Prevention",
      partner: "Reserve Bank of India (RBI)",
      category: "Financial Inclusion & Security",
      image: "/images/project_rbi_deaf.jpg",
      summary: "Educating rural women, farmers, college students, and self-help groups on digital banking security and depositor rights.",
      stats: [
        { label: "Workshops Held", value: "40" },
        { label: "Women Sensitized", value: "2,412" },
        { label: "Police Officers", value: "Joint Sessions" },
        { label: "Ombudsman Reach", value: "Full AP" }
      ],
      details: "Organized across rural, urban, and tribal belts in collaboration with local Police Departments and Bank Managers. Focuses on preventing OTP phishing, QR code scams, predatory loan apps, and educating citizens on unclaimed deposits under the RBI DEAF Scheme."
    },
    {
      id: "usi-salt",
      title: "Universal Salt Iodization (USI) State Advocacy",
      partner: "Nutrition International (NI)",
      category: "Public Health & Nutrition",
      image: "/images/project_tata_cancer_screening.jpg",
      summary: "Preventing Iodine Deficiency Disorders (IDD) through market surveillance, lab titration testing, and state policy enforcement.",
      stats: [
        { label: "Districts Tested", value: "26" },
        { label: "Samples Analyzed", value: "1,200/yr" },
        { label: "NABL Validation", value: "10% check" },
        { label: "Govt Circulars", value: "5 Depts" }
      ],
      details: "Independent lab testing of salt samples from retail, production, and Mid-Day Meal school centers across all 26 districts of Andhra Pradesh under the Food Safety and Standards Act (FSSAI). Advocating for mandatory iodized salt usage in government schemes."
    },
    {
      id: "sricity-tribal",
      title: "Yanadi Tribal Livelihoods & Women Entrepreneurship",
      partner: "Sri City CSR",
      category: "Tribal Welfare & Skills",
      image: "/images/project_sricity_tailoring.jpg",
      summary: "Vocational garment training and organic cultivation skills for the vulnerable indigenous Yanadi community.",
      stats: [
        { label: "Women Tailors", value: "50" },
        { label: "Course Duration", value: "6 Months" },
        { label: "ZBNF Farmers", value: "30" },
        { label: "Income Jump", value: "Self-Employed" }
      ],
      details: "Providing cutting, stitching, machine maintenance, and micro-enterprise management skills. Women graduates establish independent home tailoring units and work with local apparel supply chains."
    }
  ],

  governingBoard: [
    {
      name: "Mr. M. Srinivasulu",
      role: "Chairman",
      qualification: "B. Com",
      occupation: "Social Development Specialist",
      bio: "Over 40 years of pioneering dedication to tribal welfare, bonded labour eradication, and grassroots community leadership across South India.",
      photo: "/images/chairman_m_srinivasulu.jpg"
    },
    {
      name: "Mrs. B. Prabhavati",
      role: "Secretary",
      qualification: "S.S.C",
      occupation: "Social Worker",
      bio: "Spearheading women empowerment, Self-Help Group financial inclusion, and community mobilization in rural mandals.",
      photo: "/images/board_b_prabhavati.jpg"
    },
    {
      name: "Mrs. R. Meera",
      role: "Trustee",
      qualification: "MSW (Master of Social Work)",
      occupation: "Social Work Professional",
      bio: "Expert in child protection casework, counselling of distressed women, and curriculum design for adolescent health.",
      photo: "/images/board_r_meera.jpg"
    },
    {
      name: "Mr. C. Chandra Sekhar Reddy",
      role: "Trustee",
      qualification: "Graduate",
      occupation: "Social Worker",
      bio: "Focusing on rural water resources, irrigation infrastructure, and tribal youth livelihood development.",
      photo: "/images/board_c_chandrasekhar.jpg"
    },
    {
      name: "Mrs. G. Lakshmi Manoharam",
      role: "Trustee",
      qualification: "SSC",
      occupation: "Social Worker",
      bio: "Active in community healthcare awareness, Anganwadi coordination, and senior citizen welfare.",
      photo: "/images/board_g_lakshmi.jpg"
    }
  ],

  officeLocations: [
    {
      type: "Head Office",
      city: "Tirupati",
      state: "Andhra Pradesh",
      address: "Door No: 13-42, L.B. Nagar, Tirupati - 517502",
      phone: "(0877) 2244392",
      focus: "Central Administration, Strategy, Governance, Donor Relations",
      image: "/images/office_tirupati_head.jpg"
    },
    {
      type: "Field Office 1",
      city: "B.N. Kandriga",
      state: "Andhra Pradesh",
      address: "B.N. Kandriga Mandal, Tirupati District",
      focus: "Natural Farming, Azim Premji Foundation project, Yanadi Tribal Livelihoods",
      image: "/images/natural_farming_field.jpg"
    },
    {
      type: "Field Office 2",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      address: "Jakkampudi / Governor Peta, Vijayawada - 520002",
      focus: "Project DROP Plastic Waste, Child Development (CFI), Urban Slum Uplift",
      image: "/images/office_vijayawada.jpg"
    },
    {
      type: "Field Office 3",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "Visakhapatnam Coastal Division",
      focus: "Marine Litter, Project DROP Plastic Recycling, Beach Cleanups",
      image: "/images/office_vizag_drop.jpg"
    },
    {
      type: "Field Office 4",
      city: "Ambur",
      state: "Tamil Nadu",
      address: "Bonded Labour Project Office, Ambur, Tirupathur District",
      focus: "Anti-Trafficking, Rescue Operations, Released Bonded Labourers Association (RBLA)",
      image: "/images/office_ambur_bonded_labour.jpg"
    },
    {
      type: "Field Office 5",
      city: "Secunderabad / Hyderabad",
      state: "Telangana",
      address: "Project Coordination Office, Telangana Region",
      focus: "Trilinga Unorganised Workers Union (TUWU), Interstate Migrant Worker Protection",
      image: "/images/rescued_labourers_community.jpg"
    }
  ],

  partnersAndDonors: [
    { name: "India Literacy Project", logo: "/images/partner_ilp.jpg", type: "Education Partner" },
    { name: "Azim Premji Foundation", logo: "/images/partner_azim_premji.jpg", type: "Sustainable Agriculture" },
    { name: "ChildFund International", logo: "/images/partner_childfund.png", type: "Child Protection" },
    { name: "Nutrition International", logo: "/images/partner_nutrition_intl.png", type: "Public Health & USI" },
    { name: "Reserve Bank of India", logo: "/images/partner_rbi.jpg", type: "Financial Literacy" },
    { name: "Foundation for Sustainable Dev.", logo: "/images/partner_fsd.png", type: "Anti-Bonded Labour" },
    { name: "IPCA / Kia Motors CSR", logo: "/images/partner_ipca.png", type: "Project DROP" },
    { name: "Smile Foundation", logo: "/images/partner_smile.jpg", type: "Primary Education" },
    { name: "My Choices Foundation", logo: "/images/partner_mychoices.jpg", type: "Safe Village Program" },
    { name: "Sri City Foundation", logo: "/images/ppt-logo.jpg", type: "Tribal Livelihoods" },
    { name: "Govt. of Andhra Pradesh", logo: "/images/ppt-logo.jpg", type: "APIIATP & Social Welfare" },
    { name: "Goonj", logo: "/images/ppt-logo.jpg", type: "Disaster Relief & Rehabilitation" }
  ],

  annualReports: [
    {
      year: "2025 - 2026",
      title: "Annual Activity Report 2025-2026",
      theme: "Promoting Community Welfare, Protecting Children's Rights, and Empowering Vulnerable Tribal Communities",
      pages: "48 Pages",
      highlights: "489 Rescued Labourers, 17,179 Children, 441 AWCs, 8,643 Govt. Scheme Registrations, 43 MT Plastic Recycled",
      downloadName: "PPT_Annual_Report_2025_2026.pdf"
    },
    {
      year: "2024 - 2025",
      title: "Annual Activity Report 2024-2025",
      theme: "Advancing Grassroots Innovation, Sustainable Agriculture, and Youth Protection",
      pages: "27 Pages",
      highlights: "338 Bonded Labourers Rescued, 96 Safe Villages, 1,200 Salt Samples, APIIATP Water Works",
      downloadName: "PPT_Annual_Report_2024_2025.pdf"
    },
    {
      year: "2023 - 2024",
      title: "Annual Activity Report 2023-2024",
      theme: "Promoting Humanity, Opportunity, Prosperity and Equality in the Society",
      pages: "48 Pages",
      highlights: "372 Rescued Labourers, 153 Villages Covered, Jal Jeevan Mission, Universal Salt Iodization",
      downloadName: "PPT_Annual_Report_2023_2024.pdf"
    },
    {
      year: "2026",
      title: "Comprehensive Organization Profile 2026",
      theme: "Four Decades of Grassroots Transformation — Governance, Strategy, Audits & Future Roadmaps",
      pages: "16 Pages",
      highlights: "Detailed 12A/80G/FCRA credentials, Thematic Matrices, Staff Roster, and Infrastructure",
      downloadName: "PPT_Organization_Profile_2026.pdf"
    }
  ],

  targetCommunities: [
    {
      name: "Yanadi Indigenous Tribes",
      desc: "One of the most vulnerable aborigine Scheduled Tribes in Chittoor, Nellore, and Prakasam. Traditionally hunter-gatherers, now displaced by deforestation. PPT provides education, land rights, ZBNF farming, and women tailoring units."
    },
    {
      name: "Scheduled Castes / Dalits",
      desc: "Vulnerable rural wage workers subjected to debt-bondage and social discrimination. PPT enforces the POA Act 2016, ensures fair wages, and enables access to welfare sub-plans (SCP)."
    },
    {
      name: "Rescued Bonded Labourers",
      desc: "Families trapped in inter-generational debt-bondage in brick kilns, granite quarries, and agriculture. PPT provides release certificates, cash rehabilitation, and union representation."
    },
    {
      name: "Small & Marginal Farmers",
      desc: "Rain-fed agricultural households facing severe drought and high pesticide debt. PPT introduces organic bio-inputs, five-layer farming, and water-saving irrigation."
    },
    {
      name: "Rural & Slum Children / Adolescents",
      desc: "At-risk children in tribal hamlets and urban informal settlements. PPT prevents child marriage and school dropouts, running 79+ community learning centres."
    }
  ],

  testimonials: [
    {
      quote: "Before PPT stepped in, our family was bonded for three years at a brick kiln with no freedom and negligible wages. PPT coordinated with the district collector to issue our Release Certificates and provided seed support. Today my daughters go to school every morning.",
      author: "V. Govindamma",
      role: "Survivor & Community Leader, RBLA",
      location: "Chengalpattu District"
    },
    {
      quote: "The model Anganwadi center established by PPT transformed our village. With sitting circles, colorful TLM kits, and the nutrition garden, children run to the center with smiles. Parents now actively attend monitoring meetings.",
      author: "K. Sujatha",
      role: "Senior Anganwadi Teacher",
      location: "KVB Puram Mandal"
    },
    {
      quote: "Transitioning to Zero Budget Natural Farming with PPT and Azim Premji Foundation cut my cultivation expenditure by 60%. Using Jeevamrutham and crop water budgeting, my groundnut crop yielded bumper returns despite sparse rainfall.",
      author: "M. Ramanathan",
      role: "Organic Farmer, NFIG Lead",
      location: "Pallamala Village, B.N. Kandriga"
    }
  ]
};
