import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Setup intersection observers
  const [overviewRef, overviewInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="about-page">
      {/* Page Header */}
      <motion.section 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hakkımızda
          </motion.h1>
          <motion.div 
            className="breadcrumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/">Ana Sayfa</Link> / <span>Hakkımızda</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section 
        className="section company-overview"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.div className="about-grid">
            <motion.div 
              className="about-content"
              variants={slideUp}
            >
              <h2 className="section-title">METOT MEKATRONİK</h2>
              <div className="about-tagline">More than Automation</div>
              <p className="about-description">
                METOT MEKATRONİK MÜHENDİSLİK YAZILIM SANAYİ VE TİCARET LİMİTED ŞİRKETİ olarak, 
                endüstriyel otomasyon ve mekatronik çözümler alanında öncü bir firma olarak hizmet vermekteyiz.
              </p>
              <p className="about-description">
                Firmamız, üretim hatlarının otomasyonu, makine kontrolü, proses otomasyonu ve yazılım 
                geliştirme alanlarında uzmanlaşmış mühendislik ekibimizle müşterilerimize yenilikçi ve 
                verimli çözümler sunmaktadır.
              </p>
              <p className="about-description">
                Teknolojik gelişmeleri yakından takip ederek, endüstriyel tesislerin ihtiyaçlarına 
                özel, rekabetçi ve sürdürülebilir çözümler geliştiriyoruz.
              </p>

              <motion.div 
                className="about-stats"
                variants={staggerContainer}
              >
                <motion.div 
                  className="stat-item"
                  variants={cardAnimation}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Yıllık Deneyim</span>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  variants={cardAnimation}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Tamamlanan Proje</span>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  variants={cardAnimation}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Mutlu Müşteri</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="about-img-placeholder">
                {/* This is a placeholder for company image */}
                <div className="img-placeholder-text">Firma Görseli</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section 
        className="section mission-vision"
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.div 
            className="mission-vision-grid"
            variants={staggerContainer}
          >
            <motion.div 
              className="mission-box"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="box-title">Misyonumuz</h3>
              <p className="box-content">
                Endüstriyel otomasyon alanında yenilikçi ve sürdürülebilir çözümler sunarak, 
                müşterilerimizin üretim süreçlerini optimize etmek ve verimliliğini artırmak.
                Müşteri memnuniyetini ön planda tutarak, güvenilir ve uzun soluklu iş birlikleri kurmak.
              </p>
            </motion.div>
            <motion.div 
              className="vision-box"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="box-title">Vizyonumuz</h3>
              <p className="box-content">
                Endüstriyel otomasyon ve mekatronik çözümler alanında ulusal ve uluslararası 
                pazarda öncü bir firma olmak. Teknolojik gelişmeleri yakından takip ederek, 
                sektörde trend belirleyici olmak ve müşterilerimizin üretim süreçlerini geleceğe taşımak.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="section core-values"
        ref={valuesRef}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={slideUp}
          >
            Değerlerimiz
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={slideUp}
          >
            Tüm faaliyetlerimize yön veren temel değerlerimiz
          </motion.p>
          
          <motion.div 
            className="values-grid"
            variants={staggerContainer}
          >
            <motion.div 
              className="value-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="value-icon quality-icon"></div>
              <h3 className="value-title">Kalite</h3>
              <p className="value-description">
                Her projemizde en yüksek kalite standartlarını sağlamayı ve sürekli iyileştirmeyi taahhüt ediyoruz.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="value-icon innovation-icon"></div>
              <h3 className="value-title">Yenilikçilik</h3>
              <p className="value-description">
                Teknolojik gelişmeleri takip ediyor, çözümlerimizi sürekli geliştiriyor ve inovatif yaklaşımlar sunuyoruz.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="value-icon integrity-icon"></div>
              <h3 className="value-title">Dürüstlük</h3>
              <p className="value-description">
                Tüm iş ilişkilerimizde şeffaflık, güven ve dürüstlük ilkelerini ön planda tutuyoruz.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="value-icon customer-icon"></div>
              <h3 className="value-title">Müşteri Odaklılık</h3>
              <p className="value-description">
                Müşterilerimizin ihtiyaçlarını anlamak ve beklentilerini aşan çözümler sunmak en büyük önceliğimizdir.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="section team-section"
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={slideUp}
          >
            Ekibimiz
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={slideUp}
          >
            Uzman ve deneyimli profesyoneller
          </motion.p>
          
          <motion.div 
            className="team-grid"
            variants={staggerContainer}
          >
            {/* This is a placeholder for team members - can be filled with actual team data later */}
            <motion.div 
              className="team-member"
              variants={cardAnimation}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="member-image placeholder"></div>
              <h3 className="member-name">Ad Soyad</h3>
              <p className="member-position">Pozisyon</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              variants={cardAnimation}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="member-image placeholder"></div>
              <h3 className="member-name">Ad Soyad</h3>
              <p className="member-position">Pozisyon</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              variants={cardAnimation}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="member-image placeholder"></div>
              <h3 className="member-name">Ad Soyad</h3>
              <p className="member-position">Pozisyon</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              variants={cardAnimation}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="member-image placeholder"></div>
              <h3 className="member-name">Ad Soyad</h3>
              <p className="member-position">Pozisyon</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="cta-title">Projelerinizi Bizimle Gerçekleştirin</h2>
            <p className="cta-description">
              Mekatronik ve otomasyon çözümleri için uzman ekibimizle iletişime geçin.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-primary">İletişime Geçin</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
