import React, { useState } from 'react';
import './certificates.css'; // Optional CSS for styling

const Certificates = () => {
  const [openCertificate, setOpenCertificate] = useState(null);

  const toggleCertificate = (certificateName) => {
    setOpenCertificate(openCertificate === certificateName ? null : certificateName);
  };

  return (
    <div className="certificate-container">
      <h2>My Certificates</h2>
      <div className="certificate-grid">
        {/* ALX Ventures Certificate */}
        <div className="certificate-item">
          <h3 onClick={() => toggleCertificate('alxCertificate')} className="certificate-heading">
            ALX Ventures Certificate
          </h3>
          {openCertificate === 'alxCertificate' && (
            <div className="certificate-details">
              <img
                src="https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzd3RWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f8f14362bd3c9aafcc0c8aa0d57c65b9efed8b52/50-founder-academy-certificate-joel-david.png"
                alt="ALX Ventures Certificate"
                className="certificate-image"
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
                src="https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2NWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a06df7bec51751bd62f44d057116bbccd5bba605/17-short-specializations-certificate-joel-david.png"
                alt="Backend Certificate"
                className="certificate-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
