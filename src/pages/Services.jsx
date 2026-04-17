import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { DoorOpen, Wrench, Building2, Paintbrush, Flame, Droplets, Bike, CheckCircle2 } from 'lucide-react'
import ServicesWheel from '../components/ServicesWheel'

const SERVICES = [
  {
    title: 'Fire Door Installation & Maintenance',
    Icon: DoorOpen, color: '#ff6b35',
    desc: 'BM Trada certified fire door installation and maintenance. We offer fire rated door installations across London and surrounding counties, fully compliant with current fire safety regulations.',
    features: ['Supply & Fit', 'BM Trada Certified', 'Maintenance Plans', 'Compliance Certification']
  },
  {
    title: 'Property Maintenance',
    Icon: Wrench, color: '#6db44c',
    desc: 'Comprehensive property maintenance keeping your buildings safe and functional. From reactive repairs to planned maintenance programmes for landlords and housing associations.',
    features: ['Planned Maintenance', 'Emergency Repairs', 'Site Inspections', 'Compliance']
  },
  {
    title: 'Building Refurbishment',
    Icon: Building2, color: '#4a9eff',
    desc: 'Full interior and exterior refurbishments for residential and commercial properties. Kitchens, bathrooms, relets, external works and complete property renovations.',
    features: ['Interior Refurbishment', 'External Works', 'Relets', 'Full Renovations']
  },
  {
    title: 'Venetian Plastering',
    Icon: Paintbrush, color: '#f59e0b',
    desc: 'Expert Venetian and decorative plastering services delivering premium finishes that transform your interior spaces and add lasting value to your property.',
    features: ['Venetian Plaster', 'Decorative Finishes', 'Specialist Coatings', 'Restoration']
  },
  {
    title: 'Fire Risk Management',
    Icon: Flame, color: '#ef4444',
    desc: 'Comprehensive fire safety solutions. We handle fire risk assessments, compartmentation and compliance works to keep your property safe and legally compliant.',
    features: ['Risk Assessments', 'Compartmentation', 'Compliance Works', 'Documentation']
  },
  {
    title: 'Mould Maintenance',
    Icon: Droplets, color: '#06b6d4',
    desc: 'Professional mould treatment, prevention and long-term maintenance ensuring healthy, safe environments for residents and building occupants.',
    features: ['Mould Treatment', 'Prevention Measures', 'Ventilation Solutions', 'Follow-up Inspections']
  },
  {
    title: 'Bike Canopies & Shelters',
    Icon: Bike, color: '#8b5cf6',
    desc: 'Design, supply and professional installation of bike storage canopies and shelters for residential blocks and commercial premises.',
    features: ['Design & Supply', 'Professional Install', 'Secure Storage', 'Custom Sizes']
  },
]

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase">
              What We Do
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              With our dedicated &amp; skilled workforce, we feel confident that we have everything
              necessary to cope with the many needs of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Diagram */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Interactive Overview</span>
            <h2 className="font-condensed text-3xl lg:text-4xl font-bold text-white uppercase mb-2">Explore Our Services</h2>
            <p className="text-grey-text">Click any service to discover more</p>
          </motion.div>
          <ServicesWheel />
        </div>
      </section>

      {/* Service Accordion */}
      <section className="section-padding bg-darker">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">In Detail</span>
            <h2 className="font-condensed text-3xl lg:text-4xl font-bold text-white uppercase">All Services</h2>
          </motion.div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {SERVICES.map((s, i) => {
              const isOpen = expandedIdx === i
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div
                    className="bg-dark rounded-xl border overflow-hidden cursor-pointer transition-colors duration-300"
                    style={{ borderColor: isOpen ? `${s.color}60` : '#434549' }}
                    onClick={() => setExpandedIdx(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${s.color}18` }}>
                        <s.Icon size={20} color={s.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-condensed text-xl font-bold text-white">{s.title}</h3>
                        {!isOpen && (
                          <p className="text-grey-text text-sm mt-0.5 truncate">{s.desc}</p>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-grey-text flex-shrink-0"
                      >
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-grey/20 pt-4">
                            <p className="text-grey-text leading-relaxed mb-4">{s.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {s.features.map(f => (
                                <span key={f}
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border"
                                  style={{ borderColor: `${s.color}50`, color: s.color, backgroundColor: `${s.color}08` }}>
                                  <CheckCircle2 size={13} />
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-8 uppercase">
                Experience &amp; Expertise
              </h2>
              <div className="space-y-5">
                {[
                  { title: '30+ Years Experience', desc: 'Three decades delivering quality building services across London and the South East.' },
                  { title: 'Fully Accredited', desc: 'CHAS, Construction Line and Builders Profile accredited. BM Trada certified for fire doors.' },
                  { title: 'Skilled Workforce', desc: '15–20 dedicated operatives committed to delivering above and beyond expectations every time.' },
                  { title: 'Local Authority Trusted', desc: "Main contractor for one of the UK's largest private landlords and multiple local authorities." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-grey-text text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-dark-lighter rounded-2xl p-8 border border-grey/20">
                <h3 className="font-condensed text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-grey-text mb-6 text-sm leading-relaxed">
                  Contact us today to discuss your project requirements with our experienced team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  <Link to="/contact" className="btn-codepen">
                    <svg><rect x="0" y="0" width="200" height="56" /></svg>
                    Request Quote
                  </Link>
                  <a href="tel:02084463447" className="btn-codepen-white">
                    <svg><rect x="0" y="0" width="200" height="56" /></svg>
                    020 8446 3447
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
