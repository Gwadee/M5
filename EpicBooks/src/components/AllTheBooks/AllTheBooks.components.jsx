import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import horrorBooks from "../../books/horror.json";
import "./AllTheBooks.style.css";

const AllTheBooks = () => {
  return (
    <Container>
      <h2 className="my-4">Horror Books</h2>
      <Row>
        {horrorBooks.map((book) => (
          <Col key={book.asin} xs={6} sm={4} md={3} className="mb-4">
            <Card className="AllTheBooks">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Price: ${book.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
