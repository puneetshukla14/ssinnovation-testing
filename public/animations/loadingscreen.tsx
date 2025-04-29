import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true); // Transition after animation
    }, 5000); // Duration matches the animation time
    return () => clearTimeout(timer);
  }, []);

  if (showMainPage) {
    return <MainPage />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "black", // Solid black background
        overflow: "hidden",
      }}
    >
      {/* 3D Lighting Effect */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8))",
          opacity: 0.7,
          filter: "blur(8px)",
        }}
      ></div>

      {/* Main Text with Bold Effect */}
      <h1
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: "12vmin",
          fontWeight: "900",
          textAlign: "center",
          background: "linear-gradient(to right, rgb(0, 255, 255), rgb(53, 53, 240))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "netflix_style 4.5s ease-out, text3D 3s ease-in-out infinite",
          outline: "none",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        SSI INNOVATION
      </h1>

      {/* Optional Background Motion Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background: "url('https://www.transparenttextures.com/patterns/diamond-squares.png') repeat",
          animation: "moveBackground 20s linear infinite",
        }}
      ></div>

      <style jsx>{`
        @keyframes netflix_style {
          0% {
            text-shadow: 0px 0px transparent, 100px 100px #aaa;
            color: #f3f3f3;
            transform: scale(1.5, 1.5);
          }
          10% {
            text-shadow: 1.5px 1.5px #aaa;
            color: #f3f3f3;
            transform: scale(1.5, 1.5);
          }
          15% {
            color: #f3f3f3;
          }
          20% {
            color: #e90418;
            text-shadow: none;
            transform: scale(1.1, 1.1);
          }
          75% {
            opacity: 1;
          }
          80% {
            opacity: 0;
            color: #e90418;
            transform: scale(0.85, 0.9);
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes text3D {
          0% {
            transform: scale(1) translateZ(0);
          }
          50% {
            transform: scale(1.1) translateZ(50px);
          }
          100% {
            transform: scale(1) translateZ(0);
          }
        }

        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 500px 500px;
          }
        }
      `}</style>
    </div>
  );
};

const MainPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        color: "#fff",
        fontSize: "2rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Welcome to the Main Page!
    </div>
  );
};

export default LandingPage;
