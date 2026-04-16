function Services() {
  const services = [
    {title:'External Works',desc:'Comprehensive external building maintenance'},
    {title:'Refurbishments',desc:'Complete property refurbishments'},
    {title:'Relets',desc:'Property preparation for new tenants'},
    {title:'Fencing',desc:'Professional fencing services'},
    {title:'Disability Adaptations',desc:'Accessibility modifications'},
    {title:'Fire Risk Management',desc:'Fire safety solutions'},
  ]
  return (
    <>
      <section className="pt-32 pb-16 bg-darker">
        <div className="container-custom px-4 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white">What We Offer</h1>
        </div>
      </section>
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-dark-lighter p-8 rounded-lg">
                <h3 className="font-condensed text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-grey-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Services
