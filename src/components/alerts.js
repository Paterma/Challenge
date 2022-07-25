// import { useState } from 'react';
// import { RuxButton, RuxModal } from '@astrouxds/react';
// import { Heading, Stack, Text } from '@chakra-ui/react';
// import { contactData } from './contact'

// const buttonHandler = () => {
//     setIsMessageShown(!isMessageShown);
//     const [isMessageShown, setIsMessageShown] = useState(true);
//   };
    

// function Alerts(){

// const displayAlert = contactData.map (
//     (info) => {
//         return(
//                 <>
//       <RuxButton size='small' onClick={buttonHandler}>

// {isMessageShown ? "Hide Details" : "Show Details"}{isMessageShown && <div className="message">
    
//     <p style={{ fontSize: '13px', padding: '15px'}}>{info.contactSatellite} <br></br> {info.contactDetail}</p></div>}
//       </RuxButton>
//           {info.alerts.map((alert) => {   

//   return (

//       <RuxModal>
//         <Stack spacing='4' whiteSpace='normal'>
//           <Heading size='md' mb='2'>
//             {alert.errorTime}
//             {alert.errorSeverity}
//           </Heading>
//           {alerts.map(({ errorId, errorMessage }, i) => (
//             <Stack key={errorId + i} spacing='1' bgColor='blackAlpha.500' p='2'>
//               <Text>Message: {errorMessage} </Text>
//             </Stack>
//           ))}
//         </Stack>
//       </RuxModal>
//     </>
//   )
// }
//           )}


// export default Alerts;




{/* // type AlertModalProps = { */}
{/* //   alerts: Alert[];
//   contactName: number;
//   contactSatellite: string;
// };

// export const AlertModal: React.FC<AlertModalProps> = ({ */}
{/* //   alerts,
//   contactName,
//   contactSatellite,
// }) => {
//   const [open, setOpen] = useState(false); */}