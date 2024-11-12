import React from "react";
import Container from "react-bootstrap/Container";

// style //
import "./MyFooter.style.css";

const MyFooter = () => {
  return (
    <footer className="bg-dark">
      <Container expand="lg" className="">
        EpicBook Copyright 2024{" "}
      </Container>
    </footer>
  );
};

export default MyFooter;
