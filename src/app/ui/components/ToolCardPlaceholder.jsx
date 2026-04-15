"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Image from "next/image";


const ToolCardPlaceholder = () => {
  return (

      <Card className="m-3" style={{ width: "18rem" }}>
        <div
          className="w-full max-w-md mx-auto bg-light rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3"
          style={{ aspectRatio: "1 / 1", maxHeight: "200px" }}
        >
          <Image
            src="https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/7100_75%20(1).png?t=2025-01-26T12%3A03%3A29.187Z"
            alt="Responsive Image"
            width={600}
            height={600} // Adjust height to maintain square ratio
            sizes="100vw"
            style={{
                width: "60%",
                height: "60%",
              objectFit: "cover", // Ensures the image fills the container proportionally
            }}
           
            priority
          />
        </div>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
  );
};

export default ToolCardPlaceholder;
