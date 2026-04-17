import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import AutoScrollCarousel from '../components/AutoScrollCarousel'

const TEAM_CATEGORIES = [
  {
    label: 'Leadership',
    members: [
      { name: 'Jason Donnelly', role: 'Director & Co-Founder', note: 'BM Trada Certified', img: '/images/team/jason-donnelly.jpg' },
    ]
  },
  {
    label: 'Administration',
    members: [
      { name: 'Natalie Donnelly', role: 'Administration', img: '/images/team/natalie-donnelly.jpg' },
      { name: 'Sian Condon', role: 'Administration', img: '/images/team/sian-condon.jpg' },
    ]
  },
  {
    label: 'Operations',
    members: [
      { name: 'Paul "Laz" Lazarou', role: 'Driver', note: '15+ years with the company', img: '/images/team/paul-lazarou.jpg' },
      { name: 'Rafik Mohammed', role: 'Multi Trader', img: '/images/team/rafik-mohammed.jpg' },
      { name: 'Christian Pinzariu', role: 'Multi Trader / BM Trada Trainee', img: '/images/team/christian-pinzariu.jpg' },
      { name: 'Chris Hendricks', role: 'Multi Trader', img: '/images/team/chris-hendricks.jpg' },
      { name: 'Marcin Twarowski', role: 'Multi Trader', img: '/images/team/marcin-twarowski.jpg' },
      { name: 'Ryan Cleaver', role: 'Groundsman', img: '/images/team/ryan-cleaver.jpg' },
      { name: 'Alfie Wisker', role: 'Labourer', img: '/images/team/alfie-wisker.png' },
    ]
  },
  {
    label: 'Painters & Decorators',
    members: [
      { name: 'Scott Pearce', role: 'Painter & Decorator', img: '/images/team/scott-pearce.jpg' },
      { name: 'Harold Castsno', role: 'Painter & Decorator', img: '/images/team/harold-castsno.jpg' },
      { name: 'Fabrizio Romero', role: 'Painter & Decorator', img: '/images/team/fabrizio-romero.jpg' },
    ]
  },
  {
    label: 'Specialists',
    members: [
      { name: 'Harry Donnelly', role: 'Trainee BM Trada Operative', img: '/images/team/harry-donnelly.jpg' },
      { name: 'Ashley Edwards', role: 'Electrician', img: '/images/team/ashley-edwards.jpg' },
      { name: 'Craig Gough', role: 'Pest Control', img: '/images/team/craig-gough.jpg' },
      { name: 'Mickey Andrews', role: 'Plumber', img: '/images/team/mickey-andrews.jpg' },
    ]
  },
  {
    label: 'Security & Mascots \ud83d\udc3e',
    members: [
      { name: 'King Arthur', role: 'Head of Security', img: '/images/team/king-arthur.jpg' },
      { name: 'Miss Ruby Sparkles', role: 'Security', img: '/images/team/miss-ruby-sparkles.jpg' },
      { name: 'Brockley', role: 'Company Mascot', note: 'Our beloved Cocker Spaniel', img: '/images/team/brockley.jpg' },
    ]
  },
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

const PARTNERS = [
  { name: 'Camden Council', img: '/images/partners/camden.jpg' },
  { name: 'Brent Council', img: '/images/partners/brent.jpg' },
  { name: 'Osborne', img: '/images/partners/osborne.jpg' },
  { name: 'Citywest Homes', img: '/images/partners/citywest-homes.jpg' },
  { name: 'Wates', img: '/images/partners/wates.jpg' },
]

const stats = [
  { n: '30+', l: 'Years Experience' },
  { n: '500+', l: 'Projects Completed' },
  { n: '100%', l: 'Client Satisfaction' },
  { n: '15\u201320', l: 'Skilled Operatives' },
]

const values = [
  { title: 'Quality', desc: 'We never take shortcuts. Every project is completed to the highest standard — no faults, no issues, no compromises.' },
  { title: 'Reliability', desc: 'We deliver on time and on budget. Our clients trust us to get the job done right, every single time.' },
  { title: 'Safety', desc: 'Health & safety is paramount. All works are carried out in full compliance with current regulations.' },
  { title: 'Experience', desc: '30+ years working with local authorities and major London landlords gives us unmatched expertise and insight.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase">Who We Are</h1>
            <p className="text-grey-text text-xl leading-relaxed">A building contractor with over 30 years of experience working with local authorities and major private landlords across London.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <p className="text-grey-text text-lg leading-relaxed">We are the main contractor for one of the UK&#39;s largest private landlords in London supporting them with external works, refurbishments, relets, fencing and disability adaptations. We also operate from two offices — North London and Essex — specialising in local authority and private landlord work.</p>
              <p className="text-grey-text text-lg leading-relaxed">Our dedicated and skilled workforce gives us the confidence to cope with the many needs of our clients. We understand that efficiency in time and cost is the major concern — and with our 30 years of experience, we can help ease those concerns.</p>
              <p className="text-grey-text text-lg leading-relaxed">We aim to deliver above and beyond expectations every time. Our commitment to quality and customer satisfaction has made us a trusted partner for local authorities and private clients alike.</p>
              <div className="pt-2">
                <Link to="/services" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Our Services</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="/images/showroom-bathroom.png" alt="JHD Builders Showroom" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary p-5 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold text-white font-condensed">30+</div>
                <div className="text-white/80 text-xs uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-darker">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-8 rounded-xl text-center border border-grey/20 hover:border-primary/50 transition-colors">
                <div className="text-5xl font-condensed font-bold text-primary mb-2">{stat.n}</div>
                <div className="text-grey-text font-medium text-sm">{stat.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">The People</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white uppercase">Meet The Team</h2>
            <p className="text-grey-text mt-4 max-w-xl mx-auto">20 dedicated professionals delivering quality building services across London every day.</p>
          </div>

          <div className="space-y-14">
            {TEAM_CATEGORIES.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-condensed text-lg font-bold text-white uppercase whitespace-nowrap tracking-wider">{cat.label}</h3>
                  <div className="flex-1 h-px bg-grey/30" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {cat.members.map((member, i) => (
                    <motion.div key={member.name}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="text-center group"
                    >
                      <motion.div className="relative mx-auto mb-3 w-24 h-24"
                        whileHover={{ scale: 1.07 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-grey/30 group-hover:border-primary transition-colors duration-300 bg-dark-lighter">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </motion.div>
                      <h4 className="font-condensed font-bold text-white text-sm leading-tight mb-0.5">{member.name}</h4>
                      <p className="text-primary text-[11px] uppercase tracking-wide leading-tight">{member.role}</p>
                      {member.note && <p className="text-grey-text text-[10px] mt-0.5 italic">{member.note}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-darker">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Values</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white uppercase">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <motion.div className="bg-dark p-8 rounded-xl h-full border border-grey/20 cursor-default"
                  whileHover={{ y: -4, borderColor: 'rgba(109,180,76,0.5)' }} transition={{ duration: 0.2 }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary transition-colors">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="font-condensed text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-grey-text text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-14 bg-dark border-y border-grey/20 overflow-hidden">
        <div className="container-custom px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Accreditations &amp; Certifications</span>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden lg:flex flex-wrap justify-center gap-4 lg:gap-6 mb-14">
            {ACCREDITATIONS.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}>
                <motion.div className="w-28 h-20 bg-dark-lighter rounded-xl p-3 flex items-center justify-center shadow-sm cursor-default border border-grey/30"
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(109,180,76,0.2)' }} transition={{ duration: 0.2 }}>
                  <img src={a.img} alt={a.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Mobile/Tablet: Scrolling Carousel */}
          <div className="lg:hidden relative mb-14">
            <AutoScrollCarousel gap={16}>
              {[...ACCREDITATIONS, ...ACCREDITATIONS].map((a, i) => (
                <div key={`${a.name}-${i}`} className="flex-shrink-0 w-28 h-20 bg-dark-lighter rounded-xl p-3 flex items-center justify-center shadow-sm border border-grey/30">
                  <img src={a.img} alt={a.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
              ))}
            </AutoScrollCarousel>
          </div>

          <div className="text-center mb-8">
            <span className="text-grey-text text-sm uppercase tracking-wider">Trusted by</span>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden lg:flex flex-wrap justify-center gap-4 lg:gap-8">
            {PARTNERS.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}>
                <motion.div className="h-14 w-28 bg-white rounded-lg flex items-center justify-center cursor-default shadow-sm overflow-hidden"
                  whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} transition={{ duration: 0.2 }}>
                  <img src={p.img} alt={p.name} className="w-[140%] h-[140%] object-contain" loading="lazy" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Mobile/Tablet: Scrolling Carousel */}
          <div className="lg:hidden relative">
            <AutoScrollCarousel gap={16}>
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={`${p.name}-${i}`} className="flex-shrink-0 h-14 w-28 bg-white rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-[140%] h-[140%] object-contain" loading="lazy" />
                </div>
              ))}
            </AutoScrollCarousel>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">Ready to Start Your Project?</h2>
            <p className="text-grey-text text-lg mb-8">Contact us today to discuss your requirements with our experienced team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-codepen-white"><svg><rect x="0" y="0" width="240" height="56" /></svg>Contact Us</Link>
              <a href="tel:02084463447" className="btn-codepen"><svg><rect x="0" y="0" width="240" height="56" /></svg>Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
