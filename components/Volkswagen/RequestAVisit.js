import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";
import type, { NextPage } from "next";

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

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = {
      Vehicule:vehicule,
      Name:fullname,
      Number:number,
      Email:email,
      Residence:residence,
      Assure:assure,
    }

    // const response = fetch(input = '/api/submit', init = {
    //   method : 'POST',
    //   headers : {
    //     'Accept' : 'application/json',
    //     'Content-Type' : 'application/json'
    //   },
    //   body : JSON.stringify(data)
    // })

    // setName('');
    // setEmail('');
    // setNumber('');
    // setReason('');
    // setText('');
    // alertContent();


    axios.post('/api/submit',data).then((response)=>{
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
  }

 /* const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact/`;
      const { name, email, number,reason, text } = contact;
      const payload = { name, email, number,reason, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };
*/

// const Home = NextPage = () =>{
//   const [name, setName] = useState(initialState = '')
//   const [email, setEmail] = useState(initialState = '')
//   const [number, setNumber] = useState(initialState = '')
//   const [reason, setReason] = useState(initialState = '')
//   const [text, setText] = useState(initialState = '')
// }

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const form = {
//     name,
//     email,
//     number,
//     reason,
//     text
//   }
//   // try {
//   //   const url = `${baseUrl}/api/contact/`;
//   //   const { name, email, number,reason, text } = contact;
//   //   const payload = { name, email, number,reason, text };
//   //   const response = await axios.post(url, payload);
//   //   console.log(response);
//   //   setContact(INITIAL_STATE);
//   //   alertContent();
//   // } catch (error) {
//   //   console.log(error);
//   // }
// };

  return (
    <div className="request-a-visit-area bg2 ptb-50" id="forms">
      <div className="container">
	  <h4 className="cliauto_text_form">Pour bénéficier de l'offre, veuillez remplir ce formulaire.</h4>
        <div
          className="request-a-visit-form"
        >
         <form onSubmit={handleSubmit}>
         <div className="form-group">
            <p>Avez-vous un compte à BNI?*</p>
            <select className="form-select" 
                name="vehicule"
                id="vehicule"
                value={vehicule}
                onChange={(e) => setVehicule(e.target.value)}
            required>
              <option defaultValue="">---</option>
              <option defaultValue="Oui">Oui</option>
              <option defaultValue="Non">Non</option>
            </select>
          </div>

            <div className="form-group">
              
              <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Nom & Prénoms*"
                          className="form-control"
                          value={fullname}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
            </div>

            <div className="form-group">
              
              <input
                          type="text"
                          name="number"
                          id="number"
                          placeholder="Numéro de téléphone*"
                          className="form-control"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          required
                        />
            </div>

            <div className="form-group">
              
              <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email (falcultatif)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
            </div>

            <div className="form-group">
              
              <input
                          type="text"
                          name="Residence"
                          id="residence"
                          className="form-control"
                          placeholder="Lieu de résidence*"
                          value={residence}
                          onChange={(e) => setResidence(e.target.value)}
                          required
                        />
            </div>

            <div className="form-group">
            Avez-vous une fois contracté un prêt à BNI?*
            <select className="form-select" 
                name="assure"
                id="assure"
                value={assure}
                onChange={(e) => setAssure(e.target.value)}
            required>
              <option defaultValue="">---</option>
              <option defaultValue="Non">Non</option>
              <option defaultValue="Oui">Oui</option>
            </select>
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
