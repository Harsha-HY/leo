import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    trustName: "Praja Pragati Trust",
    trustBadge: "Praja Pragati Trust — Established 1983",
    trustSub: "Tirupati, Andhra Pradesh • Regd. 24/83",
    heroPrefix: "We’re a",
    typewriter: [
      "grassroots trust.",
      "human rights voice.",
      "child rights guardian.",
      "climate action pioneer.",
      "tribal land champion."
    ],
    heroDesc: "We help vulnerable communities launch sustainable livelihoods, protect child rights, eradicate bonded labour, and achieve equality.",
    btnSelectedWork: "Selected Work",
    btnDonate80G: "Donate (80G Tax-Exempt)",
    btnGetInTouch: "Get in touch",
    navHome: "Home",
    navAbout: "About Us",
    navOurWork: "Our Work",
    navAgriculture: "Agriculture & Environment",
    navChildDevelopment: "Child Development & Education",
    navWomenLivelihoods: "Women Empowerment & Livelihoods",
    navBondedLabour: "Bonded Labour & Tribal Welfare",
    navServices: "Services",
    navProjects: "Projects",
    navImpact: "Impact",
    navStories: "Stories & Updates",
    navTransparency: "Transparency",
    navGovernance: "Governance",
    navOffices: "Offices",
    navReports: "Reports",
    navContact: "Contact",
    navDonate: "Donate",
    statYears: "Years active in South India",
    statChildren: "Children & youth reached",
    statLabour: "Rescued from bonded labour",
    statFarming: "Acres natural farming",
    lensTitle: "The Grassroots Transformation Lens",
    lensSub: "Witness the real-world before and after transformation delivered by Praja Pragati Trust.",
    lensBeforeLabel: "BEFORE INTERVENTION",
    lensAfterLabel: "AFTER PPT ACTION",
    footerCopy: "All rights reserved. Registered under Indian Trusts Act 1882."
  },
  te: {
    trustName: "ప్రజా ప్రగతి ట్రస్ట్",
    trustBadge: "ప్రజా ప్రగతి ట్రస్ట్ — స్థాపన 1983",
    trustSub: "తిరుపతి, ఆంధ్రప్రదేశ్ • రిజిస్టర్డ్ 24/83",
    heroPrefix: "మేము ఒక",
    typewriter: [
      "ప్రజా ఉద్యమ ట్రస్ట్.",
      "మానవ హక్కుల వేదిక.",
      "బాలల హక్కుల రక్షకుడు.",
      "పర్యావరణ సంరక్షకుడు.",
      "గిరిజన భూమి హక్కుల పోరాటం."
    ],
    heroDesc: "మేము పేద, బడుగు, గిరిజన కుటుంబాల జీవనోపాధిని మెరుగుపరుస్తూ, వెట్టిచాకిరీని నిర్మూలిస్తూ, సమానత్వం కోసం నిరంతరం శ్రమిస్తున్నాం.",
    btnSelectedWork: "క్షేత్ర స్థాయి ప్రాజెక్టులు",
    btnDonate80G: "విరాళం ఇవ్వండి (80G పన్ను మినహాయింపు)",
    btnGetInTouch: "సంప్రదించండి",
    navHome: "హోమ్",
    navAbout: "మా గురించి",
    navOurWork: "మా కార్యక్రమాలు",
    navAgriculture: "వ్యవసాయం & పర్యావరణం",
    navChildDevelopment: "బాలల అభివృద్ధి & విద్య",
    navWomenLivelihoods: "మహిళా సాధికారత & జీవనోపాధి",
    navBondedLabour: "వెట్టిచాకిరీ నిర్మూలన & గిరిజన సంక్షేమం",
    navServices: "సేవలు",
    navProjects: "ప్రాజెక్టులు",
    navImpact: "ప్రభావం",
    navStories: "కథనాలు & అప్‌డేట్లు",
    navTransparency: "పారదర్శకత & నివేదికలు",
    navGovernance: "పాలకమండలి",
    navOffices: "కార్యాలయాలు",
    navReports: "వార్షిక నివేదికలు",
    navContact: "సంప్రదింపులు",
    navDonate: "విరాళం",
    statYears: "దక్షిణ భారతదేశంలో ప్రజాసేవ",
    statChildren: "విద్యా రక్షణ పొందిన బాలలు",
    statLabour: "వెట్టిచాకిరీ నుండి విముక్తి పొందినవారు",
    statFarming: "సేంద్రియ ప్రకృతి వ్యవసాయం",
    lensTitle: "క్షేత్ర స్థాయి మార్పు నిదర్శనం",
    lensSub: "ప్రజా ప్రగతి ట్రస్ట్ జోక్యంతో వెనుకబడిన కుటుంబాల జీవితాలలో వచ్చిన విప్లవాత్మక మార్పులను చూడండి.",
    lensBeforeLabel: "సమస్య / గత పరిస్థితి",
    lensAfterLabel: "ట్రస్ట్ చర్యల అనంతరం",
    footerCopy: "అన్ని హక్కులూ ప్రత్యేకించబడినవి. భారతీయ ట్రస్టుల చట్టం 1882."
  },
  ta: {
    trustName: "பிரஜா பிரகதி அறக்கட்டளை",
    trustBadge: "பிரஜா பிரகதி அறக்கட்டளை — நிறுவப்பட்டது 1983",
    trustSub: "திருப்பதி & ஆம்பூர் • பதிவு எண் 24/83",
    heroPrefix: "நாங்கள் ஒரு",
    typewriter: [
      "மக்கள் நல அறக்கட்டளை.",
      "மனித உரிமை குரல்.",
      "குழந்தைகள் பாதுகாப்பு இயக்கம்.",
      "சுற்றுச்சூழல் விடியல்.",
      "கொத்தடிமை ஒழிப்பு போராட்டம்."
    ],
    heroDesc: "கொத்தடிமை முறை ஒழிப்பு, பழங்குடியினர் வாழ்வாதாரம் மற்றும் குழந்தைகள் உரிமைகளுக்காக 41 ஆண்டுகளாக தொடர்ந்து செயல்படுகிறோம்.",
    btnSelectedWork: "எங்கள் திட்டங்கள்",
    btnDonate80G: "நன்கொடை (80G வரிவிலக்கு)",
    btnGetInTouch: "தொடர்பு கொள்ள",
    navHome: "முகப்பு",
    navAbout: "அறிமுகம்",
    navOurWork: "எங்கள் பணிகள்",
    navAgriculture: "விவசாயம் & சுற்றுச்சூழல்",
    navChildDevelopment: "குழந்தைகள் வளர்ச்சி & கல்வி",
    navWomenLivelihoods: "பெண்கள் வாழ்வாதாரம்",
    navBondedLabour: "கொத்தடிமை ஒழிப்பு & பழங்குடியினர் நலம்",
    navServices: "சேவைகள்",
    navProjects: "பணிகள்",
    navImpact: "தாக்கம்",
    navStories: "களக்கதைகள் & செய்திகள்",
    navTransparency: "வெளிப்படைத்தன்மை & தணிக்கை",
    navGovernance: "நிர்வாகம்",
    navOffices: "அலுவலகங்கள்",
    navReports: "அறிக்கைகள்",
    navContact: "தொடர்பு",
    navDonate: "நன்கொடை",
    statYears: "ஆண்டுகள் மக்கள் சேவை",
    statChildren: "கல்வி பெற்ற குழந்தைகள்",
    statLabour: "மீட்கப்பட்ட கொத்தடிமைகள்",
    statFarming: "ஏக்கர் இயற்கை விவசாயம்",
    lensTitle: "உண்மை கள மாற்றத்தின் சான்று",
    lensSub: "பிரஜா பிரகதி அறக்கட்டளையின் செயல்பாட்டினால் மக்களின் வாழ்வில் ஏற்பட்ட புரட்சிகர மாற்றத்தை காணுங்கள்.",
    lensBeforeLabel: "முந்தைய நிலை",
    lensAfterLabel: "மீட்புக்கு பிந்தைய வாழ்வு",
    footerCopy: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இந்திய அறக்கட்டளை சட்டம் 1882."
  },
  hi: {
    trustName: "प्रजा प्रगति ट्रस्ट",
    trustBadge: "प्रजा प्रगति ट्रस्ट — स्थापित 1983",
    trustSub: "तिरुपति, आंध्र प्रदेश • पंजी. 24/83",
    heroPrefix: "हम एक",
    typewriter: [
      "जन कल्याण ट्रस्ट हैं.",
      "मानवाधिकार के संरक्षक हैं.",
      "बाल अधिकार रक्षक हैं.",
      "प्राकृतिक कृषि के अग्रदूत हैं.",
      "बंधुआ मजदूरी उन्मूलन क्रांति हैं."
    ],
    heroDesc: "हम 41 वर्षों से दक्षिण भारत में कमजोर वर्गों के सतत विकास, बाल अधिकारों की रक्षा और बंधुआ मजदूरी मुक्ति के लिए समर्पित हैं।",
    btnSelectedWork: "प्रमुख परियोजनाएं",
    btnDonate80G: "दान दें (80G कर छूट प्राप्त)",
    btnGetInTouch: "संपर्क करें",
    navHome: "होम",
    navAbout: "परिचय",
    navOurWork: "हमारी कार्यशैली",
    navAgriculture: "कृषि व पर्यावरण",
    navChildDevelopment: "बाल विकास एवं शिक्षा",
    navWomenLivelihoods: "महिला सशक्तिकरण व आजीविका",
    navBondedLabour: "बंधुआ मजदूरी उन्मूलन व आदिवासी कल्याण",
    navServices: "सेवाएं",
    navProjects: "परियोजनाएं",
    navImpact: "प्रभाव",
    navStories: "कहानियां व अपडेट",
    navTransparency: "पारदर्शिता व ऑडिट",
    navGovernance: "प्रबंधन",
    navOffices: "शाखाएं",
    navReports: "वार्षिक रिपोर्ट",
    navContact: "संपर्क",
    navDonate: "दान करें",
    statYears: "वर्षों की निरंतर जनसेवा",
    statChildren: "लाभान्वित बच्चे व किशोर",
    statLabour: "बंधुआ मजदूरी से मुक्त मजदूर",
    statFarming: "एकड़ प्राकृतिक जैविक खेती",
    lensTitle: "वास्तविक बदलाव का 3D दृश्य",
    lensSub: "प्रजा प्रगति ट्रस्ट द्वारा हाशिए पर मौजूद परिवारों के जीवन में लाए गए वास्तविक परिवर्तन को देखें।",
    lensBeforeLabel: "पहले की स्थिति",
    lensAfterLabel: "ट्रस्ट के हस्तक्षेप के बाद",
    footerCopy: "सर्वाधिकार सुरक्षित। भारतीय ट्रस्ट अधिनियम 1882 के तहत पंजीकृत।"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    // Check if a language was previously stored
    try {
      const saved = localStorage.getItem('ppt_language');
      return saved || 'en';
    } catch {
      return 'en';
    }
  });

  const t = translations[lang] || translations.en;

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' }
  ];

  // Helper function to programmatically trigger Google Translate for the entire website
  const triggerGoogleTranslate = (targetLang) => {
    try {
      const code = targetLang === 'en' ? '' : targetLang;
      // Set the standard google translate cookie
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${targetLang}; path=/;`;
      document.cookie = `googtrans=/en/${targetLang}; domain=.${domain}; path=/;`;
      if (domain !== 'localhost') {
        document.cookie = `googtrans=/en/${targetLang}; domain=${domain}; path=/;`;
      }

      // Also trigger the combo box if available in DOM
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
      } else {
        // If not loaded yet, retry a few times
        let retries = 0;
        const interval = setInterval(() => {
          retries++;
          const combo = document.querySelector('.goog-te-combo');
          if (combo) {
            combo.value = targetLang;
            combo.dispatchEvent(new Event('change'));
            clearInterval(interval);
          }
          if (retries > 10) clearInterval(interval);
        }, 300);
      }
    } catch (err) {
      console.warn("Translation trigger notice:", err);
    }
  };

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('ppt_language', newLang);
    } catch (e) {}
    triggerGoogleTranslate(newLang);
  };

  useEffect(() => {
    // On initial mount, sync if stored language is non-English
    if (lang && lang !== 'en') {
      triggerGoogleTranslate(lang);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
