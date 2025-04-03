import React from "react";
import TarifCard from "../components/tarif-card/TarifCard";

const page = () => {
  return (
    <div className="p-8">
      <h1 className="relative text-left text-2xl font-extrabold top-18">
        Tarifs
      </h1>

      <div className="relative p-8 flex justify-center">
        <div className="relative  mb-8 flex mt-8 flex-col gap-8 items-center lg:flex-row lg:justify-center lg:h-[90vh]">
          <div className="w-64 h-98  rounded-xl border-primary border-1 p-4 flex flex-col gap-2">
            <div className="uppercase text-xs text-white bg-primary w-12 text-center rounded-2xl p-1 ">
              basic
            </div>
            <h1 className="text-left text-3xl font-extrabold mt-4">$15/mo</h1>
            <h4 className="text-primary mt-4">Pour les indépendants.</h4>
            <ul className="text-primary text-xs flex flex-col gap-2">
              <li>Accès aux outils essentiels</li>
              <li>Messagerie instantanée</li>
              <li>Stockage illimité</li>
              <li>Support standard</li>
              <li>Accès mobile</li>
            </ul>
            <button className="border-primary border-1 text-primary p-2 rounded-sm mt-8 hover:border-2 hover:border-white hover:bg-primary hover:text-white active:bg-btn-actif">
              Démarrer
            </button>
          </div>

          <div className="w-64 h-98 rounded-xl bg-primary  p-4 flex flex-col gap-2 ">
            <div className="uppercase text-xs text-primary bg-white w-12 text-center rounded-2xl p-1 ">
              pro
            </div>
            <h1 className="text-left text-3xl font-extrabold mt-4 text-white">
              $25/mo
            </h1>
            <h4 className="text-white mt-4">Pour les équipes en croissance.</h4>
            <ul className="text-white text-xs flex flex-col gap-2">
              <li>réunion video HD</li>
              <li>Partage de fichiers illimité</li>
              <li>Intégrations avancées</li>
              <li>Sécurité renforcée</li>
            </ul>
            <button className="bg-white border-1 text-primary p-2 rounded-sm mt-8  hover:border-white hover:bg-primary hover:text-white active:bg-btn-actif">
              Démarrer
            </button>
          </div>
          <div className="w-64 h-98 rounded-xl border-primary border-1 p-4 flex flex-col gap-2">
            <div className="uppercase text-xs text-white bg-primary w-12 text-center rounded-2xl p-1 ">
              elite
            </div>
            <h1 className="text-left text-3xl font-extrabold mt-4">$30/mo</h1>
            <h4 className="text-primary mt-4">Expérience ultime.</h4>
            <ul className="text-primary text-xs flex flex-col gap-2">
              <li>Espaces personnalisables</li>
              <li>Intelligence artificielle</li>
              <li>Collaboration avancée</li>
              <li>Accès VIP</li>
              <li>Support 24/7</li>
            </ul>
            <button className="border-primary border-1 text-primary p-2 rounded-sm mt-8  hover:border-white hover:bg-primary hover:text-white active:bg-btn-actif">
              Démarrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
