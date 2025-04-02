import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Simulate successful submission - in a real app, check for errors
      try {
        // API call would go here
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError(true);
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">İletişim</h1>
          <div className="breadcrumbs">
            <Link to="/">Ana Sayfa</Link> / <span>İletişim</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-title">İletişim Bilgileri</h2>
              <p className="contact-subtitle">Aşağıdaki bilgiler üzerinden bize ulaşabilir veya iletişim formunu doldurabilirsiniz.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon address-icon"></div>
                  <div className="info-content">
                    <h3>Adres</h3>
                    <p>FEVZİÇAKMAK MAH. ŞEHİT MUSTAFA TÜNEL CAD. C2 BLOK NO: 9 AJ KARATAY/ KONYA</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon email-icon"></div>
                  <div className="info-content">
                    <h3>E-posta</h3>
                    <p>muhasebe@metotmekatronik.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon phone-icon"></div>
                  <div className="info-content">
                    <h3>Telefon</h3>
                    <p>+90 000 000 00 00</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon time-icon"></div>
                  <div className="info-content">
                    <h3>Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="social-media">
                <h3>Sosyal Medya</h3>
                <div className="social-links">
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="linkedin-icon"></span>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="instagram-icon"></span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 className="form-title">Bize Mesaj Gönderin</h2>
              <p className="form-subtitle">Sorularınız veya talepleriniz için formu doldurun, en kısa sürede size dönüş yapacağız.</p>
              
              {submitSuccess && (
                <div className="form-success">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
              )}
              
              {submitError && (
                <div className="form-error">
                  Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-posta Adresiniz *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Lütfen bir konu seçin</option>
                    <option value="Proje Talebi">Proje Talebi</option>
                    <option value="Ürün Bilgisi">Ürün Bilgisi</option>
                    <option value="Teknik Destek">Teknik Destek</option>
                    <option value="İş Birliği">İş Birliği</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesajınız *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          {/* Placeholder for Google Maps integration */}
          <div className="map-placeholder">
            <span>Google Harita Burada Görüntülenecek</span>
            <a href="https://maps.app.goo.gl/6UxFx57HvX12yq277" target="_blank" rel="noopener noreferrer" className="btn btn-outline map-link">
              Google Haritada Görüntüle
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
