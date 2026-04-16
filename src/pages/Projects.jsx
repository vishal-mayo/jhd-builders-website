import { useState } from 'react'

function Projects() {
  const [category, setCategory] = useState('All')
  const projects = [
    {id:1,title:'Commercial Building',cat:'Commercial'},
    {id:2,title:'Modern Home',cat:'Residential'},
    {id:3,title:'Kitchen Renovation',cat:'Refurbishment'},
    {id:4,title:'Property Exterior',cat:'External'},
  ]
  const cats = ['All','Commercial','Residential','Refurbishment','External']
  const filtered = category === 'All' ? projects : projects.filter(p => p.cat === category)
  
  return (
    <>
      <section className="pt-32 pb-16 bg-darker">
        <div className="container-custom px-4 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Work</span>
          <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white">Project Gallery</h1>
        </div>
      </section>
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map((c) => (
              <button key={c} onClick={() => setCategory(c)} 
                className={`px-6 py-2 rounded-full font-medium ${category === c ? 'bg-primary text-white' : 'bg-dark-lighter text-grey-text'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="aspect-[4/3] bg-dark-lighter rounded-lg flex items-center justify-center">
                <span className="text-grey-text">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects
