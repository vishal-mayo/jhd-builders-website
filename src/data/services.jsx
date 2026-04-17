import { DoorOpen, Wrench, Building2, Paintbrush, Flame, Droplets, Bike } from 'lucide-react'

export const SERVICES = [
  {
    id: 0,
    slug: 'fire-door-installation',
    title: 'Fire Door Installation & Maintenance',
    shortTitle: 'Fire Doors',
    Icon: DoorOpen,
    color: '#ff6b35',
    image: '/images/service-fire.jpg',
    tagline: 'BM Trada certified across London & surrounding counties',
    desc: 'BM Trada certified fire door installation and maintenance across London and surrounding counties, fully compliant with current fire safety regulations.',
    longDesc: `Fire doors are a critical element of passive fire protection in any building. As BM Trada certified operatives, JHD Builders supply and fit fire rated doors to the highest standard across residential and commercial properties throughout London and the surrounding counties.

Our fire door installations comply with the latest fire safety legislation and building regulations, providing building owners and managers with the documentation and certification they need for compliance.`,
    features: ['Supply & Fit', 'BM Trada Certified', 'Maintenance Plans', 'Compliance Certification', 'London & Surrounds', 'Residential & Commercial'],
    keyPoints: [
      { title: 'Certified Installations', desc: 'Every installation carried out by BM Trada certified operatives to the highest standard.' },
      { title: 'Full Documentation', desc: 'We provide all required compliance documentation and certification on completion.' },
      { title: 'Ongoing Maintenance', desc: 'Planned maintenance programmes keep your fire doors in peak working condition.' },
      { title: 'London-wide Coverage', desc: 'We serve properties across London and surrounding counties.' },
    ]
  },
  {
    id: 1,
    slug: 'property-maintenance',
    title: 'Property Maintenance',
    shortTitle: 'Maintenance',
    Icon: Wrench,
    color: '#6db44c',
    image: '/images/service-maintenance.jpg',
    tagline: 'Planned & reactive maintenance for landlords and housing associations',
    desc: 'Comprehensive property maintenance keeping your buildings safe, functional and looking their best year-round.',
    longDesc: `JHD Builders provides comprehensive property maintenance services for landlords, housing associations and local authorities across London. With 30+ years of experience, our skilled team handles everything from reactive repairs to fully planned maintenance programmes.

We understand that efficiency in time and cost is critical. Our experienced team works quickly and professionally, minimising disruption to residents while maintaining the highest quality of work.`,
    features: ['Planned Maintenance', 'Emergency Repairs', 'Site Inspections', 'Compliance Checks', 'Tenant Liaison', 'London-wide'],
    keyPoints: [
      { title: 'Responsive Service', desc: 'Fast response to maintenance issues, minimising disruption to tenants.' },
      { title: 'Planned Programmes', desc: 'Structured maintenance schedules to prevent issues before they arise.' },
      { title: 'Full Compliance', desc: 'All works carried out in accordance with current building regulations.' },
      { title: 'Experienced Team', desc: '30+ years keeping London properties in top condition.' },
    ]
  },
  {
    id: 2,
    slug: 'building-refurbishment',
    title: 'Building Refurbishment',
    shortTitle: 'Refurbishment',
    Icon: Building2,
    color: '#4a9eff',
    image: '/images/service-refurb.jpg',
    tagline: 'Full interior & exterior refurbishments to modern standards',
    desc: 'Full interior and exterior refurbishments for residential and commercial properties — kitchens, bathrooms, relets, external works and complete renovations.',
    longDesc: `JHD Builders has been delivering high-quality building refurbishments across London for over 30 years. Whether it's a full property renovation, kitchen and bathroom upgrades, external rendering, or a void relet turnaround, our experienced team delivers results that exceed expectations.

As main contractor for one of the UK's largest private landlords, we have extensive experience refurbishing occupied residential properties — working sensitively around tenants while maintaining project timelines and quality standards.`,
    features: ['Interior Refurbishment', 'Exterior Works', 'Kitchen & Bathroom', 'Relets & Voids', 'Full Renovations', 'Occupied Properties'],
    keyPoints: [
      { title: 'Full Project Management', desc: 'From initial survey through to completion, we manage the entire process.' },
      { title: 'Occupied Properties', desc: 'Experienced in working sensitively around residents to minimise disruption.' },
      { title: 'Quality Finishes', desc: 'High-end finishes delivered on time and within budget.' },
      { title: 'All Trades In-house', desc: 'No need to manage multiple contractors — we handle everything.' },
    ]
  },
  {
    id: 3,
    slug: 'venetian-plastering',
    title: 'Venetian Plastering',
    shortTitle: 'Plastering',
    Icon: Paintbrush,
    color: '#f59e0b',
    image: '/images/service-plaster.jpg',
    tagline: 'Premium decorative plaster finishes for residential & commercial interiors',
    desc: 'Expert Venetian and decorative plastering services delivering premium finishes that transform your interior spaces.',
    longDesc: `Venetian plastering is a specialist skill requiring years of experience and technique to perfect. JHD Builders' expert plasterers deliver stunning Venetian plaster finishes for both residential and commercial interiors.

From smooth marble-effect walls to textured decorative finishes, we transform any interior space using premium materials and traditional techniques combined with modern methods for outstanding, durable results.`,
    features: ['Venetian Plaster', 'Marble Effects', 'Decorative Finishes', 'Specialist Coatings', 'Interior Restoration', 'Residential & Commercial'],
    keyPoints: [
      { title: 'Specialist Craftsmen', desc: 'Expert plasterers with years of experience in Venetian techniques.' },
      { title: 'Premium Materials', desc: 'We use only high-quality materials for lasting, beautiful finishes.' },
      { title: 'Custom Finishes', desc: 'From subtle textures to bold marble effects — tailored to your vision.' },
      { title: 'Interior Transformation', desc: 'Elevate any space with distinctive, long-lasting decorative plasterwork.' },
    ]
  },
  {
    id: 4,
    slug: 'fire-risk-management',
    title: 'Fire Risk Management',
    shortTitle: 'Fire Risk',
    Icon: Flame,
    color: '#ef4444',
    image: '/images/service-risk.jpg',
    tagline: 'Comprehensive fire safety solutions ensuring regulatory compliance',
    desc: 'Comprehensive fire safety solutions including risk assessments, compartmentation works and full compliance documentation.',
    longDesc: `Fire risk management is a legal requirement for all non-domestic premises and houses in multiple occupation (HMOs). JHD Builders provides comprehensive fire safety services, working with landlords, housing associations and building managers to ensure their properties meet all current fire safety regulations.

From fire risk assessments through to compartmentation works and fire door installation, we provide an end-to-end service that keeps your building safe and your documentation up to date.`,
    features: ['Fire Risk Assessments', 'Compartmentation', 'Compliance Documentation', 'Fire Door Installation', 'Passive Fire Protection', 'HMO Compliance'],
    keyPoints: [
      { title: 'Legal Compliance', desc: 'We ensure your property meets all current fire safety legislation.' },
      { title: 'End-to-End Service', desc: 'From assessment through to remedial works and full documentation.' },
      { title: 'Specialist Knowledge', desc: 'Our team understands the complexities of fire safety in residential blocks.' },
      { title: 'Full Documentation', desc: 'All assessments and works fully documented for your records.' },
    ]
  },
  {
    id: 5,
    slug: 'mould-maintenance',
    title: 'Mould Maintenance',
    shortTitle: 'Mould',
    Icon: Droplets,
    color: '#06b6d4',
    image: '/images/service-mould.jpg',
    tagline: 'Professional treatment & prevention for healthy living environments',
    desc: 'Professional mould treatment, prevention and long-term maintenance ensuring healthy, safe environments for residents and occupants.',
    longDesc: `Mould in residential properties is a serious health concern and a common challenge for landlords managing older housing stock. JHD Builders provides a professional, thorough mould maintenance service — treating existing mould, identifying the root cause, and implementing long-term prevention solutions.

Our team is experienced in working within occupied properties, treating mould sensitively and efficiently while providing ventilation solutions to address the underlying moisture and condensation issues.`,
    features: ['Mould Treatment', 'Root Cause Analysis', 'Prevention Measures', 'Ventilation Solutions', 'Resident Liaison', 'Follow-up Inspections'],
    keyPoints: [
      { title: 'Root Cause Treatment', desc: 'We identify and address the underlying cause, not just the surface symptoms.' },
      { title: 'Safe Products', desc: 'Treatments use safe, proven products appropriate for occupied properties.' },
      { title: 'Ventilation Solutions', desc: 'We install ventilation to prevent moisture and condensation build-up.' },
      { title: 'Follow-up Inspections', desc: 'Post-treatment visits to ensure the problem has not returned.' },
    ]
  },
  {
    id: 6,
    slug: 'bike-canopies-shelters',
    title: 'Bike Canopies & Shelters',
    shortTitle: 'Bike Shelters',
    Icon: Bike,
    color: '#8b5cf6',
    image: '/images/service-bike.jpg',
    tagline: 'Design, supply & installation of secure bike storage solutions',
    desc: 'Design, supply and professional installation of bike storage canopies and shelters for residential and commercial properties.',
    longDesc: `With cycling on the rise in London, providing secure, weatherproof bike storage has become an important consideration for residential blocks and commercial premises. JHD Builders designs, supplies and installs a range of bike canopies and shelters to suit properties of all sizes.

Our bike shelters are built to last, using quality materials that withstand the British weather. We handle the full process from design and planning through to professional installation.`,
    features: ['Design & Planning', 'Supply & Install', 'Weatherproof Build', 'Secure Storage', 'Custom Sizing', 'Residential & Commercial'],
    keyPoints: [
      { title: 'Full Design Service', desc: 'We design the shelter to fit your available space and aesthetic.' },
      { title: 'Quality Build', desc: 'Durable, weatherproof materials built to last in the British climate.' },
      { title: 'Custom Sizes', desc: 'We accommodate any number of bikes and any available footprint.' },
      { title: 'Professional Install', desc: 'Clean, fast installation with minimal disruption to the property.' },
    ]
  },
]
