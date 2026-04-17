import { motion } from 'framer-motion'

function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="py-20 bg-darker border-b border-grey/20">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">Cookies Policy</h1>
            <p className="text-grey-text">Last updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">What Are Cookies</h2>
              <p className="text-grey-text leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners. 
                Cookies help us to improve your experience of our website and to ensure that it performs as you expect it to.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">How We Use Cookies</h2>
              <p className="text-grey-text leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-2 text-grey-text">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Essential cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalisation based on your preferences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-grey-text">
                  <thead>
                    <tr className="border-b border-grey/30">
                      <th className="pb-3 pr-4 text-white font-condensed uppercase">Cookie Name</th>
                      <th className="pb-3 pr-4 text-white font-condensed uppercase">Purpose</th>
                      <th className="pb-3 text-white font-condensed uppercase">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-grey/20">
                    <tr>
                      <td className="py-3 pr-4">_ga</td>
                      <td className="py-3 pr-4">Google Analytics - Used to distinguish users</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">_gid</td>
                      <td className="py-3 pr-4">Google Analytics - Used to distinguish users</td>
                      <td className="py-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">_gat</td>
                      <td className="py-3 pr-4">Google Analytics - Used to throttle request rate</td>
                      <td className="py-3">1 minute</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">cookie_consent</td>
                      <td className="py-3 pr-4">Stores your cookie preferences</td>
                      <td className="py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Managing Cookies</h2>
              <p className="text-grey-text leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, if you 
                limit the ability of websites to set cookies, you may worsen your overall user experience. 
                To find out more about cookies, including how to see what cookies have been set and how to manage 
                and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
              </p>
              <p className="text-grey-text leading-relaxed">
                You can also opt out of Google Analytics tracking by visiting 
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Third-Party Cookies</h2>
              <p className="text-grey-text leading-relaxed">
                We may use third-party services that use cookies on our behalf. These services help us analyse 
                how our website is used and to improve our services. We use Google Analytics to understand 
                how visitors engage with our website. For more information on how Google uses data when you 
                use our site, please visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Changes to This Policy</h2>
              <p className="text-grey-text leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in technology, legislation, 
                or our data practices. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Contact Us</h2>
              <p className="text-grey-text leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 text-grey-text">
                <p className="font-semibold text-white">JHD Builders Limited</p>
                <p>Email: info@jhdbuilders.com</p>
                <p>Phone: 020 8446 3447</p>
                <p>Address: London, UK</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CookiesPolicy
