import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-darker">
        <div className="container-custom px-4 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
          <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white">Who We Are</h1>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-grey-text text-lg">
              <p>We are a building contractor who, over the past 30 years have worked with local authorities carrying out a large range of works.</p>
              <p>We are the main contractor for one of the UK's largest private landlords in London supporting them with external works, refurbishments, relets, fencing and disability adaptations.</p>
              <p>We aim to deliver above and beyond expectations every time.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[{n:'30+',l:'Years Experience'},{n:'500+',l:'Projects'},{n:'100%',l:'Satisfaction'},{n:'50+',l:'Team Members'}].map((s) => (
                <div key={s.l} className="bg-dark-lighter p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{s.n}</div>
                  <div className="text-grey-text">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
