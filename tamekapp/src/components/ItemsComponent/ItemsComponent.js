import React from "react";
import { Card, Container, Row, Col, Table, Button } from "react-bootstrap";
import products from "./products";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../App.scss";

const ItemsComponent = () => {
  let location = useLocation();
  console.log("локация: " + location.pathname);

  let loc = location.pathname.split("/");
  let id = loc[2];
  console.log(id);

  if (id) {
    let item = products.find((product) => product.id == id);

    return (
      <div className="bground">
        <Container className="mt-5 pb-3 text-center">
          <Row>
            <Col key={item.id} sm={12} md={12} lg={12}>
              <Card className="mt-5 shadow-lg justify-content-center">
                <div>
                  <Card.Img className="w-25" src={`.${item.image}`} />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button className="mt-2 btn-success ">
                    <NavLink className="nav-link" to="/items">
                      Вернуться к продуктам
                    </NavLink>
                  </Button>
                </Card.Body>
              </Card>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Свойство</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Масса нетто</td>
                    <td>{item.props.mass_nett}</td>
                  </tr>
                  <tr>
                    <td>Произведено в</td>
                    <td>{item.props.made_in}</td>
                  </tr>
                  <tr>
                    <td>Код ТНВЭД</td>
                    <td>{item.props.code_ind}</td>
                  </tr>
                  <tr>
                    <td>Количество штук в упаковке</td>
                    <td>{item.props.amount_package}</td>
                  </tr>
                  <tr>
                    <td>Срок годности</td>
                    <td>{item.props.exp_date}</td>
                  </tr>
                  <tr>
                    <td>Как хранить</td>
                    <td>{item.props.how_store}</td>
                  </tr>
                  <tr>
                    <td>Температура хранения</td>
                    <td>{item.props.temperature_storage}</td>
                  </tr>
                  <tr>
                    <td>Состав</td>
                    <td>{item.props.compound}</td>
                  </tr>
                  <tr>
                    <td>Калорийность</td>
                    <td>{item.props.calories}</td>
                  </tr>
                  <tr>
                    <td>Б/Ж/У</td>
                    <td>{item.props.pfc}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="bground">
        <Container className="mt-5 pb-3">
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4}>
                <Card className="mt-5 shadow-bg-dark">
                  <Card.Img className="w-100" src={product.image} style={{backgroundColor: '#f6ebeb'}}/>
                  <Card.Body className="text-center" style={{ fontFamily: 'Roboto', backgroundColor: '#ffefd5' }}>
                    <Card.Title>{product.name}</Card.Title>
                    <Button className="mt-2 btn-success ">
                      <NavLink className="nav-link" to={`${product.id}`}>
                        Подробнее
                      </NavLink>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default ItemsComponent;
