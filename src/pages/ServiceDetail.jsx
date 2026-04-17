import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const related = SERVICES.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-darker">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${service.color}12 0%, transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }} />
        <div className="container-custom px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-grey-text hover:text-white text-sm mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All Services
            </Link>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${service.color}18`, border: `1px solid ${service.color}40` }}>
                <service.Icon size={36} color={service.color} />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest mb-2 block" style={{ color: service.color }}>Service</span>
                <h1 className="font-condensed text-4xl lg:text-6xl font-bold text-white uppercase leading-tight">
                  {service.title}
                </h1>
                <p className="text-grey-text text-lg mt-3">{service.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Long description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Overview</span>
              <h2 className="font-condensed text-3xl font-bold text-white mb-6 uppercase">About This Service</h2>
              {service.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-grey-text leading-relaxed mb-4 last:mb-0">{para}</p>
              ))}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-codepen">
                  <svg><rect x="0" y="0" width="200" height="56" /></svg>
                  Get a Quote
                </Link>
                <a href="tel:02084463447" className="btn-codepen-white">
                  <svg><rect x="0" y="0" width="200" height="56" /></svg>
                  020 8446 3447
                </a>
              </div>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Key Points</span>
              {service.keyPoints.map((kp, i) => (
                <motion.div key={kp.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-dark-lighter rounded-xl p-5 border border-grey/20 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${service.color}20` }}>
                      <CheckCircle2 size={15} color={service.color} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{kp.title}</h4>
                      <p className="text-grey-text text-sm leading-relaxed">{kp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-darker">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">What&#39;s Included</span>
            <h2 className="font-condensed text-3xl font-bold text-white uppercase">Service Features</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.features.map((f, i) => (
              <motion.div key={f}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-dark rounded-xl p-4 border border-grey/20"
                style={{ borderLeftColor: service.color, borderLeftWidth: 3 }}
              >
                <CheckCircle2 size={18} color={service.color} className="flex-shrink-0" />
                <span className="text-white font-medium text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">Explore More</span>
            <h2 className="font-condensed text-3xl font-bold text-white uppercase">Related Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={`/services/${s.slug}`}
                  className="block h-full bg-dark-lighter rounded-xl border border-grey/20 p-6 hover:border-primary/40 transition-all group hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.Icon size={22} color={s.color} />
                  </div>
                  <h3 className="font-condensed text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-grey-text text-xs leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all"
                    style={{ color: s.color }}>
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${service.color}08 0%, transparent 50%)` }} />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-condensed text-4xl font-bold text-white mb-4 uppercase">Interested in {service.shortTitle}?</h2>
            <p className="text-grey-text mb-8 leading-relaxed">
              Contact JHD Builders today to discuss your requirements. Our experienced team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-codepen">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                Get a Quote
              </Link>
              <a href="tel:02084463447" className="btn-codepen-white">
                <svg><rect x="0" y="0" width="200" height="56" /></svg>
                020 8446 3447
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
