import Footer from "./modulos/footer";
import Navbar from "./modulos/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Index() {
  return<div>
    <Navbar />
    Bem Vindos
    <Container>
      <Row>
        <Col className="bg-danger">1 of 2</Col>
        <Col className="bg-primary">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-success">1 of 3</Col>
        <Col className="bg-warning">2 of 3</Col>
        <Col className="bg-info">3 of 3</Col>
      </Row>
    </Container>
    <Footer /> 
  </div>      
}