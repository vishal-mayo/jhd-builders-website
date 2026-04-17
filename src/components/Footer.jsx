import { Link } from 'react-router-dom'

const JHD_LOGO = '/images/logo.png'

function Footer() {
  return (
    <footer className="bg-darker py-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={JHD_LOGO}
                alt="JHD Builders Limited"
                className="h-14 w-auto"
              />
              <span className="font-condensed font-bold text-xl text-white">JHD Builders</span>
            </Link>
            <p className="text-grey-text text-sm mb-6">Commercial and property building specialists serving London for over 30 years.</p>
          </div>

          <div>
            <h4 className="font-condensed font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-grey-text hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-grey-text hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-grey-text hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-grey-text hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-condensed font-bold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">External Works</Link></li>
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">Refurbishments</Link></li>
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">Relets</Link></li>
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">Fencing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-condensed font-bold text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-grey-text">
              <li>020 1234 5678</li>
              <li>info@jhdbuilders.com</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-grey/20 mt-12 pt-8 text-center text-grey-text text-sm">
          <p>&copy; {new Date().getFullYear()} JHD Builders Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
