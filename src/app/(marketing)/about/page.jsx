// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";

// const page = () => {
//   return (
//     <Container fluid className="text-light min-vh-100 d-flex justify-content-center align-items-center">
//       <Row className="w-100 d-flex justify-content-center align-items-center text-center">
//         {/* Image Section */}
//         <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
//           <div
//             className="bg-light overflow-hidden rounded-circle shadow"
//             style={{ width: "250px", height: "250px" }}
//           >
//             <Image
//               src="https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/avatar7.png?t=2025-01-26T11%3A15%3A00.473Z"
//               alt="Responsive Image"
//               width={600}
//               height={600}
//               sizes="100vw"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//               className="align-self-center"
//               priority
//             />
//           </div>
//         </Col>

//         {/* Text Section */}
//         <Col xs={12} md={6} className="text-light p-4 rounded shadow">
//           <h1 className="mb-3">About Us</h1>
//           <h5>At <strong>[Your Company Name]</strong>, our goal is simple:</h5>
//           <h6 className="mb-3">To bring ease and simplicity to your everyday life.</h6>
//           <p className="text-wrap text-break">
//             We believe in innovation, reliability, and making a positive impact.
//             With a commitment to excellence, we strive to deliver solutions that
//             truly matter to you.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default page;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const page = () => {
  return (
    // <Container fluid className="text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
    <Container fluid className="w-100 text-center ">
      {/* <Row className=""> */}
        {/* Image Section */}
        <Col xs={12} className="d-flex justify-content-center mb-1 mt-4">
          <div
            className="bg-light overflow-hidden rounded-circle shadow"
            style={{ width: "250px", height: "250px" }}
          >
            <Image
              src="https://dlwhmnvqtpuselcwwdqt.supabase.co/storage/v1/object/public/rentwoolwebIcons//avatar.png"
              alt="Responsive Image"
              width={600}
              height={600}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="align-self-center"
              priority
            />
          </div>
        </Col>

        {/* Text Section */}
        <Col xs={12} className="text-light p-4 rounded shadow ">
          <h1 className="mb-3 ">About Us</h1>
          <h5>At gsmaccess our goal is simple:</h5>
          <h6 className="mb-3">To bring ease and simplicity to your everyday life.</h6>
          <p className="text-wrap text-break">
            We believe in innovation, reliability, and making a positive impact.
            With a commitment to excellence, we strive to deliver solutions that
            truly matter to you.
          </p>
        </Col>
      {/* </Row> */}
    </Container>
  );
};

export default page;
