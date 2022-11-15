import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return(
    <div className="pt-5">
      <div className="mt-5">
        <h2 className="text-center"><b>¡Mantengámonos en contacto!</b></h2>
      <div className=" d-flex text-center justify-content-around px-3 mt-5">
        <div>
        <h3 className="text-primary text-center mb-5">Teléfono</h3>
        <FontAwesomeIcon icon={faPhone} size="5x"/>
        <h6 className="mt-4">+503 1234 5678</h6>
        </div>
        <div className="content-justify-center text-center">
        <h3 className="text-primary text-center mb-5">Dirección</h3>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="5x"/>
        <h6 className="mt-4">Antiguo Cuscatlán frente</h6>
        <h6 className="mt-2">a Universidad Don Bosco</h6>
        </div>
        <div>
        <h3 className="text-primary text-center mb-5">Correo</h3>
        <FontAwesomeIcon icon={faEnvelope} size="5x"/>
        <h6 className="mt-4">descubresv@gmail.com</h6>
        </div>
        <div>
        <h3 className="text-primary text-center mb-5">Redes</h3>
        <FontAwesomeIcon icon={faFacebook} size="3x"/>
        <h6 className="mt-4 mb-4">Descubre El Salvador</h6>
        <FontAwesomeIcon icon={faTwitter} size="3x px-2"/>
        <FontAwesomeIcon icon={faInstagram} size="3x"/>
        <h6 className="mt-4 mb-4">@descubresv</h6>
        </div>
          </div>
      </div>
    </div>

  );
}
