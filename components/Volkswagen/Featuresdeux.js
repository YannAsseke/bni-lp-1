import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import RequestAVisit from "@/components/Volkswagen/RequestAVisit";
import AccordionItem from '@/components/Accordion/Accordion';




const Featuresdeux = () => {

  const [open, setOpen] = useState([]);

  
const toggle = (index) => {
  if(open === index){
    return setOpen(null)
  }

  setOpen(index)
}


const accordionData =[
      {
          question :"Qu'est-ce que le Prêt BONNE ANNEE CREDIT ?",
          answer : "Le Prêt BONNE ANNEE CREDIT BNI est consenti pour financer des besoins de consommation après les fêtes et autres évènements sociaux marquants de fin d'année précédente : célébrations familiales et communautaires, voyages d'agrément, équipement, étrennes ..."
      },
      {
          question :"Qui peut bénéficier du Prêt?",
          answer : "Tout client BNI salariés du privé ou du public, para public, corps habillés et retraités titulaires d'un compte chèque"
      },
      {
          question :"Quelles sont les caractéristiques du Prêt?",
          answer : `Taux : 6,5% HT
                  -Durée de remboursement : 36 mois maximum
                  -Taux d'endettement : selon les nouvelles quotités cessibles DECRET DE JUIN 2014
                  - Délais de mise en place : à partir de 72H`
      },
      {
          question :"Quel est le plafond de la demande du Prêt?",
          answer : "40 000 000 FCFA"
      },
      {
          question :"Quelles sont les conditions pour bénéficier du Prêt?",
          answer : `- Domicilier son salaire ou ses revenus à la BNI 
                    - Souscrire à un package prioritaire: Primo, Evolution, Elite ou Prestige 
                    - Nantissement sur la durée du prêt du PEC ou PEL à constituer obligatoirement selon les conditions standards
                    - Souscrire à une assurance vie pour garantir les risques de décès et d'invalidité absolue et définitive 
                    - Justifier d'au moins une (01) domiciliation de salaire à la BNI.` 
      },
      {
          question :"Quels sont les documents à fournir?",
          answer : `- Une demande manuscrite de prêt 
                    - Les trois (3) derniers bulletins de salaire 
                    - Un formulaire d'assurance renseigné 
                    - Une attestation de non redevance 
                    - Une facture d'électricité, d'eau ou de téléphone datant de moins de trois mois ou à défaut un certificat de résidence 
                    - Un engagement de domiciliation irrévocable de salaire (pour les salariés) 
                    - Une attestation de travail (pour les salariés) 
                    - Une attestation de présence au corps (pour les militaires, policiers ...) 
                    - Une attestation de non révocation de domiciliation bancaire (pour les fonctionnaires) 
                    - Une attestation administrative pour prêt bancaire (pour les fonctionnaires).`
      }

]

  return (
    
    <>
    
      <div className="overview-area ptb-50 bg-ffffff">
        <div className="container">

             

{/* <div className="section-title">
            <h2 className="vwtextregular-font">Awesomes <span>Features</span></h2>
            
          </div> */}


            <div className="overview-item-style-two bg-f9f9f9">
              <div className="row">
                <div className="col  overview-content">
                  <div className="text-5xl text-center font-bold text-[#009043]" >
                  BONNE ANNEE CREDIT
                  </div>
                  <br></br>
                  <section className=" grid place-items-center">
                    <div className="px-[3px] max-w-[800px]">
                      {accordionData.map((data, index) => {
                        return <AccordionItem key={index} open={index === open} question={data.question} answer={data.answer} toggle={() => toggle(index)}/>
                      })}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Featuresdeux;
