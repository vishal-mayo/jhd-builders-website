import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Commercial Office Refurbishment',
      category: 'Commercial',
      location: 'Central London',
      description: 'Complete interior and exterior refurbishment of a 5-story commercial building, including new facades, windows, and modern office spaces.',
      image: '/images/projects/project-commercial-1.jpg'
    },
    {
      id: 2,
      title: 'Residential Development',
      category: 'Residential',
      location: 'North London',
      description: 'New build residential development comprising 12 luxury apartments with high-end finishes and modern amenities.',
      image: '/images/projects/project-residential-1.jpg'
    },
    {
      id: 3,
      title: 'Social Housing Refurbishment',
      category: 'Refurbishment',
      location: 'East London',
      description: 'Extensive refurbishment of 50 social housing units including kitchen and bathroom upgrades, electrical rewiring, and energy efficiency improvements.',
      image: '/images/projects/project-refurb-1.jpg'
    },
    {
      id: 4,
      title: 'External Works Programme',
      category: 'External',
      location: 'South London',
      description: 'Large-scale external works programme including rendering, cladding replacement, and structural repairs across multiple residential blocks.',
      image: '/images/projects/project-external-1.jpg'
    },
    {
      id: 5,
      title: 'Disability Adaptations',
      category: 'Residential',
      location: 'West London',
      description: 'Specialist disability adaptations including ramp installations, bathroom modifications, and door widening for accessibility.',
      image: '/images/projects/project-disability-1.jpg'
    },
    {
      id: 6,
      title: 'Fire Safety Upgrade',
      category: 'Commercial',
      location: 'Central London',
      description: 'Comprehensive fire safety upgrade including fire door installation, compartmentation works, and compliance certification.',
      image: '/images/projects/project-fire-1.jpg'
    }
  ]

  const categories = ['All', 'Commercial', 'Residential', 'Refurbishment', 'External']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Work</span>
            <h1 className="font-condensed text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              PROJECT GALLERY
            </h1>
            <p className="text-grey-text text-xl leading-relaxed">
              Browse our portfolio of completed projects across London. From commercial developments to residential refurbishments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-lighter text-grey-text hover:bg-grey/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-dark-lighter rounded-xl overflow-hidden border border-grey/20 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-primary text-sm font-semibold">{project.category}</span>
                      <h3 className="text-white font-condensed text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-condensed text-xl font-bold text-white mt-2 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-grey-text text-sm">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-lighter rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-grey/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="font-condensed text-3xl font-bold text-white mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-grey-text mb-4">
                  <span className="text-white font-semibold">Location:</span> {selectedProject.location}
                </p>
                <p className="text-grey-text leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
