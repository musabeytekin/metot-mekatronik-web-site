import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// Project type definition
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  challenges: string;
  solutions: string;
  results: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  // Filter categories
  const categories = ['Hepsi', 'Otomasyon', 'Makine Yazılımı', 'Görüntü İşleme', 'Endüstri 4.0'];
  const [activeCategory, setActiveCategory] = useState('Hepsi');

  // Sample project data - this would be replaced with actual projects from the firm
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Otomatik Montaj Hattı',
      category: 'Otomasyon',
      description: 'Otomotiv yedek parça üreticisi için otomatik montaj hattı tasarımı ve otomasyon projesi.',
      challenges: 'Yüksek hassasiyet gerektiren parçaların montajı ve sürekli kalite kontrolü yapılması gerekiyordu.',
      solutions: 'PLC kontrollü otomasyon sistemi, servo motorlu hassas konumlandırma ve görüntü işleme destekli kalite kontrol entegrasyonu yapıldı.',
      results: 'Üretim kapasitesi %40 arttı, fire oranı %5\'ten %0.5\'e düştü. Personel verimliliği önemli ölçüde iyileşti.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    },
    {
      id: 2,
      title: 'Gıda Paketleme Sistemi',
      category: 'Otomasyon',
      description: 'Gıda üreticisi için tam otomatik paketleme ve etiketleme sistemi.',
      challenges: 'Farklı boyutlardaki ürünlerin hızlı ve hijyenik şekilde paketlenmesi, gerçek zamanlı üretim verilerinin takibi.',
      solutions: 'Özel tasarlanmış PLC kontrollü paketleme ünitesi, servo kontrollü dozajlama sistemi ve SCADA ile üretim takip sistemi.',
      results: 'Paketleme hızı saatte 2000 adede çıktı, ürün takip ve izlenebilirliği tam olarak sağlandı.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    },
    {
      id: 3,
      title: 'IoT Tabanlı Enerji İzleme Sistemi',
      category: 'Endüstri 4.0',
      description: 'Üretim tesisi için IoT tabanlı enerji tüketimi izleme ve optimizasyon sistemi.',
      challenges: 'Farklı makinelerin ve hatların enerji tüketiminin ayrı ayrı ölçülmesi ve analiz edilmesi gerekiyordu.',
      solutions: 'Akıllı sensörler ile IoT tabanlı veri toplama, bulut üzerinde veri analizi ve mobil uygulama üzerinden izleme.',
      results: 'Toplam enerji tüketiminde %15 tasarruf, uzaktan erişim ve analiz imkanı sağlandı.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    },
    {
      id: 4,
      title: 'Kalite Kontrol Sistemi',
      category: 'Görüntü İşleme',
      description: 'Metal parça üreticisi için görüntü işleme tabanlı otomatik kalite kontrol sistemi.',
      challenges: 'Üretim hızını düşürmeden yüksek hassasiyetle milimetrik hataların tespiti gerekiyordu.',
      solutions: 'Yüksek çözünürlüklü kameralar, özel aydınlatma sistemi ve gerçek zamanlı görüntü işleme algoritmaları kullanıldı.',
      results: 'Kusurlu parça tespiti %99.8 başarı oranına ulaştı, manuel kontrol ihtiyacı ortadan kalktı.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    },
    {
      id: 5,
      title: 'CNC Makine Yazılımı',
      category: 'Makine Yazılımı',
      description: 'Özel bir CNC tezgahı için kontrol yazılımı ve arayüz tasarımı.',
      challenges: 'Karmaşık parçaların işlenmesi için özel komut yapısı ve kullanıcı dostu bir arayüz gerekiyordu.',
      solutions: 'Özel geliştirilen kontrol yazılımı, dokunmatik ekran arayüzü ve uzaktan erişim imkanı.',
      results: 'Operatör eğitim süresi %60 azaldı, makine kurulum süreleri yarıya indi.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    },
    {
      id: 6,
      title: 'Akıllı Depo Yönetim Sistemi',
      category: 'Endüstri 4.0',
      description: 'Lojistik firması için RFID tabanlı akıllı depo yönetim ve otomasyon sistemi.',
      challenges: 'Büyük depoda ürün takibi, stok yönetimi ve sipariş toplama süreçlerinin optimizasyonu.',
      solutions: 'RFID okuyucular, mobil terminaller ve merkezi yönetim yazılımı ile entegre çözüm.',
      results: 'Sipariş hazırlama süresi %40 kısaldı, stok sayım süresi %90 azaldı, hata oranı minimuma indi.',
      imageUrl: '/src/assets/images/project-placeholder.jpg'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'Hepsi' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  // State for selected project (for modal)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
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
  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Page Header */}
      <motion.div 
        className="page-header" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Projelerimiz
          </motion.h1>
          <motion.p 
            className="page-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Müşterilerimiz için geliştirdiğimiz özel çözümler ve başarı hikayeleri
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <div className="projects-introduction">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Başarı Hikayelerimiz
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Farklı sektörlerde gerçekleştirdiğimiz projelerimizden bazı örnekler
            </motion.p>
          </div>

          {/* Project Categories */}
          <div className="project-categories">
            {categories.map((category, index) => (
              <motion.button 
                key={index} 
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            ref={refProjects}
            initial={{ opacity: 0 }}
            animate={inViewProjects ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-container">
                    <div className="project-image" style={{ backgroundColor: '#e0e0e0' }}>
                      {/* Placeholder for project image */}
                      <div className="image-placeholder">
                        <span className="placeholder-icon">🏗️</span>
                      </div>
                    </div>
                    <div className="project-category-tag">
                      {project.category}
                    </div>
                  </div>
                  <div className="project-content">
                    <motion.h3 
                      className="project-title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="project-excerpt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="project-link">
                      <span>Detayları Görüntüle</span>
                      <span className="arrow-icon">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              
              <div className="modal-header">
                <div className="modal-image" style={{ backgroundColor: '#e0e0e0' }}>
                  {/* Placeholder for project image */}
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🏗️</span>
                  </div>
                </div>
                <div className="modal-title-container">
                  <motion.h2 
                    className="modal-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <motion.h3 
                    className="modal-section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    Proje Tanımı
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {selectedProject.description}
                  </motion.p>
                </div>
                
                <div className="modal-section">
                  <motion.h3 
                    className="modal-section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    Zorluklar
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {selectedProject.challenges}
                  </motion.p>
                </div>
                
                <div className="modal-section">
                  <motion.h3 
                    className="modal-section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    Çözümlerimiz
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {selectedProject.solutions}
                  </motion.p>
                </div>
                
                <div className="modal-section">
                  <motion.h3 
                    className="modal-section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    Sonuçlar
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {selectedProject.results}
                  </motion.p>
                </div>
              </div>
              
              <div className="modal-footer">
                <Link to="/contact" className="btn-primary contact-btn">
                  Benzer Projeler İçin İletişime Geçin
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Benzer Projeler İçin Bize Ulaşın
            </motion.h2>
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              İşletmenizin ihtiyaçlarına uygun mekatronik ve otomasyon çözümleri için profesyonel ekibimizle çalışın.
            </motion.p>
            <Link to="/contact" className="btn btn-secondary">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
