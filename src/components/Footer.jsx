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
              <li><Link to="/services/fire-door-installation" className="text-grey-text hover:text-primary transition-colors">Fire Door Installation</Link></li>
              <li><Link to="/services/property-maintenance" className="text-grey-text hover:text-primary transition-colors">Property Maintenance</Link></li>
              <li><Link to="/services/building-refurbishment" className="text-grey-text hover:text-primary transition-colors">Building Refurbishment</Link></li>
              <li><Link to="/services/venetian-plastering" className="text-grey-text hover:text-primary transition-colors">Venetian Plastering</Link></li>
              <li><Link to="/services/fire-risk-management" className="text-grey-text hover:text-primary transition-colors">Fire Risk Management</Link></li>
              <li><Link to="/services/mould-maintenance" className="text-grey-text hover:text-primary transition-colors">Mould Maintenance</Link></li>
              <li><Link to="/services/bike-canopies-shelters" className="text-grey-text hover:text-primary transition-colors">Bike Canopies & Shelters</Link></li>
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

        <div className="border-t border-grey/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-grey-text text-sm">
          <p>&copy; {new Date().getFullYear()} JHD Builders Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
