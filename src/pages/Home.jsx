import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import ServicesWheel from '../components/ServicesWheel'
import AutoScrollCarousel from '../components/AutoScrollCarousel'
import { SERVICES } from '../data/services'

function CountUp({ to, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = to / (duration / 16)
    const timer = setInterval(() => {
      current = Math.min(current + step, to)
      setCount(Math.floor(current))
      if (current >= to) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

const TEAM = [
  { name: 'Jason Donnelly', role: 'Director & Co-Founder', img: '/images/team/jason-donnelly.jpg' },
  { name: 'Natalie Donnelly', role: 'Administration', img: '/images/team/natalie-donnelly.jpg' },
  { name: 'Sian Condon', role: 'Administration', img: '/images/team/sian-condon.jpg' },
  { name: 'Paul "Laz" Lazarou', role: 'Driver', img: '/images/team/paul-lazarou.jpg' },
  { name: 'Rafik Mohammed', role: 'Multi Trader', img: '/images/team/rafik-mohammed.jpg' },
  { name: 'Christian Pinzariu', role: 'Multi Trader', img: '/images/team/christian-pinzariu.jpg' },
  { name: 'Chris Hendricks', role: 'Multi Trader', img: '/images/team/chris-hendricks.jpg' },
  { name: 'Marcin Twarowski', role: 'Multi Trader', img: '/images/team/marcin-twarowski.jpg' },
  { name: 'Ryan Cleaver', role: 'Groundsman', img: '/images/team/ryan-cleaver.jpg' },
  { name: 'Alfie Wisker', role: 'Labourer', img: '/images/team/alfie-wisker.png' },
  { name: 'Scott Pearce', role: 'Painter & Decorator', img: '/images/team/scott-pearce.jpg' },
  { name: 'Harold Castsno', role: 'Painter & Decorator', img: '/images/team/harold-castsno.jpg' },
  { name: 'Fabrizio Romero', role: 'Painter & Decorator', img: '/images/team/fabrizio-romero.jpg' },
  { name: 'Harry Donnelly', role: 'BM Trada Trainee', img: '/images/team/harry-donnelly.jpg' },
  { name: 'Ashley Edwards', role: 'Electrician', img: '/images/team/ashley-edwards.jpg' },
  { name: 'Craig Gough', role: 'Pest Control', img: '/images/team/craig-gough.jpg' },
  { name: 'Mickey Andrews', role: 'Plumber', img: '/images/team/mickey-andrews.jpg' },
  { name: 'King Arthur', role: 'Head of Security', img: '/images/team/king-arthur.jpg' },
  { name: 'Miss Ruby Sparkles', role: 'Security', img: '/images/team/miss-ruby-sparkles.jpg' },
  { name: 'Brockley', role: 'Company Mascot', img: '/images/team/brockley.jpg' },
]

const ACCREDITATIONS = [
  { name: 'CHAS', img: '/images/accreditations/chas.png' },
  { name: 'Constructionline', img: '/images/accreditations/constructionline.png' },
  { name: 'Builders Profile', img: '/images/accreditations/builders-profile.png' },
  { name: 'BM Trada', img: '/images/accreditations/bm-trada.png' },
  { name: 'Safe Contractor', img: '/images/accreditations/safe-contractor.png' },
  { name: 'Gas Safe', img: '/images/accreditations/gas-safe.png' },
  { name: 'CIOB', img: '/images/accreditations/ciob.jpg' },
]

const testimonials = [
  { quote: "We had four building companies quoting for our loft. We chose JHD Builders because we liked the way they clearly specified all of the jobs in the quote and their price was very competitive. The project took exactly 9 weeks as estimated, and the job was done to a high standard.", author: "Sarah M.", project: "Loft Conversion" },
  { quote: "JHD Builders carried out a full refurbishment of our property and the quality of work was outstanding. Professional, tidy and completed on time and on budget. I wouldn't hesitate to recommend them to anyone looking for a reliable building contractor in London.", author: "James T.", project: "Property Refurbishment" },
  { quote: "As a landlord managing multiple properties across London, I've worked with JHD Builders for years. Their fire door installation service is second to none and their team respond quickly to any issues. An absolute pleasure to work with.", author: "David K.", project: "Fire Door Installation" },
]

export default function Home() {
  const [selectedService, setSelectedService] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrentTestimonial(p => (p + 1) % testimonials.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video container - responsive to orientation */}
          <div 
            className="absolute"
            style={{ 
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              // When width > height (landscape/wide screens): full width
              // When height > width (portrait/tall screens): full height
              width: '100vw',
              height: '100%',
              minWidth: '177.78vh', // 16:9 ratio - ensures full width coverage
              minHeight: '56.25vw', // 9:16 ratio - ensures full height coverage
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/945934477?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
              className="w-full h-full pointer-events-none"
              style={{ width: '100%', height: '100%', border: 'none' }}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="JHD Builders Background Video"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >30+ Years of Building Excellence in London</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="font-condensed text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-wider"
            >Commercial &amp; Property Building Specialist</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/contact" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Contact Us</Link>
              <Link to="/services" className="btn-codepen-white"><svg><rect x="0" y="0" width="240" height="56" /></svg>Our Services</Link>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-white/60 text-sm mb-2 uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="relative -mt-6 z-20 overflow-hidden w-full max-w-[100vw]">
        <div className="bg-primary py-4 transform -rotate-1 origin-left">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">Visit Our London Showroom</span>
            <span className="text-white/60 mx-4">|</span>
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">Fire Rated Door Installations In London &amp; Surrounding Counties</span>
            <span className="text-white/60 mx-4">|</span>
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">30+ Years of Building Excellence</span>
            <span className="text-white/60 mx-4">|</span>
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">Visit Our London Showroom</span>
            <span className="text-white/60 mx-4">|</span>
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">Fire Rated Door Installations In London &amp; Surrounding Counties</span>
            <span className="text-white/60 mx-4">|</span>
            <span className="text-white font-semibold text-lg uppercase tracking-wide mx-8">30+ Years of Building Excellence</span>
            <span className="text-white/60 mx-4">|</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="section-padding bg-darker">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Who We Are</h2>
              <div className="space-y-4 text-grey-text text-lg leading-relaxed">
                <p>We are a building contractor who, over the past 30 years have worked with local authorities carrying out a large range of works. We are the main contractor for one of the UK&#39;s largest private landlords in London supporting them with external works, refurbishments, relets, fencing and disability adaptations.</p>
                <p>We aim to deliver above and beyond expectations. Our team are highly trained and take pride in their work, ensuring every project is completed to the highest standard.</p>
              </div>
              <div className="pt-2">
                <Link to="/about" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Learn More</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/images/showroom-bathroom.png" alt="JHD Builders Showroom" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-2xl">
                <div className="text-5xl font-bold text-white">30+</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark border-y border-grey/20">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 30, suffix: '+', label: 'Years Experience' },
              { to: 500, suffix: '+', label: 'Projects Completed' },
              { static: '15\u201320', label: 'Skilled Operatives' },
              { to: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6">
                <div className="font-condensed text-5xl font-bold text-primary mb-2">
                  {stat.to !== undefined ? <CountUp to={stat.to} suffix={stat.suffix} /> : stat.static}
                </div>
                <div className="text-grey-text text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — wheel + side panel */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">What We Offer</h2>
            <p className="text-grey-text text-lg">Click any service to explore — or browse all services in detail.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <ServicesWheel selected={selectedService} onSelect={setSelectedService} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                {selectedService ? (
                  <motion.div key={selectedService.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
                    className="bg-dark-lighter rounded-2xl p-8 border" style={{ borderColor: `${selectedService.color}40` }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${selectedService.color}18` }}>
                      <selectedService.Icon size={32} color={selectedService.color} />
                    </div>
                    <h3 className="font-condensed text-3xl font-bold text-white mb-3 uppercase">{selectedService.title}</h3>
                    <p className="text-grey-text leading-relaxed mb-5">{selectedService.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.features.map(f => (
                        <span key={f} className="px-3 py-1 rounded-full text-xs border text-white/80"
                          style={{ borderColor: `${selectedService.color}50`, backgroundColor: `${selectedService.color}10` }}>{f}</span>
                      ))}
                    </div>
                    <Link to={`/services/${selectedService.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-4 transition-all"
                      style={{ color: selectedService.color }}>
                      View Full Details <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <h3 className="font-condensed text-2xl font-bold text-white mb-2 uppercase">7 Specialist Services</h3>
                    <p className="text-grey-text text-sm mb-6">Select a service from the diagram or click below to explore.</p>
                    <ul className="space-y-1">
                      {SERVICES.map(s => (
                        <li key={s.id}>
                          <button onClick={() => setSelectedService(s)}
                            className="flex items-center gap-3 w-full text-left group px-3 py-2.5 rounded-lg hover:bg-dark-lighter transition-colors">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                            <span className="text-white/80 group-hover:text-white transition-colors text-sm font-medium flex-1">{s.title}</span>
                            <ArrowRight size={13} className="text-grey opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-grey/20">
                      <Link to="/services" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Browse All Services</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 block">Testimonials</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-12 uppercase">What Our Clients Say</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={currentTestimonial} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                  <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">&ldquo;{testimonials[currentTestimonial].quote}&rdquo;</blockquote>
                  <p className="text-white font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                  <p className="text-white/70">{testimonials[currentTestimonial].project}</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"><ChevronLeft size={18} /></button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (<button key={i} onClick={() => setCurrentTestimonial(i)} className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: i === currentTestimonial ? 'white' : 'rgba(255,255,255,0.35)' }} />))}
                </div>
                <button onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"><ChevronRight size={18} /></button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-14 bg-darker border-y border-grey/20 overflow-hidden">
        <div className="container-custom px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Accreditations &amp; Certifications</span>
          </motion.div>
          {/* Desktop: Grid */}
          <div className="hidden lg:flex flex-wrap justify-center gap-4 lg:gap-6">
            {ACCREDITATIONS.map((a, i) => (
              <motion.div key={a.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <motion.div
                  className="w-28 h-20 bg-dark-lighter rounded-xl p-3 flex items-center justify-center shadow-sm cursor-default border border-grey/30"
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(109,180,76,0.2)' }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={a.img} alt={a.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Mobile/Tablet: Scrolling Carousel */}
          <div className="lg:hidden relative">
            <AutoScrollCarousel gap={16}>
              {[...ACCREDITATIONS, ...ACCREDITATIONS].map((a, i) => (
                <div
                  key={`${a.name}-${i}`}
                  className="flex-shrink-0 w-28 h-20 bg-dark-lighter rounded-xl p-3 flex items-center justify-center shadow-sm border border-grey/30"
                >
                  <img src={a.img} alt={a.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
              ))}
            </AutoScrollCarousel>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-darker overflow-hidden">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Team</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">Meet The Team</h2>
            <p className="text-grey-text">20 dedicated professionals bringing decades of combined expertise to every project.</p>
          </motion.div>
          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {TEAM.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
                className="text-center group"
              >
                <motion.div className="relative mx-auto mb-3 w-20 h-20"
                  whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-grey/30 group-hover:border-primary transition-colors duration-300 bg-dark-lighter">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </motion.div>
                <h4 className="font-condensed font-bold text-white text-sm leading-tight mb-0.5">{member.name}</h4>
                <p className="text-primary text-[11px] uppercase tracking-wide leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
          {/* Mobile/Tablet: Scrolling Carousel */}
          <div className="lg:hidden relative">
            <AutoScrollCarousel gap={24}>
              {[...TEAM, ...TEAM].map((member, i) => (
                <div key={`${member.name}-${i}`} className="flex-shrink-0 text-center group w-24">
                  <div className="relative mx-auto mb-3 w-20 h-20">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-grey/30 bg-dark-lighter">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <h4 className="font-condensed font-bold text-white text-sm leading-tight mb-0.5">{member.name}</h4>
                  <p className="text-primary text-[11px] uppercase tracking-wide leading-tight">{member.role}</p>
                </div>
              ))}
            </AutoScrollCarousel>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-condensed text-3xl lg:text-4xl font-bold text-white mb-6 uppercase">Ready to Start Your Project?</h2>
            <p className="text-grey-text text-lg mb-8 max-w-2xl mx-auto">Contact us today to discuss your project with a member of our team.</p>
            <Link to="/contact" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Get Free Quote</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
