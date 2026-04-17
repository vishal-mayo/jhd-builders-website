import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { n: '30+', l: 'Years Experience' },
  { n: '500+', l: 'Projects Completed' },
  { n: '100%', l: 'Client Satisfaction' },
  { n: '15-20', l: 'Skilled Operatives' },
]

const values = [
  { title: 'Quality', desc: 'We never take shortcuts. Every project is completed to the highest standard — no faults, no issues, no compromises.', icon: '◆' },
  { title: 'Reliability', desc: 'We deliver on time and on budget. Our clients trust us to get the job done right, every single time.', icon: '◆' },
  { title: 'Safety', desc: 'Health & safety is paramount. All works are carried out in full compliance with current regulations.', icon: '◆' },
  { title: 'Experience', desc: '30+ years working with local authorities and major London landlords gives us unmatched expertise and insight.', icon: '◆' },
]

const accreditations = [
  { name: 'CHAS', full: 'Contractors Health & Safety' },
  { name: 'Constructionline', full: 'Pre-Qualification Scheme' },
  { name: 'Builders Profile', full: 'Industry Accreditation' },
  { name: 'BM Trada', full: 'Fire Door Certification' },
]

export default function About() {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase">
              Who We Are
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              A building contractor with over 30 years of experience working with local authorities and
              major private landlords across London.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-grey-text text-lg leading-relaxed">
                We are the main contractor for one of the UK&#39;s largest private landlords in London
                supporting them with external works, refurbishments, relets, fencing and disability adaptations.
                We also work with two London offices — North London and Essex — specialising in local authority
                and private landlord work.
              </p>
              <p className="text-grey-text text-lg leading-relaxed">
                Our dedicated and skilled workforce gives us the confidence to cope with the many needs of
                our clients. We understand that efficiency in time and money is the major concern — and with
                our 30 years of experience, we can help ease those concerns.
              </p>
              <p className="text-grey-text text-lg leading-relaxed">
                We aim to deliver above and beyond expectations every time. Our commitment to quality and
                customer satisfaction has made us a trusted partner for local authorities and private clients alike.
              </p>
              <div className="pt-2">
                <Link to="/services" className="btn-codepen">
                  <svg><rect x="0" y="0" width="200" height="56" /></svg>
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="/images/hero-bg.jpg" alt="JHD Builders team at work" className="w-full h-full object-cover" />
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
              <motion.div
                key={stat.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-8 rounded-xl text-center border border-grey/20 hover:border-primary/50 transition-colors"
              >
                <div className="text-5xl font-condensed font-bold text-primary mb-2">{stat.n}</div>
                <div className="text-grey-text font-medium text-sm">{stat.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">The People</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white uppercase">Meet The Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Jason Donnelly', role: 'Director & Co-Founder', note: 'BM Trada Certified Operative', img: '/images/team-jason.jpg' },
              { name: 'Paul "Laz" Lazarou', role: 'Delivery Driver', note: '15+ years with the company', img: '/images/team-laz.jpg' },
              { name: 'Brockley', role: 'Chief Morale Officer', note: 'Loyal Cocker Spaniel mascot 🐾', img: '/images/brockley.png' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center group"
              >
                <motion.div
                  className="relative mb-5 mx-auto w-44 h-44"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-lighter group-hover:border-primary transition-colors duration-300 shadow-xl bg-dark-lighter">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <h3 className="font-condensed text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-1">{member.role}</p>
                <p className="text-grey-text text-sm">{member.note}</p>
              </motion.div>
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
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-dark p-8 rounded-xl h-full border border-grey/20 cursor-default"
                  whileHover={{ y: -4, borderColor: 'rgba(109,180,76,0.5)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
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
      <section className="py-14 bg-dark border-y border-grey/20">
        <div className="container-custom px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Accreditations &amp; Certifications</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {accreditations.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col items-center gap-2"
              >
                <motion.div
                  className="w-24 h-24 rounded-xl bg-darker border border-grey/30 flex items-center justify-center"
                  whileHover={{ borderColor: '#6db44c', y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-condensed font-bold text-white text-sm group-hover:text-primary transition-colors text-center leading-tight px-2">
                    {a.name}
                  </span>
                </motion.div>
                <span className="text-grey-text text-xs text-center max-w-[96px] leading-snug">{a.full}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              Ready to Start Your Project?
            </h2>
            <p className="text-grey-text text-lg mb-8">
              Contact us today to discuss your requirements with our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-codepen-white">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                Contact Us
              </Link>
              <a href="tel:02084463447" className="btn-codepen">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
