

"use client";


// import apiHandlers from "@/api/getUnlockTool";
// const { cardDataHandler } = apiHandlers;
// import React, { useEffect, useState } from "react";
// import ToolCard from '@/app/ui/components/ToolCard'
// import { Container, Row, Col } from 'react-bootstrap'

// const page = () => {

//   const [cardData, setCardData] = useState([]);
//   const [CookieData, setCookieData] = useState([]);
//   const [fileContent, setFileContent] = useState('');
//   const [variable, setVariable] = useState('');
//   useEffect(() => {
 
//     async function fetchData() {
//       try {
//         const cardDataFetch = await cardDataHandler(); // This will return the card data
//         // const cookieDataetch = await cookieDataHandler(); // This will return the cookie data

//         // setCookieData(cookieDataetch);
//         setCardData(cardDataFetch);
//         console.log(cardData)
//       } catch (err) {
//         console.error("Error fetching data:", err.message);
//         setError(err.message || "An error occurred");
//       }
//     }
 
//     fetchData();

//   }, []);


//   return (
   
//   <Container fluid className='h-100'>
//     <Row className='justify-content-center'>
//       { console.log(cardData)}
//     {cardData.map((item, index) => (
//           // <Col key={index} className="flex-row" lg={3} sm={6} >
//             <ToolCard key={index} binding={item.totalTime} prcpkr={item.pricePkr} prcusdt={item.priceUsdt} title={item.cardTitle} rntbtn={item.subBtn} toolIcon={item.toolIcon}/>
//           // </Col> 
//         ))}
//     <ToolCard />
//     {/* <ToolCard  binding={'48'} prcpkr={'400'} prcusdt={'2'} title={"DFT Pro"}  rntbtn={true} toolIcon={'https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/dftIcon.png?t=2025-01-26T18%3A07%3A32.575Z'} /> */}
    
//     </Row>

//   </Container>
//   )
// }

// export default page


// // "use client";

// // import apiHandlers from "@/api/getGptCookies";
// // const { cookieDataHandler, cardDataHandler } = apiHandlers;
// // import React, { useEffect, useState } from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import HoverCardPlcHolder from "@/components/HoverCardPlcHolder";

// // export default function HomeComp() {

// //   const [cardData, setCardData] = useState([]);
// //   const [CookieData, setCookieData] = useState([]);
// //   const [fileContent, setFileContent] = useState('');
// //   const [variable, setVariable] = useState('');
// //   useEffect(() => {
 
// //     async function fetchData() {
// //       try {
// //         const cardDataFetch = await cardDataHandler(); // This will return the card data
// //         const cookieDataetch = await cookieDataHandler(); // This will return the cookie data

// //         setCookieData(cookieDataetch);
// //         setCardData(cardDataFetch);
// //       } catch (err) {
// //         console.error("Error fetching data:", err.message);
// //         setError(err.message || "An error occurred");
// //       }
// //     }
 
// //     fetchData();

// //   }, []);


// //   return (
  

// //     <Container fluid className="">
// //       <Row className=" d-flex justify-content-center align-items-center bg-body-secondary min-vw-100 min-vh-100">
// //         {cardData.map((item, index) => (
// //           <Col key={index} className="d-flex flex-column cardMain" lg={3} sm={6}>
// //             <HoverCardPlcHolder
// //               card={item.card}
// //               title={item.title}
// //               description={item.description}
// //               color={item.cardColor}
// //               iconIMG={item.iconIMG}
// //               status={item.status}
// //               link={item.card ? item.link : "#"}
// //             />
// //           </Col>
// //         ))}
// //       </Row>
    
// //   </Container>
// //   );
// // }









//important Modal -------- //



// import React from 'react'

// import { Button } from 'react-bootstrap';
// import PaymentModal from '@/app/ui/components/PaymentModal';


// const page = () => {
//    const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>
  
//   <PaymentModal
//   show={modalShow}
//         onHide={() => setModalShow(false)}
// />
//     </>
//   )
// }

// export default page

//------ important Modal //


//coin front back--------
// import React, { useState } from "react";
// import Image from "next/image";
// import coinPKR from "@/assets/coinPKR.png"
// import coinUSDT from "@/assets/coinUSDT.png"


// const page = () => {
//   const [isFront, setIsFront] = useState(true);
//   return (
//      <div style={{ textAlign: "center" }}>
//        <Image
//              src={isFront ? coinPKR: coinUSDT}
//               alt="Responsive Image"
//               unoptimized
//               width={600}
//               height={600}
//               sizes="100vw"
//               style={{
//                 width: "10%",
//                 height: "10%",
//                 objectFit: "cover",
//                // opacity: isLoaded ? 1 : 0, // Hide until loaded
//                 transition: "opacity 0.3s ease-in-out",
//               }}
//             // onLoad={() => setIsLoaded(true)} // When image loads, show it
//               priority
//             />
      

//       <br />
//       <button onClick={() => setIsFront(!isFront)}>
//         {isFront ? "Show Back" : "Show Front"}
//       </button>
//     </div>
//   )
// }

// export default page

//-----------coin front back




import { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import coinPKR from "@/assets/coinPKR.png"
import coinUSDT from "@/assets/coinUSDT.png"
import PaymentModal from "@/app/ui/components/PaymentModal";


function page() {
    const [isFlipped, setIsFlipped] = useState(false);
   const [modalShow, setModalShow] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
       <div
      style={{
        perspective: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={coinPKR} // apna front png path
            alt="Coin Front"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={coinUSDT} // apna back png path
            alt="Coin Back"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Button onClick={handleFlip} variant="primary">
        Flip Coin
      </Button>
           <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
         Launch vertically centered modal
       </Button>
  
   <PaymentModal
   show={modalShow}
        onHide={() => setModalShow(false)}
 />
     </>
    </div>
  )
}

export default page
