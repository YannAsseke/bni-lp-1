import React,{useState} from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { Collapse } from "react-collapse";

// const AccordionSection = styled.div`
//     display : flex !important;
//     flex-direction : column !important;
//     align-items : center !important;
//     position : relative !important;
//     height : 100vh !important;
//     background : #fff !important; 
// `;

// const Container = styled.div`
//     position : absolute !important;
//     top : 30% !important;
//     box-shadow : 2px 10px 35px 1px rgba(153, 153, 153, 0.3) !important;
// `;

// const Wrap = styled.div`
//     background : #ff8d00 !important;
//     color : #fff !important;
//     display : flex !important;
//     justify-content : space-between !important;
//     align-items : center !important;
//     width: 100% !important;
//     text-align : center !important;
//     cursor : pointer !important;
//     border-bottom : 3px solid #fff !important;
    

//     h6{
//         padding : 10px !important;
//         font-size : 18px !important;
//     }

//     span{
//         margin-right : 1.5em !important;
//         color: #fff !important;
//     }

//     span > svg {
//         color : #fff !important;
//     }
// `;

// const Dropdown1 = styled.div`
//     background : #fff !important;
//     color : #000801 !important; 
//     widht : 100% !important;
//     height : 100px !important;  
//     display : flex !important;
//     flex-direction : column !important;
//     justify-content : center !important;
//     align-items : start !important;
    

//     p{
//         font-size : 14px !important;
//         padding: 10px !important;
//         color : black !important;
//     }
// `;

// const Accordion = () =>{

//     const [clicked,setClicked] = useState(false)
//     const toogle = index => {
//         if(clicked === index) {
//             return setClicked(null)
//         }

//         setClicked(index)
//     }

//     return (
//         <IconContext.Provider value={{ color : '#00FFB9', size : '25px' }}>
//             <AccordionSection>
//                 <Container>
//                     {Data.map((item, index) => {
//                         return(
//                             <>
//                                 <Wrap onClick={() => toogle(index)} key={index}>
//                                     <h6>{item.question}</h6>
//                                 <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
//                                 </Wrap>
//                                 {clicked === index ? (
//                                     <Dropdown1>
//                                         <p>{item.answer}</p>
//                                     </Dropdown1>
//                                 ) : null}
//                             </>
//                         )
//                     })}
//                 </Container>
//             </AccordionSection>
//         </IconContext.Provider>
        
//     )
// };

const AccordionItem =({open, toggle, question, answer}) => {
    return (
        <div className="py-[10px]">
            <div className="border-b-4 border-white-600 bg-[#ff8d00] px-[50px] flex justify-beetween items-center cursor-pointer" onClick={toggle}>
            <div className="text-[30px] text-white pr-4">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                <p className="text-[20px] text-white font-semibold">{question}</p>
                
            </div>

            <Collapse isOpened={open}>
                <div className="bg-white px-[50px] pb-[20px] font-bold align-middle inline-block">{answer}</div>
            </Collapse>
        </div>
    )
}

export default AccordionItem;