import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    trustName: "Praja Pragati Trust",
    trustBadge: "Praja Pragati Trust — Established 1983",
    tagline: "Empowering Communities Since 1983",
    trustSub: "Tirupati, Andhra Pradesh • Regd. 24/83",
    heroHeading1: "Stronger Communities.",
    heroHeading2: "Shared Futures.",
    typewriterPhrases: [
      "Shared Futures.",
      "Child Rights Guardians.",
      "Natural Farming Pioneers.",
      "Bonded Labour Abolitionists.",
      "Empowered Communities."
    ],
    heroSubtitle: "Working with communities towards education, a healthy environment and sustainable livelihoods across South India since 1983.",
    btnExploreWork: "Explore Our Work",
    btnDonateNow: "Donate ♡",
    btnDonate80G: "Donate (80G Tax-Exempt)",
    btnGetInTouch: "Get in touch",
    navHome: "Home",
    navAbout: "About Us",
    navOurWork: "Our Work",
    navWork: "Our Work",
    navAgriculture: "Agriculture & Environment",
    navChildDevelopment: "Child Development & Education",
    navWomenLivelihoods: "Women Empowerment & Livelihoods",
    navBondedLabour: "Bonded Labour & Tribal Welfare",
    navServices: "Services",
    navProjects: "Projects",
    navImpact: "Impact",
    navStories: "Stories & Updates",
    navTransparency: "Transparency",
    navResources: "Resources",
    navGovernance: "Governance",
    navOffices: "Offices",
    navContact: "Get Involved",
    navDonate: "Donate",
    statEstablished: "1983",
    statEstablishedLabel: "Established",
    statChildrenCurrent: "18,000+",
    statChildrenLabel: "Children reached (Current)",
    statAnganwadis: "222",
    statAnganwadisLabel: "Anganwadi Centres",
    statSchools: "91",
    statSchoolsLabel: "Schools",
    statStates: "3",
    statStatesLabel: "States (AP, Telangana, Tamil Nadu)",
    focusEyebrow: "OUR FOCUS AREAS",
    focusHeading: "Our Three Areas of Impact",
    focus1Title: "Children's Education, Rights & Entitlements",
    focus1Desc: "Remedial learning, early childhood education, and child rights advocacy across 91 schools and 222 anganwadis.",
    focus2Title: "Environment Protection & Sustainable Agriculture",
    focus2Desc: "Five-layer natural farming, indigenous seed revival, and climate resilience empowering 5,000+ farmer families.",
    focus3Title: "Women Empowerment & Livelihoods",
    focus3Desc: "Self-help group federations, dignified micro-enterprises, and rehabilitation of rescued bonded labourers.",
    otherInterventions: "Other Interventions",
    tagPlastic: "Plastic Waste Management",
    tagFinance: "Financial Literacy & Inclusion",
    tagBonded: "Bonded Labour Prevention & Rehabilitation",
    tagCommunity: "Community Institutions & Capacity Building",
    lensTitle: "The Grassroots Transformation Lens",
    lensSub: "Witness the real-world before and after transformation delivered by Praja Pragati Trust.",
    lensBeforeLabel: "BEFORE INTERVENTION",
    lensAfterLabel: "AFTER PPT ACTION",
    footerCopy: "All rights reserved. Registered under Indian Trusts Act 1882."
  },
  te: {
    trustName: "ప్రజా ప్రగతి ట్రస్ట్",
    trustBadge: "ప్రజా ప్రగతి ట్రస్ట్ — స్థాపన 1983",
    tagline: "1983 నుండి ప్రజా సేవా సాధికారత",
    trustSub: "తిరుపతి, ఆంధ్రప్రదేశ్ • రిజిస్టర్డ్ 24/83",
    heroHeading1: "బలమైన సమాజం.",
    heroHeading2: "ఉజ్వల భవిష్యత్తు.",
    typewriterPhrases: [
      "ఉజ్వల భవిష్యత్తు.",
      "బాలల హక్కుల రక్షణ.",
      "సేంద్రీయ ప్రకృతి వ్యవసాయం.",
      "వెట్టిచాకిరీ నిర్మూలన.",
      "ప్రజా సేవా సాధికారత."
    ],
    heroSubtitle: "1983 నుండి దక్షిణ భారతదేశంలో విద్య, ఆరోగ్యకర పర్యావరణం మరియు స్థిరమైన జీవనోపాధి కోసం నిరంతరం ప్రజా పోరాటం.",
    btnExploreWork: "మా కార్యక్రమాలు చూడండి",
    btnDonateNow: "విరాళం ఇవ్వండి ♡",
    btnDonate80G: "విరాళం ఇవ్వండి (80G పన్ను మినహాయింపు)",
    btnGetInTouch: "సంప్రదించండి",
    navHome: "హోమ్",
    navAbout: "మా గురించి",
    navOurWork: "మా కార్యక్రమాలు",
    navWork: "మా కార్యక్రమాలు",
    navAgriculture: "వ్యవసాయం & పర్యావరణం",
    navChildDevelopment: "బాలల అభివృద్ధి & విద్య",
    navWomenLivelihoods: "మహిళా సాధికారత & జీవనోపాధి",
    navBondedLabour: "వెట్టిచాకిరీ నిర్మూలన & గిరిజన సంక్షేమం",
    navServices: "సేవలు",
    navProjects: "ప్రాజెక్టులు",
    navImpact: "ప్రభావం",
    navStories: "కథనాలు & అప్‌డేట్లు",
    navTransparency: "పారదర్శకత & నివేదికలు",
    navResources: "వనరులు",
    navGovernance: "పాలకమండలి",
    navOffices: "కార్యాలయాలు",
    navContact: "సంప్రదింపులు",
    navDonate: "విరాళం",
    statEstablished: "1983",
    statEstablishedLabel: "స్థాపన",
    statChildrenCurrent: "18,000+",
    statChildrenLabel: "విద్యా రక్షణ పొందిన బాలలు",
    statAnganwadis: "222",
    statAnganwadisLabel: "అంగన్‌వాడీ కేంద్రాలు",
    statSchools: "91",
    statSchoolsLabel: "పాఠశాలలు",
    statStates: "3",
    statStatesLabel: "రాష్ట్రాలు (ఏపీ, తెలంగాణ, తమిళనాడు)",
    focusEyebrow: "మా ప్రధాన సేవా రంగాలు",
    focusHeading: "మా మూడు ప్రధాన ప్రభావ రంగాలు",
    focus1Title: "బాలల విద్య, హక్కులు & రక్షణ",
    focus1Desc: "91 పాఠశాలలు మరియు 222 అంగన్‌వాడీలలో నాణ్యమైన విద్య, బాలకార్మిక నిర్మూలన మరియు గ్రంథాలయాల ఏర్పాటు.",
    focus2Title: "పర్యావరణ పరిరక్షణ & ప్రకృతి వ్యవసాయం",
    focus2Desc: "5-అంచెల సేంద్రీయ ప్రకృతి వ్యవసాయం, దేశీ విత్తనాల పరిరక్షణ మరియు 5,000+ రైతు కుటుంబాలకు చేయూత.",
    focus3Title: "మహిళా సాధికారత & గౌరవప్రద జీవనోపాధి",
    focus3Desc: "మహిళా స్వయం సహాయక సంఘాలు, సూక్ష్మ పరిశ్రమలు మరియు వెట్టిచాకిరీ బాధితులకు పునరావాసం.",
    otherInterventions: "ఇతర ప్రజా సేవలు",
    tagPlastic: "ప్లాస్టిక్ వ్యర్థాల నిర్వహణ",
    tagFinance: "ఆర్థిక అక్షరాస్యత & బ్యాంకింగ్ సేవలు",
    tagBonded: "వెట్టిచాకిరీ నివారణ & పునరావాసం",
    tagCommunity: "గ్రామ స్వరాజ్ & ప్రజా సంఘాల నిర్మాణం",
    lensTitle: "క్షేత్ర స్థాయి మార్పు నిదర్శనం",
    lensSub: "ప్రజా ప్రగతి ట్రస్ట్ జోక్యంతో వెనుకబడిన కుటుంబాల జీవితాలలో వచ్చిన విప్లవాత్మక మార్పులను చూడండి.",
    lensBeforeLabel: "సమస్య / గత పరిస్థితి",
    lensAfterLabel: "ట్రస్ట్ చర్యల అనంతరం",
    footerCopy: "అన్ని హక్కులూ ప్రత్యేకించబడినవి. భారతీయ ట్రస్టుల చట్టం 1882."
  },
  ta: {
    trustName: "பிரஜா பிரகதி அறக்கட்டளை",
    trustBadge: "பிரஜா பிரகதி அறக்கட்டளை — நிறுவப்பட்டது 1983",
    tagline: "1983 முதல் மக்கள் அதிகாரம்",
    trustSub: "திருப்பதி & ஆம்பூர் • பதிவு எண் 24/83",
    heroHeading1: "வலுவான சமூகம்.",
    heroHeading2: "ஒளிரும் எதிர்காலம்.",
    typewriterPhrases: [
      "ஒளிரும் எதிர்காலம்.",
      "குழந்தைகள் பாதுகாப்பு.",
      "இயற்கை விவசாயம்.",
      "கொத்தடிமை ஒழிப்பு.",
      "மக்கள் அதிகாரம்."
    ],
    heroSubtitle: "கல்வி, தூய சுற்றுச்சூழல் மற்றும் நிலையான வாழ்வாதாரத்தை நோக்கி 1983 முதல் மக்களுடன் இணைந்து செயல்படுகிறோம்.",
    btnExploreWork: "எங்கள் பணிகள்",
    btnDonateNow: "நன்கொடை ♡",
    btnDonate80G: "நன்கொடை (80G வரிவிலக்கு)",
    btnGetInTouch: "தொடர்பு கொள்ள",
    navHome: "முகப்பு",
    navAbout: "அறிமுகம்",
    navOurWork: "எங்கள் பணிகள்",
    navWork: "எங்கள் பணி",
    navAgriculture: "விவசாயம் & சுற்றுச்சூழல்",
    navChildDevelopment: "குழந்தைகள் வளர்ச்சி & கல்வி",
    navWomenLivelihoods: "பெண்கள் வாழ்வாதாரம்",
    navBondedLabour: "கொத்தடிமை ஒழிப்பு & பழங்குடியினர் நலம்",
    navServices: "சேவைகள்",
    navProjects: "பணிகள்",
    navImpact: "தாக்கம்",
    navStories: "களக்கதைகள் & செய்திகள்",
    navTransparency: "வெளிப்படைத்தன்மை & தணிக்கை",
    navResources: "ஆவணங்கள்",
    navGovernance: "நிர்வாகம்",
    navOffices: "அலுவலகங்கள்",
    navContact: "இணையுங்கள்",
    navDonate: "நன்கொடை",
    statEstablished: "1983",
    statEstablishedLabel: "நிறுவப்பட்டது",
    statChildrenCurrent: "18,000+",
    statChildrenLabel: "கல்வி பெற்ற குழந்தைகள்",
    statAnganwadis: "222",
    statAnganwadisLabel: "அங்கன்வாடி மையங்கள்",
    statSchools: "91",
    statSchoolsLabel: "பள்ளிகள்",
    statStates: "3",
    statStatesLabel: "மாநிலங்கள் (ஆந்திரா, தெலுங்கானா, தமிழ்நாடு)",
    focusEyebrow: "எங்கள் முக்கிய துறைகள்",
    focusHeading: "எங்கள் மூன்று முக்கிய தாக்கங்கள்",
    focus1Title: "குழந்தைகள் கல்வி, உரிமைகள் & பாதுகாப்பு",
    focus1Desc: "91 பள்ளிகள் மற்றும் 222 அங்கன்வாடிகளில் கற்றல் உதவி, குழந்தை தொழிலாளர் ஒழிப்பு மற்றும் பாதுகாப்பு.",
    focus2Title: "சுற்றுச்சூழல் பாதுகாப்பு & இயற்கை விவசாயம்",
    focus2Desc: "5 அடுக்கு இயற்கை விவசாயம், பாரம்பரிய விதைகள் பாதுகாப்பு மற்றும் 5,000+ விவசாய குடும்பங்கள் ஆதரவு.",
    focus3Title: "பெண்கள் அதிகாரம் & வாழ்வாதாரம்",
    focus3Desc: "சுயஉதவி குழுக்கள், வாழ்வாதார பயிற்சிகள் மற்றும் கொத்தடிமை முறையிலிருந்து மீட்கப்பட்டோருக்கு மறுவாழ்வு.",
    otherInterventions: "இதர களப்பணிகள்",
    tagPlastic: "பிளாஸ்டிக் கழிவு மேலாண்மை",
    tagFinance: "நிதி கல்வி & வங்கி சேர்க்கை",
    tagBonded: "கொத்தடிமை தடுப்பு & மறுவாழ்வு",
    tagCommunity: "கிராம ஸ்வராஜ் & சமூகக் கூட்டமைப்புகள்",
    lensTitle: "உண்மை கள மாற்றத்தின் சான்று",
    lensSub: "பிரஜா பிரகதி அறக்கட்டளையின் செயல்பாட்டினால் மக்களின் வாழ்வில் ஏற்பட்ட புரட்சிகர மாற்றத்தை காணுங்கள்.",
    lensBeforeLabel: "முந்தைய நிலை",
    lensAfterLabel: "மீட்புக்கு பிந்தைய வாழ்வு",
    footerCopy: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இந்திய அறக்கட்டளை சட்டம் 1882."
  },
  hi: {
    trustName: "प्रजा प्रगति ट्रस्ट",
    trustBadge: "प्रजा प्रगति ट्रस्ट — स्थापित 1983",
    tagline: "1983 से निरंतर जन सशक्तिकरण",
    trustSub: "तिरुपति, आंध्र प्रदेश • पंजी. 24/83",
    heroHeading1: "सशक्त समुदाय।",
    heroHeading2: "उज्ज्वल भविष्य।",
    typewriterPhrases: [
      "उज्ज्वल भविष्य।",
      "बाल अधिकार संरक्षण।",
      "प्राकृतिक जैविक खेती।",
      "बंधुआ मजदूरी उन्मूलन।",
      "जन सशक्तिकरण।"
    ],
    heroSubtitle: "1983 से दक्षिण भारत में शिक्षा, स्वस्थ पर्यावरण और सम्मानजनक आजीविका के लिए समुदायों के साथ समर्पित प्रयास।",
    btnExploreWork: "हमारी कार्यप्रणाली",
    btnDonateNow: "दान दें ♡",
    btnDonate80G: "दान दें (80G कर छूट)",
    btnGetInTouch: "संपर्क करें",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navOurWork: "हमारी कार्यशैली",
    navWork: "हमारा कार्य",
    navAgriculture: "कृषि व पर्यावरण",
    navChildDevelopment: "बाल विकास एवं शिक्षा",
    navWomenLivelihoods: "महिला सशक्तिकरण व आजीविका",
    navBondedLabour: "बंधुआ मजदूरी उन्मूलन व आदिवासी कल्याण",
    navServices: "सेवाएं",
    navProjects: "परियोजनाएं",
    navImpact: "प्रभाव",
    navStories: "कहानियां व अपडेट",
    navTransparency: "पारदर्शिता व ऑडिट",
    navResources: "संसाधन",
    navGovernance: "प्रबंधन",
    navOffices: "शाखाएं",
    navContact: "जुड़ें",
    navDonate: "दान करें",
    statEstablished: "1983",
    statEstablishedLabel: "स्थापना वर्ष",
    statChildrenCurrent: "18,000+",
    statChildrenLabel: "लाभान्वित बच्चे व किशोर",
    statAnganwadis: "222",
    statAnganwadisLabel: "आंगनवाड़ी केंद्र",
    statSchools: "91",
    statSchoolsLabel: "विद्यालय",
    statStates: "3",
    statStatesLabel: "राज्य (आंध्र, तेलंगाना, तमिलनाडु)",
    focusEyebrow: "हमारे कार्यक्षेत्र",
    focusHeading: "हमारे तीन प्रमुख प्रभाव क्षेत्र",
    focus1Title: "बाल शिक्षा, अधिकार एवं संरक्षण",
    focus1Desc: "91 विद्यालयों और 222 आंगनवाड़ियों में गुणवत्तापूर्ण प्रारंभिक शिक्षा, बाल अधिकार व पुस्तकालय सहायता।",
    focus2Title: "पर्यावरण संरक्षण एवं प्राकृतिक कृषि",
    focus2Desc: "पंच-स्तरीय प्राकृतिक जैविक खेती, पारंपरिक बीज संवर्धन और 5,000+ किसान परिवारों की आत्मनिर्भरता।",
    focus3Title: "महिला सशक्तिकरण एवं आजीविका",
    focus3Desc: "स्वयं सहायता समूह महासंघ, सूक्ष्म उद्यम और बंधुआ मजदूरी से मुक्त श्रमिकों का सम्मानजनक पुनर्वास।",
    otherInterventions: "अन्य प्रमुख हस्तक्षेप",
    tagPlastic: "प्लास्टिक कचरा प्रबंधन",
    tagFinance: "वित्तीय साक्षरता व समावेशन",
    tagBonded: "बंधुआ मजदूरी उन्मूलन एवं पुनर्वास",
    tagCommunity: "ग्राम स्वराज एवं समुदाय निर्माण",
    lensTitle: "वास्तविक बदलाव का दृश्य",
    lensSub: "प्रजा प्रगति ट्रस्ट द्वारा हाशिए पर मौजूद परिवारों के जीवन में लाए गए वास्तविक परिवर्तन को देखें।",
    lensBeforeLabel: "पहले की स्थिति",
    lensAfterLabel: "ट्रस्ट के हस्तक्षेप के बाद",
    footerCopy: "सर्वाधिकार सुरक्षित। भारतीय ट्रस्ट अधिनियम 1882 के तहत पंजीकृत।"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
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

  const triggerGoogleTranslate = (targetLang) => {
    try {
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${targetLang}; path=/;`;
      document.cookie = `googtrans=/en/${targetLang}; domain=.${domain}; path=/;`;
      if (domain !== 'localhost') {
        document.cookie = `googtrans=/en/${targetLang}; domain=${domain}; path=/;`;
      }

      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
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
