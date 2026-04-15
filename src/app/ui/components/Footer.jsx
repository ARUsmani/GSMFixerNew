// "use client";
// import { Container } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container className="text-center">
//         <p>
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </p>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

"use client"

import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar className="bg-body-tertiary footer d-flex align-items-center justify-content-center bg-dark text-light" bg="dark" data-bs-theme="dark" fixed='bottom'>

      
        <p className='m-0 p-0'>
          &copy; {new Date().getFullYear()} | GSM FIXER | All rights reserved.
        </p>
     
    </Navbar>
  );
}

export default Footer;



