import '../styles/cards.css'
import React, {Component, Fragment} from 'react'
import { useState } from 'react';
import 'react-bootstrap'
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { contactData } from './contact'



function Cards(){

    const [isBoxShown, setIsBoxShown] = useState(true);
    const [isMessageShown, setIsMessageShown] = useState(true);
    
    const buttonHandler = () => {
        setIsMessageShown(!isMessageShown);
        
      };

      const showboxHandler = () => {
        setIsBoxShown(!isBoxShown)
        // setIsBoxShown(id);
       };
       
       //                        const errorTime = info.alerts.map
    //  errorTime.sort(function(a,b) {
    //     return a - b
    //  })

    // info.alerts.errorSeverity.sort
    
    const DisplayData = contactData.map(
        (info) => {
  

            return(
               
                <tr>
                   

                    {info.alerts.map((alert) => {
                    
                        return (

                            <Fragment>
                    <td>
                        <button style={{ width: '6.5rem', height: '1.5rem', fontSize: '12px'}} onClick={showboxHandler}>
          {isBoxShown ? "Acknowledge" : "Unacknowledge"}{isBoxShown && <div className="box">
          </div>}
          
                 </button>
                </td>

                    <td>{info.contactName}</td>
                    <td>{alert.errorTime}</td>
                    <td>{alert.errorSeverity}</td>

                      <td>
                        <button style={{ width: '6rem', height: '1.5rem', fontSize: '12px'}} onClick={buttonHandler}>

                            <td>{isMessageShown ? "Hide Details" : "Show Details"}{isMessageShown && <div className="message">
                                
                                <p style={{ fontSize: '13px'}}>{info.contactSatellite}, {info.contactDetail}</p>
                        </div>}
                        </td>
          
    </button>
   </td>
                            </Fragment>
                        ) })} 
                   
                 

                  
               </tr>   
            )
        }
    )

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Acknowledge</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Severity</th>
                    <th>Alert Message</th>
                    </tr>
                </thead>
                <tbody>
                 
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
//  return(
//     <div>
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                 <th>Acknowledge</th>
//                 <th>Name</th>
//                 <th>Time</th>
//                 <th>Severity</th>
//                 <th>Alert Message</th>
//                 </tr>
//             </thead>
//             <tbody>
             
//                 {DisplayData}
                
//             </tbody>
//         </table>
         
//     </div>
// )
// }


// function Cards() {
    // const [isBoxShown, setIsBoxShown] = useState(true);
    // const [isMessageShown, setIsMessageShown] = useState(true);
  
    // const checkboxHandler = () => {
    //   setIsBoxShown(!isBoxShown);
    // };

    // const buttonHandler = () => {
    //     setIsMessageShown(!isMessageShown);
    //   };

      
    // return (
    //   <div className="container">
    //     <div>

    //     <input
    //       type="checkbox"
    //       checked={isBoxShown}
    //       onChange={checkboxHandler}
    //     />
    //     <span className='check'>
    //       {isBoxShown
    //         ? " Acknowledge"
    //          : " Unacknowledge"}
    //     </span>
    //     {isBoxShown && <div className="box">

    // <Card className='cards' style={{ width: '12rem', height: '7rem', margin: 'none' }}>
    //     <Card.Body>
    //         <Card.Title style={{ fontSize: '15px'}}> {info.contactName} - {info.alerts.errorSeverity}</Card.Title>

    //             <Card.Subtitle style={{ fontSize: '12px'}} className="mb-2 text-muted">Time</Card.Subtitle>

    //     <div>
    //     <button style={{ width: '6rem', height: '1.5rem', fontSize: '12px'}} onClick={buttonHandler}>
    //       {isMessageShown ? "Hide Details" : "Show Details"}
    //     </button>
    //    {isMessageShown && <div className="message"><p style={{ fontSize: '13px'}}>Alert message Here</p></div>}
    // {DisplayData}    
    //   </div>

    //     </Card.Body>
    // </Card>

    // </div>}
    //    </div>
    //          </div>
    // )});
    //       };


export default Cards;

//drop down menu for time and severity category?

//filer by time (most recent at the top- error time)

//contact name )contactName)
//contact time (contactBeginTimestap, endTimestamp)
//alert message (utilize rux-modal showing contactSatellite and contactDetail values)
//View alerts by severity (more severe alerts first- there are 6)









// function Cards() {
//     const [isBoxShown, setIsBoxShown] = useState(true);
//     const [isMessageShown, setIsMessageShown] = useState(true);
  
//     const checkboxHandler = () => {
//       setIsBoxShown(!isBoxShown);
//     };

//     const buttonHandler = () => {
//         setIsMessageShown(!isMessageShown);
//       };

    

  
//     return (
//       <div className="container">
     
//       <div>
//         <input
//           type="checkbox"
//           checked={isBoxShown}
//           onChange={checkboxHandler}
//         />
//         <span>
//           {isBoxShown
//             ? "Show Alert"
//             : "Dismiss Alert"}
//         </span>
//         {isBoxShown && <div className="box">

//       <Card className='cards' style={{ width: '18rem' }}/>

//       <Card.Body>
//         <Card.Title>Name</Card.Title>
//        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//          Some 
//         </Card.Text>
//       </Card.Body>

//       <div>
//         <button onClick={buttonHandler}>
//           {isMessageShown ? "Show Details" : "Hide Details"}
//         </button>
//         {isMessageShown && <div className="message"></div>}
//       </div>
//       </div>}
// </Card>

//  </div>
//     );
//   };