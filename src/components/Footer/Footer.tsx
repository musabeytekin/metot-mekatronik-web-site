import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">METOT MEKATRONİK</h3>
            <p>
              More than Automation. Otomasyon sistemleri, mühendislik ve yazılım çözümleri sunan profesyonel bir firmayız.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="social-icon linkedin">LinkedIn</i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="social-icon instagram">Instagram</i>
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">Hızlı Erişim</h3>
            <ul className="footer-links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/about">Hakkımızda</Link></li>
              <li><Link to="/services">Hizmetler</Link></li>
              <li><Link to="/projects">Projeler</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3 className="footer-title">İletişim Bilgileri</h3>
            <ul className="contact-info">
              <li>
                <i className="icon location"></i>
                <span>FEVZİÇAKMAK MAH. ŞEHİT MUSTAFA TÜNEL CAD. C2 BLOK NO: 9 AJ KARATAY/ KONYA</span>
              </li>
              <li>
                <i className="icon email"></i>
                <span>muhasebe@metotmekatronik.com</span>
              </li>
              <li>
                <i className="icon phone"></i>
                <span>+90 000 000 00 00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} METOT MEKATRONİK MÜHENDİSLİK YAZILIM SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
