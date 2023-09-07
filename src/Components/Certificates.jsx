import React from "react";



function CertificatesList ({certificates}){
    const handleCertificateClick = (imgUrl) => {
        window.open(imgUrl, "_blank");
      };
return(
    <section>

        <h1>Mis certificados</h1>
       <div className="certificate-list">
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-card">
          <h3>{certificate.title}</h3>
          <button
            onClick={() => handleCertificateClick(certificate.img)}
            className="view-certificate-button"
          >
            Ver Certificado
          </button>
        </div>
      ))}
    </div>
    </section>
)
    

}

export default CertificatesList