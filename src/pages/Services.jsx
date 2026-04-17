import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: 'External Works',
      desc: 'Comprehensive external building maintenance including rendering, cladding, and structural repairs. We ensure your property exterior remains in top condition.',
      image: '/images/services-external.jpg',
      features: ['Rendering', 'Cladding', 'Structural Repairs', 'Maintenance']
    },
    {
      title: 'Refurbishments',
      desc: 'Complete property refurbishments from kitchens and bathrooms to full property renovations. We transform spaces to meet modern standards.',
      image: '/images/services-refurbishment.jpg',
      features: ['Kitchens', 'Bathrooms', 'Full Renovations', 'Modernisation']
    },
    {
      title: 'Relets',
      desc: 'Property preparation for new tenants including repairs, cleaning, and cosmetic improvements to ensure quick turnaround and tenant satisfaction.',
      image: '/images/services-relet.jpg',
      features: ['Repairs', 'Cleaning', 'Decorating', 'Inspections']
    },
    {
      title: 'Fencing',
      desc: 'Professional fencing services for residential and commercial properties. From garden fences to security fencing, we provide durable solutions.',
      image: '/images/services-fencing.jpg',
      features: ['Garden Fencing', 'Security Fencing', 'Repairs', 'Installation']
    },
    {
      title: 'Disability Adaptations',
      desc: 'Accessibility modifications to make properties suitable for all. We install ramps, handrails, accessible bathrooms, and other adaptations.',
      image: '/images/services-disability.jpg',
      features: ['Ramps', 'Handrails', 'Accessible Bathrooms', 'Door Widening']
    },
    {
      title: 'Fire Risk Management',
      desc: 'Fire safety solutions including fire door installation, compartmentation, and compliance works to meet current regulations.',
      image: '/images/services-fire.jpg',
      features: ['Fire Doors', 'Compartmentation', 'Compliance', 'Safety Systems']
    }
  ]

  return (
    <>
      {/* Hero Section */}
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
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              WHAT WE DO
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              With our dedicated & skilled workforce, we feel confident that we have everything necessary to cope with the many needs of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-dark-lighter rounded-xl overflow-hidden border border-grey/20 hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-condensed text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-grey-text text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs bg-dark px-3 py-1 rounded-full text-grey-text border border-grey/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-darker">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6">
                EXPERIENCE & EXPERTISE
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">30+ Years Experience</h4>
                    <p className="text-grey-text text-sm">Three decades of delivering quality building services across London.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dedicated Workforce</h4>
                    <p className="text-grey-text text-sm">Skilled team committed to delivering above and beyond expectations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Time & Cost Efficiency</h4>
                    <p className="text-grey-text text-sm">We understand your concerns and work to ease them through experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Local Authority Approved</h4>
                    <p className="text-grey-text text-sm">Trusted contractor for local authorities and major landlords.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-dark-lighter rounded-2xl p-8 border border-grey/20">
                <h3 className="font-condensed text-2xl font-bold text-white mb-6">Get a Free Quote</h3>
                <p className="text-grey-text mb-6">
                  Contact us today to discuss your project requirements. Our team is ready to help.
                </p>
                <div className="space-y-3">
                  <Link to="/contact" className="btn-codepen w-full block text-center">
                    <svg className="w-full h-full">
                      <rect x="0" y="0" width="100%" height="100%" rx="4" />
                    </svg>
                    Request Quote
                  </Link>
                  <a href="tel:02084463447" className="btn-codepen-white w-full block text-center">
                    <svg className="w-full h-full">
                      <rect x="0" y="0" width="100%" height="100%" rx="4" />
                    </svg>
                    Call 020 8446 3447
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

export default Services
