import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['The Courtyard, 2a Bedford Road', 'Finchley, London, N2 9DA']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['020 8446 3447', '07956 293612']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@jhdbuilders.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 2pm']
    }
  ]

  const team = [
    {
      name: 'Sian',
      role: 'Office Manager',
      phone: '020 8446 3447',
      email: 'sian@jhdbuilders.com'
    },
    {
      name: 'Harry',
      role: 'Project Manager',
      phone: '07956 293612',
      email: 'harry@jhdbuilders.com'
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Contact Us</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              Speak to a member of our team today. We're here to help with your building project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-dark">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-lighter p-6 rounded-xl border border-grey/20 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="font-condensed text-lg font-bold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-grey-text text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Team */}
      <section className="section-padding bg-darker">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-condensed text-3xl font-bold text-white mb-6">Request a Callback</h2>
              <p className="text-grey-text mb-8">
                Fill out the form below and our friendly team members Sian or Harry would be happy to contact you regarding your queries.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-dark-lighter p-8 rounded-xl border border-primary/30 text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-grey-text">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-dark-lighter p-8 rounded-xl border border-grey/20">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-dark border border-grey rounded-lg text-white placeholder-grey-text focus:border-primary focus:outline-none transition-colors"
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 bg-dark border border-grey rounded-lg text-white placeholder-grey-text focus:border-primary focus:outline-none transition-colors"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-dark border border-grey rounded-lg text-white placeholder-grey-text focus:border-primary focus:outline-none transition-colors"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <select
                      className="w-full px-4 py-3 bg-dark border border-grey rounded-lg text-grey-text focus:border-primary focus:outline-none transition-colors"
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a Service</option>
                      <option value="external">External Works</option>
                      <option value="refurbishment">Refurbishments</option>
                      <option value="relet">Relets</option>
                      <option value="fencing">Fencing</option>
                      <option value="disability">Disability Adaptations</option>
                      <option value="fire">Fire Risk Management</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-dark border border-grey rounded-lg text-white placeholder-grey-text focus:border-primary focus:outline-none transition-colors resize-none mb-6"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Team & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Team */}
              <div>
                <h2 className="font-condensed text-3xl font-bold text-white mb-6">Meet Our Team</h2>
                <div className="space-y-4">
                  {team.map((member) => (
                    <div
                      key={member.name}
                      className="bg-dark-lighter p-6 rounded-xl border border-grey/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                          {member.name[0]}
                        </div>
                        <div>
                          <h3 className="font-condensed text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-primary text-sm mb-2">{member.role}</p>
                          <p className="text-grey-text text-sm">{member.phone}</p>
                          <p className="text-grey-text text-sm">{member.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-dark-lighter p-4 rounded-xl border border-grey/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.568486024!2d-0.1655!3d51.5943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876192c5c8b0e6f%3A0x7c4e3e5e5e5e5e5e!2s2a%20Bedford%20Rd%2C%20London%20N2%209DA!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JHD Builders Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
