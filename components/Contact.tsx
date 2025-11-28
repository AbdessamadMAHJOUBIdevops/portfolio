import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Send, Phone, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // États pour gérer l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi des données à FormSubmit via AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `🚀 Portfolio Contact: ${formData.name}`, // Sujet du mail
            _template: "table", // Format du mail propre
            _captcha: "false"   // Désactive le captcha pour une UX fluide
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset du formulaire
      } else {
        alert("Une erreur est survenue. Merci de réessayer plus tard.");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      alert("Erreur de connexion. Vérifiez votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-devops-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-devops-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-devops-accent">#</span> Get In Touch
          </h2>
          <p className="text-gray-400">Open to new opportunities in Cloud Engineering, DevOps, and SRE.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's build something scalable.</h3>
            <p className="text-gray-400 leading-relaxed">
              I am currently available for full-time positions. Whether you have a question about my stack, 
              want to discuss a project, or just want to say hi, feel free to drop a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-devops-light rounded-lg text-devops-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-devops-accent transition-colors font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-devops-light rounded-lg text-devops-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Phone</p>
                  <p className="text-white font-medium">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-devops-light rounded-lg text-devops-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Location</p>
                  <p className="text-white font-medium">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-devops-light p-8 rounded-2xl border border-gray-700 shadow-xl relative">
            
            {isSuccess ? (
              // ✅ Message de succès
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-devops-light rounded-2xl z-10 animate-fade-in p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thanks for reaching out, Abdessamad. I'll get back to you ASAP.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-devops-accent hover:text-white font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              // 📝 Le Formulaire
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-devops-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-devops-accent focus:ring-1 focus:ring-devops-accent transition-colors"
                    placeholder="Recruiter Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-devops-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-devops-accent focus:ring-1 focus:ring-devops-accent transition-colors"
                    placeholder="recruiter@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-devops-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-devops-accent focus:ring-1 focus:ring-devops-accent transition-colors resize-none"
                    placeholder="Hi Abdessamad, I saw your portfolio and..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-devops-accent hover:bg-sky-500 text-devops-dark font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;