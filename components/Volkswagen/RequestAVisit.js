import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";
import type, { NextPage } from "next";
import {useForm} from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { Alert } from "react-bootstrap";

const alertContent = () => {
  MySwal.fire({
    title: "Succès!",
    text: "Vos informations ont été bien enregistrées.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
// const INITIAL_STATE = {
//   name: "",
//   email: "",
//   number: "",
//   reason: "",
//   text: "",
// };
var initialState ={};

const RequestAVisit = () => {

  var [vehicule,setVehicule] = useState('');
  var [fullname,setName] = useState('');
  var [number,setNumber] = useState('');
  var [email,setEmail] = useState('');
  var [residence,setResidence] = useState('');
  var [assure,setAssure] = useState('');

  const {register, formState: { errors }, handleSubmit} = useForm();

  const onSubmit = () => {
    const data = {
      Vehicule:vehicule,
      Name:fullname,
      Number:number,
      Email:email,
      Residence:residence,
      Assure:assure,
    }

    axios.post('/api/submit', data).then((response)=>{
      console.log(response);
      setVehicule('');
      setName('');
      setEmail('');
      setNumber('');
      setResidence('');
      setAssure('');
  
      alertContent();
    }).catch((err) =>console.log(err))
  
    console.log(data)
  };
  
  

  return (
    <div className="request-a-visit-area bg2 ptb-50" id="forms">
      <div className="container">
	  <h4 className="cliauto_text_form">Pour bénéficier de l'offre, veuillez remplir ce formulaire.</h4>
        <div
          className="request-a-visit-form"
        >
         <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <div className="form-group">
            <p>Avez-vous un compte à BNI?*</p>
            <select className="form-select" 
                name="vehicule"
                id="vehicule"
                value={vehicule}
                onChange={(e) => setVehicule(e.target.value)}
            required>
              <option defaultValue="Non">Non</option>
              <option defaultValue="Oui">Oui</option>
            </select>
          </div>

            <div className="form-group">
              
              <input
                          {...register('fullName',{required : 'Nom & Prénoms est obligatoire' })}
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Nom & Prénoms*"
                          className="form-control"
                          value={fullname}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
              {
                errors.fullName && <span className="text-[#BB0D1C]" >{errors.fullName.message}</span>
              }
            </div>

            <div className="form-group">
              
              <input
                          
                          type="number"
                          {...register('number',{required : 'Numero de téléphone est obligatoire', minLength : {value : 10, message : "Numero de téléphone invalide (au moins 8 chiffres)"} })}
                          name="number"
                          id="number"
                          placeholder="Numéro de téléphone*"
                          className="form-control"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          required
                        />
              {
                errors.number && <span className="text-[#BB0D1C]" >{errors.number.message}</span>
              }
            </div>

            <div className="form-group">
              
              <input
                          {...register('email',{ pattern :{ value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message : 'Email invalide'}})}
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email (falcultatif)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          />
              {
                errors.email && <span className="text-[#BB0D1C]" >{errors.email.message}</span>
              }
            </div>

            <div className="form-group">
              
              <input
                        {...register('Residence',{required : 'Lieu de résidence est obligatoire'})}
                          type="text"
                          name="Residence"
                          id="residence"
                          className="form-control"
                          placeholder="Lieu de résidence*"
                          value={residence}
                          onChange={(e) => setResidence(e.target.value)}
                          required
                        />
              {
                errors.Residence && <span className="text-[#BB0D1C]" >{errors.Residence.message}</span>
              }
            </div>

            <div className="form-group">
            Avez-vous une fois contracté un prêt à BNI?*
            <select className="form-select" 
               {...register('assure',{required : 'Ce champ est obligatoire'})}
                name="assure"
                id="assure"
                value={assure}
                onChange={(e) => setAssure(e.target.value)}
            required>
              <option defaultValue="Oui">Oui</option>
              <option defaultValue="Non">Non</option>
            </select>
            {
                errors.assure && <span className="text-[#BB0D1C]" >{errors.assure.message}</span>
              }
          </div>
            <button type="submit" className="btn-style-one blue-dark-color">
              Valider <i className="bx bx-chevron-right"></i>
            </button>
           </form>
        </div>
      </div>
    </div>
  );  
};

  
export default RequestAVisit;
