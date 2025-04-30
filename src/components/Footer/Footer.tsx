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
              More than Automation. 8+ yıllık sektör deneyimine sahip uzman kadromuzla otomasyon sistemleri, mühendislik ve yazılım çözümleri sunan profesyonel bir mühendislik firmasıyız.
            </p>
            <div className="social-links">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/metot-mekatronik/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon" fill="currentColor">
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/metotmekatronik/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon" fill="currentColor">
                   {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                   <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                 </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">Hızlı Erişim</h3>
            <ul className="footer-links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/about">Hakkımızda</Link></li>
              <li><Link to="/services">Hizmetler</Link></li>
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
                <span>+90 505 125 48 08</span>
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
