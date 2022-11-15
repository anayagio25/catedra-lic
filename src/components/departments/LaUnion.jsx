import React from "react";
import img from "../../../public/la-union.jpg";
import "../../styles/image.css";
import { UilUserArrows } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilDollarAlt } from "@iconscout/react-unicons";

export default function LaUnion() {
    return (
      <div className="container container-fluid mt-3">
        <section className="rounded d-flex align-items-center justify-content-center flex-wrap h-100 w-100">
          <div className="bg-light rounded w-75 d-flex flex-column justify-content-center ">
            <div className="p-5 d-flex flex-wrap justify-content-around align-items-center">
              <img
                src={img}
                alt="Volcan"
                className="img-fluid rounded"
                width="400px"
              />
              <div className="text-center mt-3 lh-lg responsive-width">
                <h3>La Unión</h3>
                <h4 className="text-danger">"Antioquia"</h4>
                <div>
                La Unión es un departamento de la parte oriental de la
                 República de El Salvador, sobre la costa del golfo de Fonseca,
                su cabecera departamental es la ciudad y puerto de La Unión.El área del Departamento es de 2 074,34 km²
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
                      <p>"Unionenses, anamoroquenses"</p>
                    </div>
                  </div>
                  <div className="bg-secondary rounded">
                    <div className="p-3 text-center">
                      <UilUsersAlt size="50" color="#f0f5fa" />
                      <h5>Población</h5>
                      <p>Total 34,032 hab.</p>
                    </div>
                  </div>
                  <div className="bg-secondary rounded">
                    <div className="p-3 text-center">
                      <UilDollarAlt size="50" color="#f0f5fa" />
                      <h5>Presupuesto Anual</h5>
                      <p>USD 434,057$</p>
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
  