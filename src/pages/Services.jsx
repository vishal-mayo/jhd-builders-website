import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase">What We Do</h1>
            <p className="text-grey-text text-xl leading-relaxed">
              With our dedicated &amp; skilled workforce, we feel confident that we have everything
              necessary to cope with the many needs of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tile Grid */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <motion.div
                  className="h-full bg-dark-lighter rounded-2xl border border-grey/20 p-7 flex flex-col cursor-default"
                  whileHover={{ y: -4, borderColor: `${s.color}60` }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.Icon size={28} color={s.color} />
                  </div>

                  {/* Title */}
                  <h3 className="font-condensed text-xl font-bold text-white mb-3">{s.title}</h3>

                  {/* Description */}
                  <p className="text-grey-text text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.features.slice(0, 4).map(f => (
                      <span key={f}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs border"
                        style={{ borderColor: `${s.color}45`, color: s.color, backgroundColor: `${s.color}08` }}
                      >
                        <CheckCircle2 size={10} />{f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group hover:gap-3 transition-all"
                    style={{ color: s.color }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-darker">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-8 uppercase">Experience &amp; Expertise</h2>
              <div className="space-y-5">
                {[
                  { title: '30+ Years Experience', desc: 'Three decades delivering quality building services across London and the South East.' },
                  { title: 'Fully Accredited', desc: 'CHAS, Construction Line and Builders Profile accredited. BM Trada certified for fire doors.' },
                  { title: 'Skilled Workforce', desc: '15\u201320 dedicated operatives committed to delivering above and beyond expectations.' },
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
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-dark rounded-2xl p-8 border border-grey/20">
                <h3 className="font-condensed text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-grey-text mb-6 text-sm leading-relaxed">Contact us today to discuss your project requirements with our experienced team.</p>
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
