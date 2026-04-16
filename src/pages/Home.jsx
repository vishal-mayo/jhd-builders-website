import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-dark pt-20">
        <div className="container-custom px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-condensed text-5xl lg:text-7xl font-bold text-white mb-6">
            Commercial & Property<br /><span className="text-primary">Building Specialist</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-grey-text max-w-2xl mx-auto mb-10">
            30+ years of excellence in building maintenance, refurbishment, and construction services across London.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-4 justify-center">
            <Link to="/contact" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-colors">Get Free Quote</Link>
            <Link to="/services" className="border-2 border-grey text-white px-8 py-4 font-semibold hover:border-primary hover:text-primary transition-colors">Our Services</Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-darker">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
              <h2 className="font-condensed text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-grey-text mb-6">We are a building contractor with 30+ years experience working with local authorities and major private landlords in London.</p>
              <Link to="/about" className="text-primary font-semibold">Learn More →</Link>
            </div>
            <div className="bg-dark-lighter aspect-video rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-dark">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h2 className="font-condensed text-4xl font-bold text-white mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['External Works', 'Refurbishments', 'Relets', 'Fencing', 'Disability Adaptations', 'Fire Risk Management'].map((service) => (
              <div key={service} className="bg-dark-lighter p-6 rounded-lg">
                <h3 className="font-condensed text-xl font-bold text-white">{service}</h3>
              </div>
            ))}
          </div>
          <Link to="/services" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-colors">View All Services</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-condensed text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <Link to="/contact" className="bg-white text-primary px-8 py-4 font-semibold hover:bg-grey-light transition-colors">Get Free Quote</Link>
        </div>
      </section>
    </>
  )
}
export default Home
