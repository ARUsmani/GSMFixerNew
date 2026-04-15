

"use client";

import apiHandlers from "@/api/getUnlockTool";
const { cardDataHandler } = apiHandlers;
import React, { useEffect, useState } from "react";
import ToolCard from '@/app/ui/components/ToolCard'
import { Container, Row, } from 'react-bootstrap'

const page = () => {

  const [cardData, setCardData] = useState([]);
  const [CookieData, setCookieData] = useState([]);
  const [fileContent, setFileContent] = useState('');
  const [variable, setVariable] = useState('');
  useEffect(() => {
 
    async function fetchData() {
      try {
        const cardDataFetch = await cardDataHandler(); // This will return the card data
       
        setCardData(cardDataFetch);
        console.log(cardData)
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message || "An error occurred");
      }
    }
 
    fetchData();

  }, []);


  return (
   
  <Container fluid className='h-100'>
    <Row className='justify-content-center'>
      { console.log(cardData)}
    {cardData.map((item, index) => (
          // <Col key={index} className="flex-row" lg={3} sm={6} >
            <ToolCard key={index} binding={item.totalTime} prcpkr={item.pricePkr} prcusdt={item.priceUsdt} title={item.cardTitle} rntbtn={item.subBtn} toolIcon={item.toolIcon}/>
          // </Col> 
        ))}
    <ToolCard />
    {/* <ToolCard  binding={'48'} prcpkr={'400'} prcusdt={'2'} title={"DFT Pro"}  rntbtn={true} toolIcon={'https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/dftIcon.png?t=2025-01-26T18%3A07%3A32.575Z'} /> */}
    
    </Row>

  </Container>
  )
}

export default page


// "use client";

// import apiHandlers from "@/api/getGptCookies";
// const { cookieDataHandler, cardDataHandler } = apiHandlers;
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import HoverCardPlcHolder from "@/components/HoverCardPlcHolder";

// export default function HomeComp() {

//   const [cardData, setCardData] = useState([]);
//   const [CookieData, setCookieData] = useState([]);
//   const [fileContent, setFileContent] = useState('');
//   const [variable, setVariable] = useState('');
//   useEffect(() => {
 
//     async function fetchData() {
//       try {
//         const cardDataFetch = await cardDataHandler(); // This will return the card data
//         const cookieDataetch = await cookieDataHandler(); // This will return the cookie data

//         setCookieData(cookieDataetch);
//         setCardData(cardDataFetch);
//       } catch (err) {
//         console.error("Error fetching data:", err.message);
//         setError(err.message || "An error occurred");
//       }
//     }
 
//     fetchData();

//   }, []);


//   return (
  

//     <Container fluid className="">
//       <Row className=" d-flex justify-content-center align-items-center bg-body-secondary min-vw-100 min-vh-100">
//         {cardData.map((item, index) => (
//           <Col key={index} className="d-flex flex-column cardMain" lg={3} sm={6}>
//             <HoverCardPlcHolder
//               card={item.card}
//               title={item.title}
//               description={item.description}
//               color={item.cardColor}
//               iconIMG={item.iconIMG}
//               status={item.status}
//               link={item.card ? item.link : "#"}
//             />
//           </Col>
//         ))}
//       </Row>
    
//   </Container>
//   );
// }


