import React from "react";
import { useTranslation } from "react-i18next";


function CertificatesList ({certificates}){
    const handleCertificateClick = (imgUrl) => {
        window.open(imgUrl, "_blank");
      };
       
  const { i18n, t } = useTranslation("global");
  
return(
    <section>

        <h1>{t("certificates.certificates")}</h1>
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