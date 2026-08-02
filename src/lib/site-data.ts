export const site = {
  name: "Abbu Turab",
  short: "A.T Developers",
  fullName: "Abbu Turab — Design Studio & Construction Developers",
  tagline: "your vision, our expertise",
  logo: "/logo.png",
  address: "Plaza # 81 MB, Sector H, DHA Phase 6, Lahore",
  address2: "Plot C, 11, Sector C, DHA Phase 6, Lahore, 54792",
  email: "info@abbuturab.com",
  phone: "+92 336 9661111",
  phoneTel: "+923369661111",
  website: "abbuturab.com",
  facebook: "https://www.facebook.com/share/1DAStPwLQT/",
  whatsapp:
    "https://wa.me/923369661111?text=Hello%20Abbu%20Turab%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.",
  hours: [
    { day: "Monday to Thursday", time: "10am to 7pm" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday & Sunday", time: "10am to 7pm" },
    
  ],
};

/** Both office addresses — shown in the footer and on the contact page. */
export const offices = [
  {
    label: "Head office",
    address: "Plaza # 81 MB, Sector H, DHA Phase 6, Lahore",
    map: "https://www.google.com/maps?q=Plaza%2081%20MB%20Sector%20H%20DHA%20Phase%206%20Lahore&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Plaza+81+MB+Sector+H+DHA+Phase+6+Lahore",
  },
  {
    label: "Design studio",
    address: "Plot C, 11, Sector C, DHA Phase 6, Lahore, 54792",
    map: "https://www.google.com/maps?q=Plot%20C%2011%20Sector%20C%20DHA%20Phase%206%20Lahore%2054792&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Plot+C+11+Sector+C+DHA+Phase+6+Lahore+54792",
  },
];


export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "Let us design & construct your dream house",
    highlight:
      "Abbu Turab Design Studio & Construction Developers deliver luxury architecture, refined interiors and premium construction across Lahore and Pakistan-wide.",
    image: "/images/at/villa-1.webp",
  },
  {
    title: "Your vision, our expertise",
    highlight:
      "From the first concept sketch to the final polished finish, our architects, designers and site engineers turn your plot and your budget into a home you will love for a lifetime.",
    image: "/images/at/villa-2.webp",
  },
  {
    title: "Building dream homes with trust, quality & perfection",
    highlight:
      "12+ years of building luxury residences in DHA Lahore and beyond — every detail engineered for beauty, strength and lasting value.",
    image: "/images/at/villa-3.webp",
  },
];

export const stats = [
  { value: "12", label: "years of experience" },
  { value: "300+", label: "projects delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export const team = [
  { name: "CH. Shehzad", role: "Managing Director", image: "/temImages/Team1.webp" },
  { name: "Saad Ahmad", role: "Director Engineering & Technical", image: "/temImages/Team2.webp" },
  { name: "Faisal Naeem", role: "Managing Projects", image: "/temImages/Team3.webp" },
  { name: "Miss Saliha", role: "Sales and Marketing Executive", image: "/temImages/Team4.webp" },
  { name: "Ibrahim Khan", role: "Art Director", image: "/temImages/Team6.jpeg" },
  { name: "Miss Sabiha Naz", role: "Director Account & Finance", image: "/temImages/Team5.jpeg" },
];

export const services = [
  {
    slug: "architecture-interior",
    title: "Architecture & Interior Design",
    image: "/images/services/underconstruction.webp",
    detailImage: "/images/services/s2.jpg",
    short:
      "Complete end-to-end architecture, 3D elevations, and luxury interior design — from initial floor planning to custom ceilings, joinery, lighting, and premium finishes.",
    body:
      "Complete end-to-end architecture, 3D elevations, and luxury interior design — from initial floor planning to custom ceilings, joinery, lighting, and premium finishes.",
  },
  {
    slug: "construction",
    title: "Construction & Turnkey",
    image: "/images/gallery/IMG-20260726-WA0042.webp",
    detailImage: "/images/services/s3.jpg",
    short: "Grey structure to handover — precision execution with strict quality control.",
    body: "From site marking, foundation and grey structure to insulation, finishes and handover, our site teams execute with strict quality control. Every phase is supervised by senior engineers and documented for you week by week.",
  },
];

/** Home page project rail — images are unique to the home page. */
export const projects = [
  { title: "2 Kanal Luxury Residence", location: "DHA Phase 7, Lahore", image: "/images/at/hero-1.webp" },
  { title: "Grand Facade Residence", location: "DHA Phase 7, Lahore", image: "/images/at/hero-2.webp" },
  { title: "Warm Elevation Home", location: "DHA Phase 6, Lahore", image: "/images/at/hero-3.webp" },
  { title: "Modern Brick Townhouse", location: "Bahria Town, Lahore", image: "/images/at/villa-4.webp" },
  { title: "Contemporary Family Home", location: "DHA Phase 8, Lahore", image: "/images/projects/3.webp" },
  { title: "Premium Corner Residence", location: "Lake City, Lahore", image: "/images/gallery/IMG-20260726-WA0039.webp" },
  { title: "Elevation Upgrade Project", location: "Bahria Orchard, Lahore", image: "/images/gallery/IMG-20260726-WA0040.webp" },
  { title: "Turnkey Luxury Build", location: "DHA Phase 5, Lahore", image: "/images/gallery/IMG-20260726-WA0046.webp" },
];

/** Projects page portfolio — a completely separate image set. */
export const portfolioProjects = [
  { title: "2 Kanal Signature Villa", location: "DHA Phase 7, Lahore", image: "/images/portfolio/p2.jpg" },
  { title: "Classical White Residence", location: "DHA Phase 5, Lahore", image: "/images/portfolio/p3.jpg" },
  { title: "Modern Brick Townhouses", location: "Bahria Town, Lahore", image: "/images/portfolio/p4.jpg" },
  { title: "Spanish Elevation Villa", location: "Bahria Orchard, Lahore", image: "/images/portfolio/p5.jpg" },
  { title: "10 Marla Night Elevation", location: "DHA Phase 8, Lahore", image: "/images/portfolio/p6.jpg" },
  { title: "Double Height Living Hall", location: "DHA Phase 6, Lahore", image: "/images/portfolio/p7.jpg" },
  { title: "Designer Kitchen Project", location: "DHA Phase 7, Lahore", image: "/images/portfolio/p8.jpg" },
  { title: "Master Suite Interior", location: "Lake City, Lahore", image: "/images/portfolio/p9.jpg" },
  { title: "Sculptural Staircase Home", location: "DHA Phase 6, Lahore", image: "/images/portfolio/p10.jpg" },
  { title: "Grey Structure — 1 Kanal", location: "Park View City, Lahore", image: "/images/portfolio/p11.jpg" },
  { title: "Masonry & Facade Works", location: "Etihad Town, Lahore", image: "/images/portfolio/p12.jpg" },
  { title: "Marble Bathroom Suite", location: "DHA Phase 5, Lahore", image: "/images/portfolio/p13.jpg" },
];

export const leader = {
  name: "Abbu Turab",
  role: "CEO & Founder",
  since: "Feb 6, 2014",
  image: "/images/gallery/IMG-20260726-WA0041.webp",
  quote:
    "Every home we build is a promise — modern architecture, luxury aesthetics and top-quality construction, delivered with trust and perfection.",
};

export const leaderPoints = [
  "Architecture & 3D design",
  "Luxury interior finishing",
  "Turnkey construction",
  "12+ years, 110+ projects",
];

/** Home page site updates — unique images. */
export const updates = [
  {
    image: "/images/gallery/IMG-20260726-WA0043.webp",
    tag: "Under Development",
    title: "2 Kanal Premium Residence",
    location: "DHA Phase 7, Lahore",
    body: "Modern architecture and luxury finishes, under development.",
  },
  {
    image: "/images/gallery/IMG-20260726-WA0044.webp",
    tag: "Facade Complete",
    title: "1 Kanal Classical Villa",
    location: "DHA Phase 6, Lahore",
    body: "Ornate facade complete — landscaping and finishing under way.",
  },
  {
    image: "/images/gallery/IMG-20260726-WA0045.webp",
    tag: "Interior Finished",
    title: "Grand Living Interior",
    location: "DHA Phase 6, Lahore",
    body: "Double-height hall with ornate ceiling and marble floors.",
  },
];

/** Projects page site updates — separate image set. */
export const projectUpdates = [
  {
    image: "/images/portfolio/p14.jpg",
    tag: "Interior Finished",
    title: "Formal Dining Room",
    location: "DHA Phase 7, Lahore",
    body: "Panelled walls, hand-picked chandelier and warm oak flooring delivered.",
  },
  {
    image: "/images/portfolio/p15.jpg",
    tag: "Handover",
    title: "Entrance Lobby Reveal",
    location: "DHA Phase 6, Lahore",
    body: "Wooden slat feature wall with cove lighting and marble flooring.",
  },
  {
    image: "/images/portfolio/p16.jpg",
    tag: "In Progress",
    title: "Rooftop Terrace Build",
    location: "Bahria Town, Lahore",
    body: "Pergola, outdoor seating and skyline landscaping nearing completion.",
  },
];

export const testimonials = [
  {
    quote:
      "Abbu Turab transformed our home with flawless design, premium finishes and a delivery timeline that stayed on track.",
    name: "Sara Malik",
    role: "Homeowner",
  },
  {
    quote:
      "The team's attention to detail made our luxury interior vision feel effortless from concept to completion.",
    name: "Omar Raza",
    role: "Client",
  },
  {
    quote: "We trusted Abbu Turab with a full turnkey project and the result exceeded every expectation.",
    name: "Ayesha Khan",
    role: "Property Investor",
  },
  {
    quote: "Excellent communication, creative problem solving and a deep understanding of architecture and finishes.",
    name: "Hassan Ali",
    role: "Residential Client",
  },
  { quote: "They delivered a premium, modern home with perfect execution and strong project oversight.", name: "Zara Ahmed", role: "Client" },
  {
    quote: "A.T Developers made the whole build experience smooth, with a dedicated team handling everything end to end.",
    name: "Farhan Sheikh",
    role: "Homeowner",
  },
];

export const galleryImages = [
  "/images/portfolio/p17.jpg",
  "/images/portfolio/p18.jpg",
  "/images/portfolio/p19.jpg",
  "/images/portfolio/p20.jpg",
  "/images/portfolio/p21.jpg",
  "/images/portfolio/p22.jpg",
];

/** Projects page walkthrough videos (files in /public/projectPageVideo). */
export const projectVideos = [
  { src: "/projectPageVideo/projectVidoe1.mp4", title: "Villa Walkthrough" },
  { src: "/projectPageVideo/projectVidoe2.mp4", title: "Interior Tour" },
  { src: "/projectPageVideo/ProjectVideo3.mp4", title: "Site Progress" },
];

/** Architecture & Construction · Finishing — the three core disciplines. */
export const disciplines = [
  {
    slug: "architecture",
    title: "Architectural Design",
    tagline: "Plans, elevations & 3D visualisation",
    body: "Site-specific architecture, structural drawings, working plans and photoreal 3D elevations — approved by you before construction begins.",
    points: ["2D working & structural drawings", "Photoreal 3D elevations", "Approval & society drawing submissions"],
    cover: "/images/at/design.webp",
    images: ["/images/services/s4.jpg", "/images/services/s5.jpg"],
  },
  {
    slug: "construction",
    title: "Construction",
    tagline: "Grey structure to turnkey handover",
    body: "Foundation, grey structure, finishing and turnkey delivery executed by senior engineers with strict quality control and weekly reporting.",
    points: ["Grey structure & turnkey packages", "Certified material & steel schedules", "Weekly site progress reporting"],
    cover: "/images/at/construction.webp",
    images: [
      "/Construction/img1.jpeg",
      "/Construction/img2.jpeg",
      "/Construction/img3.jpeg",
      "/Construction/img4.jpeg",
      "/Construction/img5.jpeg",
      "/Construction/img6.jpeg",
      "/Construction/img7.jpeg",
    ],
  },
  {
    slug: "renovation",
    title: "Finishing & Turnkey Execution",
    tagline: "Premium finishes, custom detailing & seamless delivery",
    body: "Interior finishing, custom woodwork, premium material installations and turnkey project delivery — executed with precision, craftsmanship and dedicated site coordination.",
    points: ["Premium interior finishing & fixtures", "Turnkey execution & project management", "Custom woodwork & luxury installs"],
    cover: "/images/at/interior-1.webp",
    images: ["/images/interior/interior-1.webp", "/images/interior/interior-2.webp"],
  },
  {
    slug: "interior",
    title: "Interior Design",
    tagline: "Ceilings, joinery, lighting & finishes",
    body: "Bespoke interiors designed and executed in-house — false ceilings, wall panelling, kitchens, wardrobes, marble work and lighting schemes that land exactly as rendered.",
    points: ["Ceilings, panelling & bespoke joinery", "Kitchens, wardrobes & marble work", "Lighting design, styling & handover"],
    cover: "/images/at/interior-2.webp",
    images: [
      "/images/interior/interior-3.webp",
      "/images/interior/interior-4.webp",
      "/images/interior/img1.jpeg",
      "/images/interior/img2.jpeg",
      "/images/interior/img3.jpeg",
      "/images/interior/img4.jpeg",
      "/images/interior/img5.jpeg",
      "/images/interior/img6.jpeg",
      "/images/interior/img7.jpeg",
    ],
  },
];

export const registrations = [
  { name: "DHA Lahore", logo: "/images/logos/dha.webp" },
  { name: "Bahria Town", logo: "/images/logos/bahria-town.webp" },
  { name: "Bahria Orchard", logo: "/images/logos/bahria-orchard.webp" },
  { name: "Lake City", logo: "/images/logos/lake-city.webp" },
  { name: "LDA Approved", logo: "/images/logos/lda.webp" },
  { name: "PEC Registered", logo: "/images/logos/pec.webp" },
  { name: "Park View City", logo: "/images/logos/park-view.webp" },
  { name: "Etihad Town", logo: "/images/logos/etihad-town.webp" },
  { name: "Govt. Registered Firm", logo: "/images/logos/govt-registered.webp" },
];


export const videoGallery = [
  { src: "/video/gallery-1.mp4", title: "Project Walkthrough" },
  { src: "/video/gallery-2.mp4", title: "Facade Reveal" },
  { src: "/video/gallery-3.mp4", title: "Site Progress" },
  { src: "/video/gallery-4.mp4", title: "Interior Tour" },
];

/** Extra photo sets shown on each dedicated discipline page. */
export const disciplinePhotos: Record<string, string[]> = {
  architecture: [
    "/images/at/design.webp",
    "/images/at/hero-1.webp",
    "/images/at/hero-2.webp",
    "/images/at/villa-3.webp",
    "/images/at/villa-1.webp",
    "/images/gallery/IMG-20260726-WA0039.webp",
    "/images/gallery/IMG-20260726-WA0040.webp",
    "/images/gallery/IMG-20260726-WA0042.webp",
    "/images/at/hero-3.webp",
  ],
  construction: [
    "/Construction/img1.jpeg",
    "/Construction/img2.jpeg",
    "/Construction/img3.jpeg",
    "/Construction/img4.jpeg",
    "/Construction/img5.jpeg",
    "/Construction/img6.jpeg",
    "/Construction/img7.jpeg",
  ],
  renovation: [
    "/images/at/interior-1.webp",
    "/images/gallery/IMG-20260726-WA0046.webp",
    "/images/at/villa-2.webp",
    "/images/gallery/IMG-20260726-WA0045.webp",
    "/images/gallery/IMG-20260726-WA0042.webp",
    "/images/at/villa-3.webp",
    "/images/at/design.webp",
    "/images/gallery/IMG-20260726-WA0040.webp",
    "/images/at/villa-4.webp",
  ],
};
