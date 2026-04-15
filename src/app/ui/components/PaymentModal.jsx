import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const PaymentModal = (props) => {
     const [currency, setCurrency] = useState("PKR"); // default PKR
  return (
    <Modal
    backdrop="static"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
  {/* Left Side: Heading */}
  <h6 className="mb-0">Select Currency</h6>

  {/* Right Side: Radio Buttons */}
 <div className="d-flex flex-column justify-content-between align-items-center p-2">
  {/* Left Side: Heading */}
  <h6 className="mb-2">Select Currency</h6>

  {/* Right Side: Radio Buttons */}
  <Form className="d-flex flex-row gap-3 mb-0">
    <Form.Check
      type="radio"
      label="PKR"
      name="paymentCurrency"
      id="pmt-pkr"
      value="PKR"
      checked={currency === "PKR"}
      onChange={(e) => setCurrency(e.target.value)}
    />

    <Form.Check
      type="radio"
      label="USD"
      name="paymentCurrency"
      id="pmt-usd"
      value="USD"
      checked={currency === "USD"}
      onChange={(e) => setCurrency(e.target.value)}
    />
  </Form>
</div>

</div>
           <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
  )
}

export default PaymentModal








