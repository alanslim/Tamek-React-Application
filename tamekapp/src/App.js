import React from "react";
import ScrollStory from "./components/ScrollStoryComponent/ScrollStoryComponent";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemsComponent from "./components/ItemsComponent/ItemsComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
const App = () => {
  return (
    <Router basename="/tamek">
      <Navbar expand="lg" className="tamek-green" fixed="top">
        <Container>
          <Navbar.Brand className="tamek-logo">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="nav-link" to="/">
                  Основная страница
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/items">
                  Продукция бренда
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="https://os2.kz">
                Назад на os2.kz
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ScrollStory />} />
        <Route path="/items" element={<ItemsComponent />} />
        <Route path="/items/:id" element={<ItemsComponent />} />
      </Routes>

      <Navbar className="navbar tamek-green text-center justify-content-center pt-3">
        <div className="container-fluid text-center justify-content-center">
          <div>
            <a className="navbar-brand" href="https:www.os2.kz">
              <Image src="./logopng.png" className="widthImg"></Image>
            </a>
          </div>
        </div>
      </Navbar>
    </Router>
  );
};

export default App;
