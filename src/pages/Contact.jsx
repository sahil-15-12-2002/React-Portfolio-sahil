import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // Refresh so animations trigger on route changes
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '917973014002'; // Your WhatsApp number with country code
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <main className="main">
        <section id="contact" className="contact section  mt-4">

          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Get in touch with me for collaborations, projects, or inquiries.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">

              {/* Contact Info */}
              <div className="col-lg-5">
                <div className="info-wrap">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Chandigarh, India</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Me</h3>
                      <p>+91 7973014002</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email</h3>
                      <p>10sahilkumar2002@gmail.com</p>
                    </div>
                  </div>

                  
                  <iframe
                    title="My Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.379267914057!2d76.78939841506207!3d30.704649681744443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed1d0d5f7c8d%3A0x9a39e5a5b5e21f3a!2sChandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1698374598123!5m2!1sen!2sin"
                    width="100%"
                    height="270"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7">
                <form onSubmit={handleWhatsAppSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">

                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">Your Name</label>
                      <input type="text" name="name" id="name-field" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email-field" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject-field" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">Message</label>
                      <textarea className="form-control" name="message" rows="10" id="message-field" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" style={{ backgroundColor: '#25D366', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>
                        Send via WhatsApp
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Contact;