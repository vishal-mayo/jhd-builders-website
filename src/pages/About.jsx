import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function About() {
  const stats = [
    { n: '30+', l: 'Years Experience' },
    { n: '500+', l: 'Projects Completed' },
    { n: '100%', l: 'Client Satisfaction' },
    { n: '50+', l: 'Team Members' }
  ]

  const values = [
    {
      title: 'Quality',
      desc: 'We never compromise on quality. Every project is completed to the highest standards.',
      icon: '✓'
    },
    {
      title: 'Reliability',
      desc: 'We deliver on time and on budget. Our clients trust us to get the job done right.',
      icon: '✓'
    },
    {
      title: 'Safety',
      desc: 'Safety is paramount. We maintain rigorous health and safety standards on every site.',
      icon: '✓'
    },
    {
      title: 'Innovation',
      desc: 'We embrace new technologies and methods to deliver better results for our clients.',
      icon: '✓'
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              WHO WE ARE
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              We are a building contractor who, over the past 30 years have worked with local authorities carrying out a large range of works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Brockley */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-grey-text text-lg leading-relaxed">
                We are the main contractor for one of the UK's largest private landlords in London supporting them with external works, refurbishments, relets, fencing and disability adaptations.
              </p>
              <p className="text-grey-text text-lg leading-relaxed">
                Our dedicated and skilled workforce gives us the confidence to cope with the many needs of our clients. We understand that efficiency in time and money is the major issue, and with our experience we can help ease those concerns.
              </p>
              <p className="text-grey-text text-lg leading-relaxed">
                We aim to deliver above and beyond expectations every time. Our commitment to quality and customer satisfaction has made us a trusted partner for local authorities and private clients alike.
              </p>
              
              <div className="pt-4">
                <Link to="/services" className="btn-codepen">
                  <svg>
                    <rect x="0" y="0" width="100%" height="100%" rx="4" />
                  </svg>
                  Our Services
                </Link>
              </div>
            </motion.div>

            {/* Brockley Mascot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-dark-lighter rounded-2xl p-8 border border-grey/20">
                <img 
                  src="/images/brockley.png" 
                  alt="Brockley - JHD Builders Mascot" 
                  className="w-full max-w-md mx-auto"
                />
                <div className="text-center mt-6">
                  <h3 className="font-condensed text-2xl font-bold text-white mb-2">Meet Brockley</h3>
                  <p className="text-grey-text">Our friendly mascot representing the hard work and dedication of our team.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                <div className="text-grey-text font-medium">{stat.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Values</span>
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white">What We Stand For</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-dark-lighter p-8 rounded-xl h-full border border-grey/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="font-condensed text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-grey-text text-sm leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-grey-text text-lg mb-8">
              Contact us today to discuss your requirements with our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-codepen-white">
                <svg>
                  <rect x="0" y="0" width="100%" height="100%" rx="4" />
                </svg>
                Contact Us
              </Link>
              <a href="tel:02084463447" className="btn-codepen">
                <svg>
                  <rect x="0" y="0" width="100%" height="100%" rx="4" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
