import { Card, Container, Row, Col, ListGroup, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Step4 = () => (
  <Container>
    <p>OS2 предлагает широкий ассортимент продукции TAMEK, такой как:</p>
    <ListGroup>
    <Row>
      <Col>
        <ListGroup.Item>Томатная паста</ListGroup.Item>
        <ListGroup.Item>Перцовая паста</ListGroup.Item>
        <ListGroup.Item>Томатное пюре</ListGroup.Item>
        <ListGroup.Item>Протертые помидоры</ListGroup.Item>
        <ListGroup.Item>Зеленый горошек</ListGroup.Item>
        <ListGroup.Item>Консервированный гарнир тамек</ListGroup.Item>
        <ListGroup.Item>Консервированный вареный нут</ListGroup.Item>
        <ListGroup.Item>Консервированная вареная красная фасоль</ListGroup.Item>
        <ListGroup.Item>Гарнир ТАМЕК</ListGroup.Item>
        <ListGroup.Item>Сарма из виноградных листьев тамек</ListGroup.Item>
      </Col>
      <Col>
        <ListGroup.Item>Жареные баклажаны ломтиками тамек</ListGroup.Item>
        <ListGroup.Item>Красная фасоль в подсолнечном масле тамек</ListGroup.Item>
        <ListGroup.Item>Жареный перец тамек</ListGroup.Item>
        <ListGroup.Item>Маринованный острый перец халапеньо ломтиками тамек</ListGroup.Item>
        <ListGroup.Item>Маринованный острый перец тамек</ListGroup.Item>
        <ListGroup.Item>Маринованный перец чили тамек</ListGroup.Item>
        <ListGroup.Item>Корнишоны маринованные тамек</ListGroup.Item>
        <ListGroup.Item>Огурцы маринованные тамек</ListGroup.Item>
        <ListGroup.Item>Овощи маринованные тамек</ListGroup.Item>
      </Col>
      </Row>
    </ListGroup>
    <Button className="m-5 btn-success">
                <NavLink className='nav-link' to="/items">Перейти к продукции</NavLink>
              </Button>
  </Container>
);

export default Step4;
