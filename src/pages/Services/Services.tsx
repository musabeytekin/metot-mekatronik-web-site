import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePageTitle } from '../../hooks';
import './Services.css';

const Services: React.FC = () => {
  // Set the page title
  usePageTitle('Hizmetlerimiz');

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
  const [servicesRef, servicesInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  const [industriesRef, industriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [approachRef, approachInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="services-page">
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
            Hizmetlerimiz
          </motion.h1>
          <motion.div 
            className="breadcrumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/">Ana Sayfa</Link> / <span>Hizmetler</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services Section */}
      <motion.section 
        className="section main-services"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.div 
            className="services-introduction"
            variants={slideUp}
          >
            <h2 className="section-title">Profesyonel Mekatronik Çözümler</h2>
            <p className="section-subtitle">
              Endüstriyel otomasyon, makine ve yazılım alanlarında sunduğumuz hizmetlerle işletmenizi geleceğe taşıyoruz
            </p>
          </motion.div>

          <motion.div 
            className="services-list"
            variants={staggerContainer}
          >
            {/* Service 1 */}
            <motion.div 
              className="service-item" 
              id="turnkey-projects"
              variants={cardAnimation}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="service-icon project-icon"></div>
              <div className="service-content">
                <h3 className="service-title">Anahtar Teslim Projeler</h3>
                <p className="service-description">
                  Pano-tesisat ve yazılım hizmetleri ile projelerinize tam destek veriyoruz. Üretim süreçlerinizi optimize etmek için 
                  ihtiyaçlarınıza özel tasarlanmış, entegre otomasyon sistemleri sunuyoruz.
                </p>
                <ul className="service-features">
                  <li>Elektrik panosu tasarımı ve imalatı</li>
                  <li>Makine ve hat otomasyonu</li>
                  <li>PLC programlama ve entegrasyonu</li>
                  <li>HMI/SCADA sistem tasarımı</li>
                  <li>Proje mühendisliği ve danışmanlık</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="service-item" 
              id="automation-products"
              variants={cardAnimation}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="service-icon supply-icon"></div>
              <div className="service-content">
                <h3 className="service-title">Otomasyon Ürünleri Tedariği</h3>
                <p className="service-description">
                  Rekabetçi, hızlı ve yenilikçi çözümler ile otomasyon ürünlerinin tedariğinde destek sağlıyoruz. Güvenilir ve kaliteli ürünleri 
                  rekabetçi fiyatlarla temin ediyoruz.
                </p>
                <ul className="service-features">
                  <li>PLC, HMI ve kontrol sistemleri</li>
                  <li>Servo ve hareket kontrolü ekipmanları</li>
                  <li>Sensörler ve algılayıcılar</li>
                  <li>Endüstriyel haberleşme ekipmanları</li>
                  <li>Elektrik ve otomasyon malzemeleri</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="service-item" 
              id="software-rnd"
              variants={cardAnimation}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="service-icon software-icon"></div>
              <div className="service-content">
                <h3 className="service-title">Yazılım ve Ar-Ge</h3>
                <p className="service-description">
                  Makine yazılımı, görüntü işleme projeleri ve Ar-Ge süreçlerinize sizden biri gibi dahil oluyoruz. Endüstriyel süreçleri 
                  dijitalleştirerek verimliliği artırıyoruz.
                </p>
                <ul className="service-features">
                  <li>Endüstriyel otomasyon yazılımları</li>
                  <li>Özel makine kontrolü yazılımları</li>
                  <li>Görüntü işleme ve kalite kontrol sistemleri</li>
                  <li>Endüstri 4.0 ve IoT uygulamaları</li>
                  <li>Veri toplama ve analiz sistemleri</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              className="service-item" 
              id="maintenance-support"
              variants={cardAnimation}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="service-icon support-icon"></div>
              <div className="service-content">
                <h3 className="service-title">Bakım ve Teknik Destek</h3>
                <p className="service-description">
                  Kurduğumuz sistemlerin sürekliliğini sağlamak için düzenli bakım ve teknik destek hizmetleri sunuyoruz. 
                  Arıza durumlarında hızlı müdahale ve çözüm garantisi veriyoruz.
                </p>
                <ul className="service-features">
                  <li>Önleyici ve düzeltici bakım hizmetleri</li>
                  <li>Uzaktan teknik destek</li>
                  <li>Acil müdahale desteği</li>
                  <li>Sistem iyileştirme ve optimizasyon</li>
                  <li>Operatör ve bakım personeli eğitimleri</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      {/* <motion.section 
        className="section industries-section"
        ref={industriesRef}
        initial="hidden"
        animate={industriesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={slideUp}
          >
            Hizmet Verdiğimiz Sektörler
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={slideUp}
          >
            Farklı sektörlerin ihtiyaçlarına özel çözümler
          </motion.p>
          
          <motion.div 
            className="industries-grid"
            variants={staggerContainer}
          >
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon manufacturing-icon"></div>
              <h3 className="industry-title">Üretim</h3>
              <p className="industry-description">
                Üretim hatları otomasyonu, makine kontrolü ve süreç optimizasyonu çözümleri
              </p>
            </motion.div>
            
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon food-beverage-icon"></div>
              <h3 className="industry-title">Gıda ve İçecek</h3>
              <p className="industry-description">
                Hijyenik üretim, paketleme ve kalite kontrol sistemleri
              </p>
            </motion.div>
            
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon automotive-icon"></div>
              <h3 className="industry-title">Otomotiv</h3>
              <p className="industry-description">
                Montaj hatları, test sistemleri ve kalite kontrol çözümleri
              </p>
            </motion.div>
            
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon textile-icon"></div>
              <h3 className="industry-title">Tekstil</h3>
              <p className="industry-description">
                Dokuma, boyama ve konfeksiyon süreçleri için otomasyon sistemleri
              </p>
            </motion.div>
            
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon pharma-icon"></div>
              <h3 className="industry-title">İlaç ve Kimya</h3>
              <p className="industry-description">
                Hassas üretim ve sıkı regülasyonlar için özel çözümler
              </p>
            </motion.div>
            
            <motion.div 
              className="industry-item"
              variants={cardAnimation}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="industry-icon energy-icon"></div>
              <h3 className="industry-title">Enerji</h3>
              <p className="industry-description">
                Enerji üretim ve dağıtım sistemleri için kontrol ve izleme çözümleri
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Our Approach Section */}
      <motion.section 
        className="section approach-section"
        ref={approachRef}
        initial="hidden"
        animate={approachInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={slideUp}
          >
            Çalışma Yaklaşımımız
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={slideUp}
          >
            Her projede kaliteli sonuç için izlediğimiz adımlar
          </motion.p>
          
          <motion.div 
            className="approach-steps"
            variants={staggerContainer}
          >
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">İhtiyaç Analizi</h3>
                <p className="step-description">
                  Müşterilerimizin ihtiyaçlarını detaylı olarak analiz eder, mevcut sistemleri inceler ve 
                  beklentilerini tam olarak anlarız.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Çözüm Tasarımı</h3>
                <p className="step-description">
                  İhtiyaçlara uygun, verimli ve ölçeklenebilir çözümler tasarlar, uygun teknolojileri belirleriz.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Uygulama</h3>
                <p className="step-description">
                  Tasarlanan çözümü planlanan süre ve bütçe dahilinde hayata geçirir, kalite kontrollerini yaparız.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Entegrasyon ve Test</h3>
                <p className="step-description">
                  Sistemi mevcut süreçlere entegre eder, kapsamlı testlerle güvenilirliğini sağlarız.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Eğitim ve Devreye Alma</h3>
                <p className="step-description">
                  Kullanıcı eğitimlerini verir, sistemin sorunsuz çalışması için devreye alma sürecini yönetiriz.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="step-item"
              variants={cardAnimation}
            >
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">Destek ve Bakım</h3>
                <p className="step-description">
                  Sistemin sürekli ve verimli çalışması için düzenli bakım ve teknik destek hizmetleri sunarız.
                </p>
              </div>
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
            <h2 className="cta-title">Projeniz için Destek mi Lazım?</h2>
            <p className="cta-description">
              Mekatronik çözümler konusunda uzman ekibimiz, ihtiyaçlarınıza özel çözümler için yanınızda
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-primary">Bize Ulaşın</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
