import React from "react";
import { useTranslation } from "react-i18next";


function About() {
  const { i18n, t } = useTranslation("global");
   
  return (
    <div>
      <section id="about">
        
        <div>
          <h1>{t("about.about_name")}</h1>
        </div>

        <div>
          <h1>
          {t("about.about_description")}
          </h1>
<div>
    <div>
    <h1>{t("about.about_name1")}</h1>
    <p>
    {t("about.about_desciption1")}
    </p>
    </div>

    <div>
    <h1>{t("about.about_name2")}</h1>
    <p>
    {t("about.about_desciption2")}
    </p>
    </div>
</div>

          
// boton de descarga de CV 


          <div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
