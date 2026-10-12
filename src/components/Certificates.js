import React, { useState } from 'react';
import './certificates.css'; // Optional CSS for styling

const Certificates = () => {
  const [openCertificate, setOpenCertificate] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const toggleCertificate = (certificateName) => {
    setOpenCertificate(openCertificate === certificateName ? null : certificateName);
  };

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <section id="certificates" className="certificates-container">
      <div className="container">
        <div className="section-header">
          <h1>My Certificates</h1>
          <p>Professional certifications and achievements</p>
        </div>
        
        <div className="certificate-grid">
        {/* ALX Ventures Certificate */}
        <div className="certificate-item">
          <h3 onClick={() => toggleCertificate('alxCertificate')} className="certificate-heading">
            ALX Ventures Certificate
          </h3>
          {openCertificate === 'alxCertificate' && (
            <div className="certificate-details">
              <img
                src="/certificates/ventures_cert.png"
                alt="ALX Ventures Certificate"
                className="certificate-image zoomable"
                loading="lazy"
                onClick={() => handleImageClick("/certificates/ventures_cert.png")}
                onError={(e) => {
                  console.error('ALX certificate failed to load locally, trying external URL');
                  const externalUrl = "https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzd3RWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f8f14362bd3c9aafcc0c8aa0d57c65b9efed8b52/50-founder-academy-certificate-joel-david.png";
                  e.target.src = externalUrl;
                  e.target.onclick = () => handleImageClick(externalUrl);
                }}
              />
            </div>
          )}
        </div>

        {/* Backend Certificate */}
        <div className="certificate-item">
          <h3 onClick={() => toggleCertificate('backendCertificate')} className="certificate-heading">
            Backend Certificate
          </h3>
          {openCertificate === 'backendCertificate' && (
            <div className="certificate-details">
              <img
                src="/certificates/backend_cer.png"
                alt="Backend Certificate"
                className="certificate-image zoomable"
                loading="lazy"
                onClick={() => handleImageClick("/certificates/backend_cer.png")}
                onError={(e) => {
                  console.error('Backend certificate failed to load:', e.target.src);
                }}
              />
            </div>
          )}
        </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-container">
            <img
              src={zoomedImage}
              alt="Zoomed Certificate"
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-zoom" onClick={closeZoom}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
