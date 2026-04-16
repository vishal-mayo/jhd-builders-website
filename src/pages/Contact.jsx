import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-darker">
        <div className="container-custom px-4 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Contact Us</span>
          <h1 className="font-condensed text-4xl lg:text-5xl font-bold text-white">Get In Touch</h1>
        </div>
      </section>
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="font-condensed text-3xl font-bold text-white mb-6">Let's Discuss Your Project</h2>
              <div className="space-y-4 text-grey-text">
                <p>📞 020 1234 5678</p>
                <p>✉️ info@jhdbuilders.com</p>
                <p>📍 London, UK</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-dark-lighter p-8 rounded-lg">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-white">Thank You!</h3>
                </div>
              ) : (
                <>
                  <input type="text" placeholder="Name" required className="w-full mb-4 px-4 py-3 bg-dark border border-grey rounded text-white" onChange={(e) => setForm({...form,name:e.target.value})} />
                  <input type="email" placeholder="Email" required className="w-full mb-4 px-4 py-3 bg-dark border border-grey rounded text-white" onChange={(e) => setForm({...form,email:e.target.value})} />
                  <textarea placeholder="Message" rows={4} className="w-full mb-4 px-4 py-3 bg-dark border border-grey rounded text-white resize-none" onChange={(e) => setForm({...form,message:e.target.value})} />
                  <button type="submit" className="w-full bg-primary text-white py-4 font-semibold hover:bg-primary-dark transition-colors">Send Message</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
