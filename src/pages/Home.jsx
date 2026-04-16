import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section with Vimeo Video Background */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Vimeo Video Background */}
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

        {/* Hero Content */}
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/images/logo.png" 
                alt="JHD Builders Limited" 
                className="h-32 md:h-40 mx-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-condensed text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-wider"
            >
              Commercial & Property Building Specialist
            </motion.h1>

            {/* CTA Buttons with CodePen Style Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* Primary Button - Diagonal Slide Up Effect */}
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-primary text-white px-10 py-4 font-semibold text-lg uppercase tracking-wider"
              >
                {/* Background that slides up */}
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                {/* Text - changes color on hover */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-500">
                  Contact Us
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary Button - Border with Diagonal Slide */}
              <Link
                to="/services"
                className="group relative overflow-hidden border-2 border-white text-white px-10 py-4 font-semibold text-lg uppercase tracking-wider"
              >
                {/* Background that slides up */}
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                {/* Text - changes color on hover */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-dark transition-colors duration-500">
                  Our Services
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
                Who We Are
              </h2>
              <div className="space-y-4 text-grey-text text-lg leading-relaxed">
                <p>
                  We are a building contractor who, over the past 30 years have worked with 
                  local authorities carrying out a large range of works. We are the main 
                  contractor for one of the UK's largest private landlords in London supporting 
                  them with external works, refurbishments, relets, fencing and dis-aids and adapts.
                </p>
                <p>
                  We aim to deliver above and beyond expectations. We don't want to find a 
                  quick work around, we aim to deliver to our high expectations every time to 
                  ensure no faults or issues can occur.
                </p>
                <p>
                  Our team are highly trained and take pride in their work. We aim to carry 
                  out all work in a professional manner that will leave your building/property 
                  looking flawless.
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
                <img
                  src="/images/hero-bg.jpg"
                  alt="JHD Builders construction work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-2xl">
                <div className="text-5xl font-bold text-white">30+</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              What We Offer
            </h2>
            <p className="text-grey-text text-lg">
              With our dedicated & skilled workforce, we feel confident that we have everything 
              necessary to cope with the many needs of our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Fire Door Installation', 
                image: '/images/service-fire.jpg',
                desc: 'Fire rated door installations in London and surrounding counties'
              },
              { 
                title: 'Property Maintenance', 
                image: '/images/service-maintenance.jpg',
                desc: 'Comprehensive property maintenance services'
              },
              { 
                title: 'Refurbishment', 
                image: '/images/service-refurb.jpg',
                desc: 'Complete property refurbishment specialists'
              },
              { 
                title: 'Venetian Plastering', 
                image: '/images/service-plaster.jpg',
                desc: 'Expert Venetian plastering services'
              },
              { 
                title: 'Fire Risk Management', 
                image: '/images/service-risk.jpg',
                desc: 'Fire risk assessment and management'
              },
              { 
                title: 'Mould Maintenance', 
                image: '/images/service-mould.jpg',
                desc: 'Professional mould treatment and prevention'
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-condensed text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-grey-light text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group relative overflow-hidden bg-primary text-white px-10 py-4 font-semibold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-500">
                View All Services
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
              Meet The Team
            </h2>
            <p className="text-grey-text text-lg">
              Brockley is our furry mascot who helps us out accompanying our delivery driver 
              Paul 'Laz' Lazarou. Be sure to keep a look out for him as we deliver to you!
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-64 h-64">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src="/images/brockley.png"
                    alt="Brockley - JHD Builders Mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl shadow-lg">
                  🐾
                </div>
              </div>
              <h3 className="font-condensed text-3xl font-bold text-white mb-2">Brockley</h3>
              <p className="text-primary text-lg uppercase tracking-wider">Chief Morale Officer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-12 uppercase">
              What Our Clients Say
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                "We had four building companies quoting for our loft. We chose JHD Builders, 
                because we liked the way they clearly specified all of the jobs in the quote 
                and their price was very competitive. We are very happy with our choice- the 
                project took exactly 9 weeks, as they estimated, and the job was done to a 
                high standard. It was a pleasure to deal with them, so I definitely recommend 
                JHD Builders."
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-white font-semibold text-lg">Sarah M.</p>
                <p className="text-white/70">Loft Conversion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-primary text-white px-10 py-4 font-semibold uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-500">
                Get Free Quote
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
