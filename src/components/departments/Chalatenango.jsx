import React from "react";
import img from "../../../public/chalatenango.jpg";
import { UilUserArrows } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilDollarAlt } from "@iconscout/react-unicons";
import "../../styles/image.css";

export default function Chalatenango() {
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
            <h3>Chalatenango</h3>
            <h4 className="text-danger">"Valle de aguas y arena"</h4>
            <div>
            El nombre Chalatenango es de origen náhuat, y proviene de chal,
                shal (arena); at, (agua): río; y tenango (valle).
                Etimológicamente, valle de aguas y arena. Chalatenango se
                asienta en el borde sur de la Sierra Madre a su paso por
                Centroamérica.
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
                  <p>"Chalateco(a)"</p>
                </div>
              </div>
              <div className="bg-secondary rounded">
                <div className="p-3 text-center">
                  <UilUsersAlt size="50" color="#f0f5fa" />
                  <h5>Población</h5>
                  <p>Total 275, 100 hab.</p>
                </div>
              </div>
              <div className="bg-secondary rounded">
                <div className="p-3 text-center">
                  <UilDollarAlt size="50" color="#f0f5fa" />
                  <h5>PIB</h5>
                  <p>Total (2013) 161,645 US$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div></div>
  </div>);
}
