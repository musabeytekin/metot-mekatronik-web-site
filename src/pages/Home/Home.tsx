import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePageTitle } from '../../hooks';
import './Home.css';

const Home = () => {
  // Set the page title
  usePageTitle('Ana Sayfa');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Use intersection observer for scroll animations
  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refServices, inViewServices] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section with Split Design and Enhanced Visuals */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient background overlay */}
        <div className="hero-overlay"></div>
        
        {/* Animated background shapes */}
        <motion.div 
          className="hero-shape hero-shape-1"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <motion.div 
          className="hero-shape hero-shape-2"
          animate={{
            x: [0, 10, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="hero-container">
          <div className="hero-split-layout">
            {/* Left content column */}
            <motion.div 
              className="hero-content-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="hero-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Endüstriyel Çözüm Ortağınız
              </motion.span>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                METOT MEKATRONİK
              </motion.h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Yenilikçi Mühendislik Çözümleri
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Endüstriyel otomasyon, mekatronik çözümler ve yazılım hizmetleri ile projelerinize değer katıyoruz. Anahtar teslim çözümler ve uzman kadromuzla yanınızdayız.
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Link to="/services" className="btn btn-primary">
                  Hizmetlerimiz
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  İletişime Geçin
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right content column with image */}
            <motion.div 
              className="hero-content-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="hero-image-container">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Industrial Automation" 
                  className="hero-image"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                
                {/* Stats overlay on the image */}
                <motion.div 
                  className="hero-stats-overlay"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">8+</span>
                    <span className="hero-stat-label">Yıllık Sektör Deneyimi</span>
                  </div>
                  
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">10+</span>
                    <span className="hero-stat-label">Başarılı Proje</span>
                  </div>
                  
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">100%</span>
                    <span className="hero-stat-label">Müşteri Memnuniyeti</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Client logos section */}
        
        
        {/* Animated shape element */}
        <motion.div 
          className="hero-shape hero-shape-1"
          animate={{ 
            rotate: 360,
            y: [0, 15, 0],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
          }}
        ></motion.div>
        
        <motion.div 
          className="hero-shape hero-shape-2"
          animate={{ 
            rotate: -360,
            x: [0, 15, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
          }}
        ></motion.div>
      </motion.section>

      {/* Services Overview Section */}
      <motion.section 
        className="section services-overview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hizmetlerimiz</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Size özel mekatronik ve otomasyon çözümleri sunuyoruz
            </p>
          </div>
          <div className="services-grid">
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                  <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
                </svg>
              </div>
              <h3 className="service-title">Anahtar Teslim Projeler</h3>
              <p className="service-description">
                Pano-tesisat ve yazılım hizmetleri ile projelerinize tam destek veriyoruz.
              </p>
              <Link to="/services" className="service-link">
                Detaylı Bilgi <span className="arrow-icon">→</span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.5-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.5l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
                </svg>
              </div>
              <h3 className="service-title">Otomasyon Ürünleri Tedariği</h3>
              <p className="service-description">
                Rekabetçi, hızlı ve yenilikçi çözümler ile otomasyon ürünlerinin tedariğinde destek sağlıyoruz.
              </p>
              <Link to="/services" className="service-link">
                Detaylı Bilgi <span className="arrow-icon">→</span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                </svg>
              </div>
              <h3 className="service-title">Yazılım ve Ar-Ge</h3>
              <p className="service-description">
                Makine yazılımı, görüntü işleme projeleri ve Ar-Ge süreçlerinize sizden biri gibi dahil oluyoruz.
              </p>
              <Link to="/services" className="service-link">
                Detaylı Bilgi <span className="arrow-icon">→</span>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="primary-button services-all-button">
              Tüm Hizmetlerimiz
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        ref={refFeatures}
        className="section why-us"
        initial={{ opacity: 0, y: 50 }}
        animate={inViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Neden Biz?</h2>
            <p className="section-subtitle">METOT MEKATRONİK ile çalışmanın avantajları</p>
            <div className="section-divider"></div>
          </div>
          <div className="why-us-container">
            <div className="why-us-content">
              <div className="features-grid">
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Uzmanlık</h3>
                  <p className="feature-description">
                    Yılların deneyimi ve uzman kadromuzla endüstriyel otomasyon alanında en iyi çözümleri sunuyoruz.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.5-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.5l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Yenilikçi Yaklaşım</h3>
                  <p className="feature-description">
                    Teknolojik gelişmeleri takip ediyor, en son yenilikleri projelerinize entegre ediyoruz.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3 28.7-64 64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Özel Çözümler</h3>
                  <p className="feature-description">
                    Her projeye özel tasarlanmış çözümler sunarak işletmenizin ihtiyaçlarını tam olarak karşılıyoruz.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="feature-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Sürekli Destek</h3>
                <p className="feature-description">
                  Proje sonrası teknik destek ve bakım hizmetlerimizle her zaman yanınızdayız.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="why-us-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Industrial Automation" />
            
            <motion.div 
              className="experience-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="years">8+</span>
              <span className="text">Yıllık Sektör Deneyimi</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="container">
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Projelerinizi Hayata Geçirelim
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mekatronik ve otomasyon alanındaki ihtiyaçlarınız için bizimle iletişime geçin.
              Uzman ekibimiz size özel çözümler sunmak için hazır.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/contact" className="btn btn-secondary">Hemen İletişime Geçin</Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
