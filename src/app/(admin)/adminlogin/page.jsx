
// "use client";
// import React, { useState } from "react";
// import { FaUserEdit, FaUserLock } from "react-icons/fa";
// import { Container, Button, Form, InputGroup } from "react-bootstrap";
// import Image from "next/image";
// import { login } from './actions'

// const page = () => {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default behavior initially
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.stopPropagation(); // Stop the event if validation fails
//     } else {
//       // Perform login logic here
//       console.log("Form submitted successfully!");
//     }

//     setValidated(true);
//   };

//   return (
//     <Container className="p-4" style={{ maxWidth: "400px", margin: "auto" }}>
//       {/* Profile Image */}
//       <div
//         className="w-full max-w-md mx-auto bg-light rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3"
//         style={{ aspectRatio: "1 / 1", maxHeight: "200px" }}
//       >
//         <Image
//           src="https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/avatar7.png?t=2025-01-26T11%3A15%3A00.473Z"
//           alt="Profile Avatar"
//           width={600}
//           height={600}
//           sizes="100vw"
//           style={{
//             width: "90%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//           priority
//         />
//       </div>

//       {/* Form */}
//       <Form noValidate validated={validated} >
//         <Form.Group className="mb-3">
//           <InputGroup hasValidation>
//             <InputGroup.Text>
//               <FaUserEdit className="logIcon" />
//             </InputGroup.Text>
//             <Form.Control name="email" type="email" placeholder="Enter Email" required />
//             <Form.Control.Feedback type="invalid">
//               Please enter a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <InputGroup hasValidation>
//             <InputGroup.Text>
//               <FaUserLock className="logIcon" />
//             </InputGroup.Text>
//             <Form.Control name="password" id="password" type="password" placeholder="Enter password" required />
//             <Form.Control.Feedback type="invalid">
//               Please enter a password.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>

//         <Button formAction={login} type="submit" variant="primary" className="w-100">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default page;


"use client";
import React, { useState } from "react";
import { FaUserEdit, FaUserLock } from "react-icons/fa";
import { Container, Button, Form, InputGroup, Alert } from "react-bootstrap";
import Image from "next/image";
import { login } from './actions'

const Page = () => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");  // ✅ State for error message

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      const response = await login(formData);  // ✅ Call login function

      if (!response.success) {
        setValidated(true)
        setError(response.message);  // ✅ Set error message
        
      } else {
        window.location.href = "/adminboard";  // ✅ Redirect on success
      }
    }

    setValidated(true);
  };

  return (
    <Container className="p-4" style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Profile Image */}
      <div
        className="w-full max-w-md mx-auto bg-light rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3"
        style={{ aspectRatio: "1 / 1", maxHeight: "200px" }}
      >
        <Image
          src="https://dlwhmnvqtpuselcwwdqt.supabase.co/storage/v1/object/public/rentwoolwebIcons//avatar.png"
          alt="Profile Avatar"
          width={600}
          height={600}
          sizes="100vw"
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </div>

      {/* Error Alert */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Form */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
        
        <Form.Group className="mb-3">
          <InputGroup hasValidation>
            <InputGroup.Text>
              <FaUserEdit className="logIcon" />
            </InputGroup.Text>
            <Form.Control name="email" type="email" placeholder="Enter Email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup hasValidation>
            <InputGroup.Text>
              <FaUserEdit className="logIcon" />
            </InputGroup.Text>
            <Form.Control minLength={8} name="password" type="password" placeholder="Enter password" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid Password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <Button type="submit" variant="primary" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Page;
