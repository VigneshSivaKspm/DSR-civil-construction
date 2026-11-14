import { BuildingIdea, VerifiedProject } from "../types";

/**
 * Verified Projects
 * Kept tied strictly to verified client scope without invented claims or dates.
 */
export const verifiedProjects: VerifiedProject[] = [
  {
    id: "residential-residence-01",
    title: "Contemporary Multi-Level Residence",
    type: "Independent Residential",
    location: "Tamil Nadu",
    stage: "Structural Execution & Finishing",
    scope: "RCC framed structure, cantilevered sunshades, brick masonry, and internal courtyards",
    description: "An independent residence configured for natural ventilation and thermal protection. The structural frame incorporates deep cantilevered overhangs on south and west facades to minimise solar heat gain, paired with high-volume ceiling spans on the ground floor.",
    heroImage: "/images/architecture/hero-home.webp",
    gallery: [
      {
        url: "/images/architecture/hero-home.webp",
        caption: "West facade with deep architectural sunshade and shaded terrace balcony.",
        alt: "Contemporary Indian residence showing cantilevered roofline and shaded balconies against blue sky",
      },
      {
        url: "/images/architecture/material-junction.webp",
        caption: "Material junction: concrete slab edge, exposed wire-cut brickwork, and recessed glazing.",
        alt: "Close-up of architectural material junction with concrete and exposed masonry",
      },
      {
        url: "/images/architecture/work-in-progress.webp",
        caption: "Reinforced cement concrete column casting and curing sequence.",
        alt: "Civil construction site with reinforced concrete framework and formwork",
      },
      {
        url: "/images/architecture/drawing-desk.webp",
        caption: "Detailed architectural drawings and structural schedule for site coordination.",
        alt: "Architectural blueprints and elevation drawings on drafting table",
      }
    ],
    isApproved: true,
  },
];

/**
 * Building Ideas (#ideas)
 * Conceptual design studies demonstrating practical architectural decisions for plot owners.
 * Each caption highlights one visible design decision.
 */
export const buildingIdeas: BuildingIdea[] = [
  {
    id: "shaded-verandah",
    title: "Shaded Verandah",
    subtitle: "Climate-responsive threshold",
    image: "/images/architecture/idea-verandah.webp",
    alt: "Contemporary shaded verandah with natural stone paving and deep roof overhang",
    designDecision: "Deep roof overhangs shade ground-floor glazing from intense afternoon sun while creating an all-weather outdoor threshold for family gatherings.",
    explanation: "By extending the slab edge 2.4 meters past the glass line, the verandah reduces indoor cooling load substantially during summer months and keeps driving monsoon rains away from exterior doors.",
    enquiryTopic: "Shaded Verandah Concept",
  },
  {
    id: "top-lit-stairwell",
    title: "Stairwell Lit from Above",
    subtitle: "Vertical daylighting core",
    image: "/images/architecture/idea-stairwell.webp",
    alt: "Minimalist concrete and timber stairwell illuminated by a skylight opening directly overhead",
    designDecision: "A top-lit skylight draws natural daylight deep into the building core, illuminating vertical circulation without compromising perimeter wall privacy.",
    explanation: "In dense residential plots where neighbouring boundaries limit side windows, an overhead lightwell channels soft daylight down two floors, eliminating the need for artificial daytime lighting.",
    enquiryTopic: "Stairwell Lightwell Concept",
  },
  {
    id: "recessed-shopfront",
    title: "Shopfront with a Recessed Entrance",
    subtitle: "Pedestrian street interface",
    image: "/images/architecture/idea-shopfront.webp",
    alt: "Modern commercial storefront recessed under a clean architectural canopy",
    designDecision: "The entrance sits back from the street, giving customers a shaded place to pause.",
    explanation: "Recessing the main doorway by 1.8 meters shields the entrance from road dust and sudden downpours while providing an intuitive, welcoming transition zone between the bustling street and commercial interior.",
    enquiryTopic: "Recessed Entrance Concept",
  },
];
