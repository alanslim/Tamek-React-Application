import { Card, Container, Row, Col } from "react-bootstrap";

const Step2 = () => (
  <Container className="d-flex">
    <div>
      <img src="./tamek1.png" className="w-100" />
    </div>
    <div>
      <p>
      <div style={{ display: "inline-block" }}>
        <img src="./tamek.png"/>
      </div>
        это турецкая фирма, производящая пищевую продукцию основанная 31 марта
        1955 года в городе Бурса. TAMEK является пионером Турецкого пищевого
        сектора. Это первый Турецкий производитель томатной пасты, кетчупа и
        многих других консервированных продуктов. Она специализируется на
        выпуске такой продукции как
        <span>соки, консервные изделия, и томатные пасты</span>
      </p>
    </div>
  </Container>
);

export default Step2;
