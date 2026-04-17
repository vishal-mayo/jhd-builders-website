import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { DoorOpen, Wrench, Building2, Paintbrush, Flame, Droplets, Bike, ChevronLeft, ChevronRight } from 'lucide-react'

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

const services = [
  { title: 'Fire Door Installation', Icon: DoorOpen, image: '/images/service-fire.jpg', desc: 'BM Trada certified fire door installation & maintenance', color: '#ff6b35' },
  { title: 'Property Maintenance', Icon: Wrench, image: '/images/service-maintenance.jpg', desc: 'Comprehensive property maintenance services', color: '#6db44c' },
  { title: 'Building Refurbishment', Icon: Building2, image: '/images/service-refurb.jpg', desc: 'Full interior & exterior property refurbishments', color: '#4a9eff' },
  { title: 'Venetian Plastering', Icon: Paintbrush, image: '/images/service-plaster.jpg', desc: 'Expert Venetian and decorative plastering', color: '#f59e0b' },
  { title: 'Fire Risk Management', Icon: Flame, image: '/images/service-risk.jpg', desc: 'Fire risk assessment and compliance works', color: '#ef4444' },
  { title: 'Mould Maintenance', Icon: Droplets, image: '/images/service-mould.jpg', desc: 'Professional mould treatment and prevention', color: '#06b6d4' },
  { title: 'Bike Canopies & Shelters', Icon: Bike, image: '/images/service-bike.jpg', desc: 'Design & installation of bike canopies and shelters', color: '#8b5cf6' },
]

const testimonials = [
  {
    quote: "We had four building companies quoting for our loft. We chose JHD Builders because we liked the way they clearly specified all of the jobs in the quote and their price was very competitive. The project took exactly 9 weeks as estimated, and the job was done to a high standard.",
    author: "Sarah M.",
    project: "Loft Conversion"
  },
  {
    quote: "JHD Builders carried out a full refurbishment of our property and the quality of work was outstanding. Professional, tidy and completed on time and on budget. I wouldn't hesitate to recommend them to anyone looking for a reliable building contractor in London.",
    author: "James T.",
    project: "Property Refurbishment"
  },
  {
    quote: "As a landlord managing multiple properties across London, I've worked with JHD Builders for years. Their fire door installation service is second to none and their team respond quickly to any issues. An absolute pleasure to work with.",
    author: "David K.",
    project: "Fire Door Installation"
  }
]

const accreditations = [
  { name: 'CHAS', full: 'Contractors Health & Safety Assessment Scheme' },
  { name: 'Constructionline', full: 'Construction Pre-Qualification' },
  { name: 'Builders Profile', full: 'Industry Standard Accreditation' },
  { name: 'BM Trada', full: 'Fire Door Certification' },
]

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrentTestimonial(p => (p + 1) % testimonials.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* Hero Section with Vimeo Video Background */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://player.vimeo.com/video/945934477?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              30+ Years of Building Excellence in London
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-condensed text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-wider"
            >
              Commercial &amp; Property Building Specialist
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/contact" className="btn-codepen">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                Contact Us
              </Link>
              <Link to="/services" className="btn-codepen-white">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/60 text-sm mb-2 uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Diagonal Scrolling Banner */}
      <div className="relative -mt-6 z-20 overflow-visible">
        <div className="bg-primary py-6 transform -rotate-1 scale-110 origin-center">
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

      {/* About Section */}
      <section id="about" className="section-padding bg-darker">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Who We Are</h2>
              <div className="space-y-4 text-grey-text text-lg leading-relaxed">
                <p>
                  We are a building contractor who, over the past 30 years have worked with
                  local authorities carrying out a large range of works. We are the main
                  contractor for one of the UK&#39;s largest private landlords in London supporting
                  them with external works, refurbishments, relets, fencing and disability adaptations.
                </p>
                <p>
                  We aim to deliver above and beyond expectations. Our team are highly trained
                  and take pride in their work, ensuring every project is completed to the
                  highest standard with no faults or issues.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-4 transition-all uppercase tracking-wider"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/images/hero-bg.jpg" alt="JHD Builders construction work" className="w-full h-full object-cover" />
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
              { static: '15–20', label: 'Skilled Operatives' },
              { to: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="font-condensed text-5xl font-bold text-primary mb-2">
                  {stat.to !== undefined
                    ? <CountUp to={stat.to} suffix={stat.suffix} />
                    : stat.static
                  }
                </div>
                <div className="text-grey-text text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">What We Offer</h2>
            <p className="text-grey-text text-lg">
              With our dedicated &amp; skilled workforce, we have everything necessary to cope with the many needs of our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-dark-lighter">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${service.color}cc` }}
                >
                  <service.Icon size={18} color="white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-condensed text-lg font-bold text-white group-hover:text-primary transition-colors uppercase mb-1">
                    {service.title}
                  </h3>
                  <p className="text-grey-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-codepen">
              <svg><rect x="0" y="0" width="200" height="56" /></svg>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 block">Testimonials</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-12 uppercase">What Our Clients Say</h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-white/70">{testimonials[currentTestimonial].project}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ backgroundColor: i === currentTestimonial ? 'white' : 'rgba(255,255,255,0.35)' }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-14 bg-darker border-y border-grey/20">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Accreditations &amp; Certifications</span>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {accreditations.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                <motion.div
                  className="w-24 h-24 rounded-xl bg-dark border border-grey/30 flex items-center justify-center"
                  whileHover={{ borderColor: '#6db44c', y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-condensed font-bold text-white text-sm group-hover:text-primary transition-colors text-center leading-tight px-2">
                    {a.name}
                  </span>
                </motion.div>
                <span className="text-grey-text text-xs text-center max-w-[100px] leading-snug">{a.full}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-darker">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Team</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Meet The Team</h2>
            <p className="text-grey-text text-lg">
              A dedicated team with decades of experience delivering quality building services across London.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Jason Donnelly', role: 'Director & Co-Founder', note: 'BM Trada Operative', img: '/images/team-jason.jpg' },
              { name: 'Paul "Laz" Lazarou', role: 'Delivery Driver', note: '15+ years with the team', img: '/images/team-laz.jpg' },
              { name: 'Brockley', role: 'Chief Morale Officer', note: 'Our beloved mascot 🐾', img: '/images/brockley.png' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center group"
              >
                <motion.div
                  className="relative mb-4 mx-auto w-40 h-40"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-lighter group-hover:border-primary transition-colors duration-300 shadow-xl bg-dark-lighter">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <h3 className="font-condensed text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-1">{member.role}</p>
                <p className="text-grey-text text-xs">{member.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-condensed text-3xl lg:text-4xl font-bold text-white mb-6 uppercase">
              Ready to Start Your Project?
            </h2>
            <p className="text-grey-text text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project with a member of our team.
            </p>
            <Link to="/contact" className="btn-codepen">
              <svg><rect x="0" y="0" width="200" height="56" /></svg>
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
