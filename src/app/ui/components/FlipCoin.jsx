
import { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import coinPKR from "@/assets/coinPKR.png"
import coinUSDT from "@/assets/coinUSDT.png"


function FlipCoin(props) {
    const [isFlipped, setIsFlipped] = useState(false);
   const [modalShow, setModalShow] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
   <>
    {...props}

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
  
    </div>
       </>
  )
}

export default FlipCoin
