// "use client";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { Container } from "react-bootstrap";

// function ImagePicker({ onImageSelect }) {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectVal, setSelectVal] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setSelectedImage(URL.createObjectURL(file)); // Display the selected image
//       onImageSelect(file); // Pass the selected file to the parent
//     } else {
//       alert("Please select a valid image file (jpg, png, etc.)");
//     }
//   };

//   return (
//     <div className="mb-3 text-light">
//       <Form.Label>Upload an Image</Form.Label>
//       <Form.Control
//         required
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//       />
//       {selectedImage && (
//         <div style={{ marginTop: "10px" }}>
//           <p>Preview:</p>
//           <img
//             src={selectedImage}
//             alt="Selected"
//             style={{ maxWidth: "20vh", height: "auto", borderRadius: "8px" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// function ContactForm() {
//   const [validated, setValidated] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);

//     if (uploadedImage) {
//       console.log("Uploaded image:", uploadedImage);
//       // You can send the uploadedImage file to your backend here
//     }
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom01">
//           <FloatingLabel controlId="floatingInputGrid" label="First Name">
//             <Form.Control required type="text" placeholder="First Name" />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} md="6" controlId="validationCustom02">
//           <FloatingLabel controlId="floatingInputGrid" label="Last Name">
//             <Form.Control required type="text" placeholder="Last Name" />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>
//       </Row>
//       <hr className="border border-danger" />
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom03">
//           <FloatingLabel controlId="floatingInputGrid" label="Transaction Date">
//             <Form.Control required type="text" placeholder="Transaction Date" />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom04">
//           <FloatingLabel controlId="floatingInputGrid" label="Transaction Time">
//             <Form.Control required type="text" placeholder="Transaction Time" />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom05">
//           <FloatingLabel
//             controlId="floatingInputGrid"
//             label="Transaction Amount"
//           >
//             <Form.Control
//               required
//               type="text"
//               placeholder="Transaction Amount"
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>
//       </Row>
//       <hr className="border border-danger" />
//       <Row className="mb-3">
//         <Form.Group className="" as={Col} md="6" controlId="validationCustom06">
//           <FloatingLabel controlId="floatingSelect" label="Transaction Channel">
//             <Form.Select
//               required
//               aria-label="Floating Channel"
//               defaultValue=""
//               onChange={(e) => {
//                 console.log(e.target.value);
//               }}
//             >
//               <option value="" disabled>
//                 Select an option
//               </option>
//               <option value="EasyPaisa">EasyPaisa</option>
//               <option value="JazzCash">JazzCash</option>
//               <option value="NayaPay">NayaPay</option>
//               <option value="Other">Other</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               Please select a valid transaction channel.
//             </Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} md="" controlId="validationCustom07">
//           <FloatingLabel controlId="floatingInputGrid" label="Contact No">
//             <Form.Control required type="phone" placeholder="Contact No" />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </FloatingLabel>
//         </Form.Group>
//       </Row>

//       <FloatingLabel controlId="floatingTextarea2" label="Comments">
//         <Form.Control
//           required
//           as="textarea"
//           placeholder="Leave a comment here"
//           style={{ height: "100px" }}
//         />
//       </FloatingLabel>
//       <hr className="border border-danger" />
//       <ImagePicker onImageSelect={setUploadedImage} />
//       <Form.Group className="mb-3">
//         <Form.Check
//           className="text-light"
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>

//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

// export default ContactForm;

// "use client";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { Container } from "react-bootstrap";

// function ImagePicker({ onImageSelect }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       if (selectedImage) URL.revokeObjectURL(selectedImage); // Free memory
//       const imageURL = URL.createObjectURL(file);
//       setSelectedImage(imageURL);
//       onImageSelect(file);
//     } else {
//       alert("Please select a valid image file (jpg, png, etc.)");
//     }
//   };

//   return (
//     <div className="mb-3 text-light">
//       <Form.Label>Upload an Image</Form.Label>
//       <Form.Control
//         required
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//       />
//       {selectedImage && (
//         <div style={{ marginTop: "10px" }}>
//           <p>Preview:</p>
//           <img
//             src={selectedImage}
//             alt="Selected"
//             style={{ maxWidth: "20vh", height: "auto", borderRadius: "8px" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// function ContactForm() {
//   const [validated, setValidated] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [selectedChannel, setSelectedChannel] = useState("");

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (!form.checkValidity()) {
//       event.preventDefault();
//       event.stopPropagation();
//     } else {
//       event.preventDefault(); // Remove this if you want actual form submission
//       console.log("Form submitted!");
//       console.log("Uploaded image:", uploadedImage);
//       console.log("Selected channel:", selectedChannel);
//     }
//     setValidated(true);
//   };

//   return (
//     <Container className="mt-4">
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         {/* Name Fields */}
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6" controlId="validationCustom01">
//             <FloatingLabel controlId="floatingFirstName" label="First Name">
//               <Form.Control required type="text" placeholder="First Name" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter your first name.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>

//           <Form.Group as={Col} md="6" controlId="validationCustom02">
//             <FloatingLabel controlId="floatingLastName" label="Last Name">
//               <Form.Control required type="text" placeholder="Last Name" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter your last name.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>
//         </Row>

//         <hr className="border border-danger" />

//         {/* Transaction Details */}
//         <Row className="mb-3">
//           <Form.Group as={Col} md="4" controlId="validationCustom03">
//             <FloatingLabel controlId="floatingTransactionDate" label="Transaction Date">
//               <Form.Control required type="date" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid date.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom04">
//             <FloatingLabel controlId="floatingTransactionTime" label="Transaction Time">
//               <Form.Control required type="time" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid time.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom05">
//             <FloatingLabel controlId="floatingTransactionAmount" label="Transaction Amount">
//               <Form.Control required type="number" placeholder="Transaction Amount" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid amount.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>
//         </Row>

//         <hr className="border border-danger" />

//         {/* Transaction Channel & Contact No */}
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6" controlId="validationCustom06">
//             <FloatingLabel controlId="floatingSelect" label="Transaction Channel">
//               <Form.Select
//                 required
//                 defaultValue=""
//                 onChange={(e) => setSelectedChannel(e.target.value)}
//               >
//                 <option value="" disabled>Select an option</option>
//                 <option value="EasyPaisa">EasyPaisa</option>
//                 <option value="JazzCash">JazzCash</option>
//                 <option value="NayaPay">NayaPay</option>
//                 <option value="Other">Other</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">
//                 Please select a transaction channel.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>

//           <Form.Group as={Col} md="6" controlId="validationCustom07">
//             <FloatingLabel controlId="floatingContactNo" label="Contact No">
//               <Form.Control required type="tel" placeholder="Contact No" pattern="\d+" />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid contact number.
//               </Form.Control.Feedback>
//             </FloatingLabel>
//           </Form.Group>
//         </Row>

//         {/* Comments Section */}
//         <FloatingLabel controlId="floatingTextarea2" label="Comments">
//           <Form.Control
//             required
//             as="textarea"
//             placeholder="Leave a comment here"
//             style={{ height: "100px" }}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please enter a comment.
//           </Form.Control.Feedback>
//         </FloatingLabel>

//         <hr className="border border-danger" />

//         {/* Image Picker */}
//         <ImagePicker onImageSelect={setUploadedImage} />

//         {/* Terms & Conditions */}
//         <Form.Group className="mb-3">
//           <Form.Check
//             className="text-light"
//             required
//             label="Agree to terms and conditions"
//             feedback="You must agree before submitting."
//             feedbackType="invalid"
//           />
//         </Form.Group>

//         {/* Submit Button */}
//         <Button type="submit">Submit form</Button>
//       </Form>
//     </Container>
//   );
// }

// export default ContactForm;

"use client";
import { useState } from "react";
import {
  Toast,
  ToastContainer,
  Button,
  Col,
  Form,
  Row,
  FloatingLabel,
  Container,
} from "react-bootstrap";

function ImagePicker({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (selectedImage) URL.revokeObjectURL(selectedImage);
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      onImageSelect(file);
    } else {
      alert("Please select a valid image file (jpg, png, etc.)");
    }
  };

  return (
    <div className="mb-3 text-light">
      <Form.Label>Upload an Image</Form.Label>
      <Form.Control
        required
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div style={{ marginTop: "10px" }}>
          <p>Preview:</p>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "20vh", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleTransactionChannelChange = (e) => {
    const value = e.target.value;
    setSelectedChannel(value);

    if (value === "Other") {
      setShowToast(true);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log("Form submitted!");
      console.log("Uploaded image:", uploadedImage);
      console.log("Selected channel:", selectedChannel);
    }
    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-2" as={Col} md="6" controlId="validationCustom01">
            <FloatingLabel controlId="floatingFirstName" label="First Name">
              <Form.Control required type="text" placeholder="First Name" />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group  as={Col} md="6" controlId="validationCustom02">
            <FloatingLabel controlId="floatingLastName" label="Last Name">
              <Form.Control required type="text" placeholder="Last Name" />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <hr className="border border-danger" />

        <Row className="mb-3">
          <Form.Group className="mb-2" as={Col} md="4" controlId="validationCustom03">
            <FloatingLabel
              controlId="floatingTransactionDate"
              label="Transaction Date"
            >
              <Form.Control required type="date" />
              <Form.Control.Feedback type="invalid">
                Please enter a valid date.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-2" as={Col} md="4" controlId="validationCustom04">
            <FloatingLabel
              controlId="floatingTransactionTime"
              label="Transaction Time"
            >
              <Form.Control required type="time" />
              <Form.Control.Feedback type="invalid">
                Please enter a valid time.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <FloatingLabel
              controlId="floatingTransactionAmount"
              label="Transaction Amount"
            >
              <Form.Control
                required
                type="number"
                placeholder="Transaction Amount"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid amount.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <hr className="border border-danger" />

        <Row className="mb-3">
          <Form.Group className="mb-2" as={Col} md="6" controlId="validationCustom06">
            <FloatingLabel
              controlId="floatingSelect"
              label="Transaction Channel"
            >
              <Form.Select
                required
                value={selectedChannel}
                onChange={handleTransactionChannelChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="EasyPaisa">EasyPaisa</option>
                <option value="JazzCash">JazzCash</option>
                <option value="NayaPay">NayaPay</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a transaction channel.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group  as={Col} md="6" controlId="validationCustom07">
            <FloatingLabel controlId="floatingContactNo" label="Contact No">
              <Form.Control
                required
                type="tel"
                placeholder="Contact No"
                pattern="\d+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid contact number.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        {/* Alert placed outside the Row */}
        {selectedChannel === "Other" && (
          <Row >
            <Col>
              <div
                className="alert alert-warning w-100 pt-1 pb-1 ps-2 pe-2 mt-0 text-capitalize text-wrap"
                role="alert"
                // style={{ whiteSpace: "normal", wordWrap: "break-word"}}
              >
                ⚠️ You have selected <p className="d-inline-flex p-0 m-0 text-danger fw-bold"> ' Other ' </p> as the transaction channel. Kindly
                provide the name of your bank or wallet in <p className="d-inline-flex p-0 m-0 fw-bold "> 'Provide Detail Here'</p> section.
              </div>
            </Col>
          </Row>
        )}

        <FloatingLabel controlId="floatingTextarea2" label="Provide Detail Here">
          <Form.Control
            required
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a comment.
          </Form.Control.Feedback>
        </FloatingLabel>

        <hr className="border border-danger" />

        <ImagePicker onImageSelect={setUploadedImage} />

        <Form.Group className="mb-3">
          <Form.Check
            className="text-light"
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
