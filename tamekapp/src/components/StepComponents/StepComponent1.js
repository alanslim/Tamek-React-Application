import tamekImage from "../../tamek.png";
import { Card, Container, Row, Col } from "react-bootstrap";

const Step1 = () => (
  <Container>
    <h1>
      <span className="os2">OS2</span> представляет
    </h1>
    <h2>Впервые в Казахстане:</h2>
    <img src={tamekImage} />
  </Container>
);

export default Step1;
