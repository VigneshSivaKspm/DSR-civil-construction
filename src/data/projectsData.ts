import { BuildingIdea, VerifiedProject } from "../types";

/**
 * Verified Projects
 * Kept tied strictly to verified client scope without invented claims or dates.
 * Sub-content provided in authentic Tamil.
 */
export const verifiedProjects: VerifiedProject[] = [
  {
    id: "residential-residence-01",
    title: "Contemporary Multi-Level Residence",
    type: "Independent Residential",
    location: "Tamil Nadu",
    stage: "Structural Execution & Finishing",
    scope: "ஆர்.சி.சி கட்டமைப்புத் தூண்கள், சூரிய வெப்பம் தடுக்கும் சன்ஷேடுகள், செங்கல் கட்டுமானம் மற்றும் காற்றோட்டமான உள் முற்றங்கள்",
    description: "இயற்கையான காற்றோட்டம் மற்றும் வெப்பத் தணிப்பிற்காக வடிவமைக்கப்பட்ட தனித்துவமான இல்லம். தெற்கு மற்றும் மேற்குப் பகுதிகளில் சூரிய வெப்பத்தைத் தடுக்கும் ஆழமான கான்கிரீட் சன்ஷேடுகளும், தரைத்தளத்தில் விசாலமான கூரை அமைப்பும் ஒருங்கிணைக்கப்பட்டுள்ளன.",
    heroImage: "/images/architecture/hero-home.webp",
    gallery: [
      {
        url: "/images/architecture/hero-home.webp",
        caption: "மேற்கு முகப்பு: ஆழமான கட்டடக்கலை சன்ஷேடு மற்றும் நிழல் தரும் மாடி பால்கனி.",
        alt: "Contemporary Indian residence showing cantilevered roofline and shaded balconies against blue sky",
      },
      {
        url: "/images/architecture/material-junction.webp",
        caption: "கட்டுமானப் பொருட்கள் இணைப்பு: கான்கிரீட் தளம், வெளிப்புற செங்கல் வேலைப்பாடு மற்றும் கண்ணாடியின் நேர்த்தி.",
        alt: "Close-up of architectural material junction with concrete and exposed masonry",
      },
      {
        url: "/images/architecture/work-in-progress.webp",
        caption: "ஆர்.சி.சி தூண்கள் கான்கிரீட் ஊற்றுதல் மற்றும் நீர் ஊற்றிப் பதப்படுத்துதல் (Curing).",
        alt: "Civil construction site with reinforced concrete framework and formwork",
      },
      {
        url: "/images/architecture/drawing-desk.webp",
        caption: "களப் பணிகளுக்கான விரிவான கட்டடக்கலை வரைபடம் மற்றும் கட்டமைப்பு விவரங்கள்.",
        alt: "Architectural blueprints and elevation drawings on drafting table",
      }
    ],
    isApproved: true,
  },
];

/**
 * Building Ideas (#ideas)
 * Conceptual design studies demonstrating practical architectural decisions for plot owners.
 * Sub-content and explanations provided in authentic Tamil.
 */
export const buildingIdeas: BuildingIdea[] = [
  {
    id: "shaded-verandah",
    title: "Shaded Verandah",
    subtitle: "தட்பவெப்ப நிலைக்கு ஏற்ற நுழைவு முற்றம்",
    image: "/images/architecture/idea-verandah.webp",
    alt: "Contemporary shaded verandah with natural stone paving and deep roof overhang",
    designDecision: "ஆழமான கூரை அமைப்புகள் பிற்பகல் சூரிய வெப்பத்திலிருந்து தரைத்தளக் கண்ணாடியைப் பாதுகாத்து, குடும்பத்தினர் ஒன்றுகூடும் அனைத்துக் காலநிலைகளுக்குமான வெளிப்புறத் திண்ணையை உருவாக்குகின்றன.",
    explanation: "கண்ணாடி சுவரிலிருந்து 2.4 மீட்டர் தூரம் வரை கான்கிரீட் தளத்தை நீட்டிப்பதன் மூலம், கோடை காலத்தில் வீட்டின் உட்புற குளிர்ச்சி செலவு பெருமளவு குறைகிறது மற்றும் பருவமழைச்சாரல் கதவுகளின் மீது நேரடியாக அடிப்பதைத் தடுக்கிறது.",
    enquiryTopic: "Shaded Verandah Concept",
  },
  {
    id: "top-lit-stairwell",
    title: "Stairwell Lit from Above",
    subtitle: "மேலிருந்து இயற்கை வெளிச்சம் தரும் படிக்கட்டு",
    image: "/images/architecture/idea-stairwell.webp",
    alt: "Minimalist concrete and timber stairwell illuminated by a skylight opening directly overhead",
    designDecision: "மேற்கூரையில் அமைக்கப்பட்டுள்ள ஸ்கைலைட் (Skylight) ஜன்னல் வழியாக கட்டிடத்தின் மையப்பகுதி வரை இயற்கை வெளிச்சம் பாய்கிறது; சுவர்களின் தனிப்பட்ட சுதந்திரத்தைப் பாதிக்காமல் வெளிச்சம் கிடைக்கிறது.",
    explanation: "அக்கம்பக்கத்து மனைகளால் பக்கவாட்டு ஜன்னல்கள் அமைக்க முடியாத நெருக்கமான இடங்களில், மேலிருந்து வரும் மென்மையான வெளிச்சம் இரண்டு தளங்களுக்கும் பகலில் மின்சார விளக்கின் தேவையின்றிப் பிரகாசமளிக்கிறது.",
    enquiryTopic: "Stairwell Lightwell Concept",
  },
  {
    id: "recessed-shopfront",
    title: "Shopfront with a Recessed Entrance",
    subtitle: "பாதசாரிகளுக்கான வசதியான கடை நுழைவாயில்",
    image: "/images/architecture/idea-shopfront.webp",
    alt: "Modern commercial storefront recessed under a clean architectural canopy",
    designDecision: "நுழைவாயில் சாலையிலிருந்து சற்று உள்வாங்கி அமைக்கப்பட்டிருப்பதால், வாடிக்கையாளர்கள் நிழலில் சற்று இளைப்பாறி வர ஏதுவாகிறது.",
    explanation: "பிரதான கதவை 1.8 மீட்டர் உள்வாங்கி அமைப்பது தெருவின் புழுதி மற்றும் திடீர் மழையிலிருந்து நுழைவாயிலைப் பாதுகாப்பதோடு, பரபரப்பான தெருவிலிருந்து கடைக்குள் நுழைய ஒரு அமைதியான வரவேற்புப் பகுதியை வழங்குகிறது.",
    enquiryTopic: "Recessed Entrance Concept",
  },
];
