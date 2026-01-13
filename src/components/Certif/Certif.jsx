import React, { useState } from 'react';
import "./certif.css";
import ScrumCertif from "../../assets/scrum.png";
import otherCert from "../../assets/NextS.png";
import thirdCert from "../../assets/udemy.png"; // <-- your third certificate image

const Certif = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="work section" id="Certifications">
      <h2 className='section__title'>Certifications</h2>
      <span className="section__subtitle">
        Some of my professional certificates and achievements.
      </span>

      <div className="work__container container grid">

        <div className="work__card">
          <img src={ScrumCertif} alt="Scrum Certificate" className='work__img' />
          <h3 className="work__title">Scrum Master Certification</h3>
          <p className="work__description">
            Official Scrum Master certificate demonstrating my knowledge of Agile methodologies.
          </p>
          <button 
            onClick={() => setSelectedCert(ScrumCertif)} 
            className="work__button"
          >
            Show Certificate <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </button>
        </div>

        <div className="work__card">
          <img src={otherCert} alt="Other Certificate" className='work__img' />
          <h3 className="work__title">Another Certification</h3>
          <p className="work__description">
            Description of this certification and what skills it represents.
          </p>
          <button 
            onClick={() => setSelectedCert(otherCert)} 
            className="work__button"
          >
            Show Certificate <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </button>
        </div>

        <div className="work__card">
          <img src={thirdCert} alt="Third Certificate" className='work__img' />
          <h3 className="work__title">Third Certification</h3>
          <p className="work__description">
            Description of your third certification and what skills it represents.
          </p>
          <button 
            onClick={() => setSelectedCert(thirdCert)} 
            className="work__button"
          >
            Show Certificate <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </button>
        </div>

      </div>

      {/* Lightbox */}
      {selectedCert && (
        <div 
          className="lightbox" 
          onClick={() => setSelectedCert(null)}
        >
          <img src={selectedCert} alt="Certificate" className="lightbox__img" />
        </div>
      )}
    </section>
  )
}

export default Certif;
