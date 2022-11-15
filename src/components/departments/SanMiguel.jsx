import React from "react";
import img from "../../../public/sanmiguel.jpg";
import "../../styles/image.css";
import { UilUserArrows } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilDollarAlt } from "@iconscout/react-unicons";

export default function SanMiguel() {
  return (
    <div className="container container-fluid mt-3">
      <section className="rounded d-flex align-items-center justify-content-center flex-wrap h-100 w-100">
        <div className="bg-light rounded w-75 d-flex flex-column justify-content-center ">
          <div className="p-5 d-flex flex-wrap justify-content-around align-items-center">
            <img
              src={img}
              alt="Teatro"
              className="img-fluid rounded"
              width="400px"
            />
            <div className="text-center mt-3 lh-lg responsive-width">
              <h3>Usulután</h3>
              <h4 className="text-danger">"San Miguel de La Frontera"</h4>
              <div>
                San Miguel es un departamento de El Salvador. Fue declarado
                departamento el 12 de junio de 1824. Originalmente, el
                departamento de San Miguel, abarcaba todo el territorio que hoy
                forma la Zona Oriental de El Salvador, teniendo como frontera
                oeste al río Lempa; al norte y este limitaba con Honduras; al
                sureste con el Golfo de Fonseca; y por el sur limitaba con el
                océano Pacífico. Pero a finales del siglo XIX San Salvador
                dividió el territorio en los actuales cuatro departamentos con
                el objetivo de limitar la influencia de la ciudad de San Miguel
                en los intereses nacionales. Ciertamente, los decretos de
                creación de los departamentos orientales dejan explicitado ese
                hecho.
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="line bg-secondary rounded-1"></div>
          </div>
          <div className="px-5 py-3">
            <h3>General</h3>
            <div className="">
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap my-2 center-card">
                <div className="bg-secondary rounded">
                  <div className="p-3 text-center">
                    <UilUserArrows size="50" color="#f0f5fa" />
                    <h5>Gentilicio</h5>
                    <p>"Migueleño (a)"</p>
                  </div>
                </div>
                <div className="bg-secondary rounded">
                  <div className="p-3 text-center">
                    <UilUsersAlt size="50" color="#f0f5fa" />
                    <h5>Población</h5>
                    <p>Total 520,022 hab.</p>
                  </div>
                </div>
                <div className="bg-secondary rounded">
                  <div className="p-3 text-center">
                    <UilDollarAlt size="50" color="#f0f5fa" />
                    <h5>PIB</h5>
                    <p>Per cápita USD 6,442.74</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
}
