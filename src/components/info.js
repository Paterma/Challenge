// import '../styles/cards.css'
// import React, {Component, Fragment} from 'react'
import { useState } from 'react';
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { contactData } from './contact'
// import { Center, HStack, Text } from '@chakra-ui/react';
import {
    RuxCheckbox,
    RuxTable,
    RuxTableBody,
    RuxTableCell,
    RuxTableHeader,
    RuxTableHeaderRow,
    RuxTableHeaderCell,
    RuxTableRow,
    RuxButton
  } from '@astrouxds/react';


function Info() {

    const [isBoxShown, setIsBoxShown] = useState(true);
    const [isMessageShown, setIsMessageShown] = useState(true);
    
    const buttonHandler = () => {
        setIsMessageShown(!isMessageShown);
        
      };

      const showboxHandler = () => {
        setIsBoxShown(!isBoxShown)
        // setIsBoxShown(id);
       };


    return (
<RuxTable>
      <RuxTableHeader>
        <RuxTableHeaderRow>
          <RuxTableHeaderCell />
          <RuxTableHeaderCell>Selection</RuxTableHeaderCell>
          <RuxTableHeaderCell>Name</RuxTableHeaderCell>
          <RuxTableHeaderCell>Time</RuxTableHeaderCell>
          <RuxTableHeaderCell>Severity</RuxTableHeaderCell>
          <RuxTableHeaderCell>Alerts</RuxTableHeaderCell>
        </RuxTableHeaderRow>
      </RuxTableHeader>
      <RuxTableBody>
        {contactData.map((info) => (
            
          <RuxTableRow>
            {/* <Center> */}
              <RuxCheckbox />
           {/* {info.alerts.map((alert) =>( ))}    */}
            {/* </Center> */}
            <RuxTableCell><button style={{ width: '6.5rem', height: '1.5rem', fontSize: '12px'}} onClick={showboxHandler}>
          {isBoxShown ? "Acknowledge" : "Unacknowledge"}{isBoxShown && <div className="box">
          </div>}
          </button></RuxTableCell>
            <RuxTableCell>{info.contactName}</RuxTableCell>
          
             {/* {info.alerts.map((alert) => (
                return (
  ))} */}
                
            <RuxTableCell>{info.alerts.errorSeverity}</RuxTableCell>
            <RuxTableCell>{info.alerts.errorTime}</RuxTableCell>
              

            <RuxTableCell>
            <RuxButton size='small' onClick={buttonHandler}>

{isMessageShown ? "Hide Details" : "Show Details"}{isMessageShown && <div className="message">
    
    <p style={{ fontSize: '15px', height: '15px', color: 'red', padding: '15px'}}>{info.contactSatellite}, {info.contactDetail}</p></div>}
      </RuxButton>
            </RuxTableCell>

          </RuxTableRow>
                ))}
      </RuxTableBody>
    </RuxTable>
  );
};


export default Info;




// function Cards(){

//     const [isBoxShown, setIsBoxShown] = useState(true);
//     const [isMessageShown, setIsMessageShown] = useState(true);
    
//     const buttonHandler = () => {
//         setIsMessageShown(!isMessageShown);
        
//       };

//       const showboxHandler = () => {
//         setIsBoxShown(!isBoxShown)
//         // setIsBoxShown(id);
//        };

//     const DisplayData = contactData.map(
//         (info) => {
  

//             return(
               
//                 <td>
//                     {info.alerts.map((alert) => {
                    
//                         return (
//                         <td>
                        
//                         <button style={{ width: '6.5rem', height: '1.5rem', fontSize: '12px'}} onClick={showboxHandler}>
//           {isBoxShown ? "Acknowledge" : "Unacknowledge"}{isBoxShown && <div className="box">
          

//                     <td>{info.contactName}</td>
//                     <td>{alert.errorTime}</td>
//                     <td>{alert.errorSeverity}</td>

//                       <td>
//                         <button style={{ width: '6rem', height: '1.5rem', fontSize: '12px'}} onClick={buttonHandler}>

//                             <td>{isMessageShown ? "Hide Details" : "Show Details"}{isMessageShown && <div className="message">
                                
//                                 <p style={{ fontSize: '13px'}}>{info.contactSatellite}, {info.contactDetail}</p>
//                         </div>}
//                         </td>
          
//     </button>
//    </td>
//    </div>}
          
//                  </button>
                
//                 </td>
                            
//                         ) })} 
//                </td>   
//             )
//         }
//     )

//     return(
//         <div>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Acknowledge</th>
//                     <th>Name</th>
//                     <th>Time</th>
//                     <th>Severity</th>
//                     <th>Alert Message</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                 
//                     {DisplayData}
                    
//                 </tbody>
//             </table>
             
//         </div>
//     )
//  }


// export default Cards;

