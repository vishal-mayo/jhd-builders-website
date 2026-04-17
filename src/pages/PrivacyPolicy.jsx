import { motion } from 'framer-motion'

function PrivacyPolicy() {
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
            <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">Privacy Policy</h1>
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
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Introduction</h2>
              <p className="text-grey-text leading-relaxed">
                JHD Builders Limited ("we", "our", "us") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your personal information when 
                you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Information We Collect</h2>
              <p className="text-grey-text leading-relaxed mb-4">
                We may collect and process the following data about you:
              </p>
              <ul className="space-y-2 text-grey-text">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Information you provide by filling in forms on our website (such as name, email address, phone number)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Records of correspondence if you contact us</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Details of your visits to our website including traffic data, location data, and other communication data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Information about your computer, including IP address, operating system, and browser type</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">How We Use Your Information</h2>
              <p className="text-grey-text leading-relaxed mb-4">
                We use information held about you in the following ways:
              </p>
              <ul className="space-y-2 text-grey-text">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To provide you with information, products, or services that you request from us</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To carry out our obligations arising from any contracts entered into between you and us</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To notify you about changes to our service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To ensure that content from our site is presented in the most effective manner for you</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Data Security</h2>
              <p className="text-grey-text leading-relaxed">
                We have implemented appropriate technical and organisational measures to safeguard your personal 
                data against unauthorised or unlawful processing and against accidental loss, destruction, or damage. 
                However, please note that the transmission of information via the internet is not completely secure. 
                Although we will do our best to protect your personal data, we cannot guarantee the security of your 
                data transmitted to our site.
              </p>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Your Rights</h2>
              <p className="text-grey-text leading-relaxed mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="space-y-2 text-grey-text">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to access your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to rectification of inaccurate personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to erasure of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to restrict processing of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to data portability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>The right to object to processing of your personal data</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-condensed text-2xl font-bold text-white mb-4 uppercase">Contact Us</h2>
              <p className="text-grey-text leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy
