"use client";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import unknIcon from "@/assets/gifgaf.gif";
import Placeholder from "react-bootstrap/Placeholder";
 
const ToolCard = ({ prcpkr, prcusdt, binding, title, rntbtn, toolIcon }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="m-3 text-light bg-dark" style={{ width: "16rem" }}>
      {/* Image Container */}

      <div
        className="w-full max-w-md mx-auto rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-2 mt-3"
        style={{
          aspectRatio: "1 / 1",
          maxHeight: "150px",
          backgroundColor: "#fdfefe",
        }}
      >
       {/* {!isLoaded && (
        <Image
          src={unknIcon}
          alt="Placeholder"
          unoptimized
          width={600}
          height={600}
          sizes="100vw"
          style={{
            width: "95%",
            height: "95%",
            objectFit: "cover",
            position: "absolute",
          }}
          priority
        />
      )} */}

        {/*image Placeholder */}
           {!isLoaded && (
          <div className="placeholder-glow">
            <div className="rounded-circle bg-secondary placeholder vw-100 vh-100"></div>
          </div>
        )}

      {/* Actual Image */}
      <Image
        src={toolIcon && toolIcon.length ? toolIcon : unknIcon}
        alt="Responsive Image"
        unoptimized
        width={600}
        height={600}
        sizes="100vw"
        style={{
          width: "95%",
          height: "95%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0, // Hide until loaded
          transition: "opacity 0.3s ease-in-out",
        }}
        onLoad={() => setIsLoaded(true)} // When image loads, show it
        priority
      />
    
      </div>

      {/* Card Body */}
      <Card.Body>
        {/* Title Section */}
        {title && title.length ? (
          <Card.Title>{title}</Card.Title>
        ) : (
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        )}

        {/* Binding and Price Section */}
        <Card.Text>
          {/* Binding Time */}
          {binding && binding.length ? (
            `Binding Time: ${binding} hours`
          ) : (
            <Placeholder animation="glow">
              <Placeholder xs={7} />
            </Placeholder>
          )}
          <br />
          {/* Tool Price */}
          {prcpkr && prcusdt && prcpkr.length && prcusdt.length ? (
            `Tool Price: ${prcpkr} PKR | ${prcusdt} USDT`
          ) : (
            <Placeholder animation="glow">
              <Placeholder xs={11} />
            </Placeholder>
          )}
        </Card.Text>

        {/* Button Section */}
        {rntbtn ? (
          <Button variant="primary">Book Now</Button>
        ) : (
          <Placeholder animation="glow">
            <Placeholder.Button variant="primary" xs={5} />
          </Placeholder>
        )}
      </Card.Body>
    </Card>
  );
};

export default ToolCard;
