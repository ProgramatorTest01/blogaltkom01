import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateArticle from "./components/create-article.component";
import EditArticle from "./components/edit-article.component";
import ArticleList from "./components/article-list.component";
import About from "./components/about";
import Welcome from "./components/welcome";


function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Czytać warto! Blog o książkach i nie tylko...
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} className="nav-link">
                  Witaj!
                </Link>
              </Nav>
              <Nav>
                <Link to={"/about"} className="nav-link">
                  O mnie
                </Link>
              </Nav>
              <Nav>
                <Link to={"/create-article"} className="nav-link">
                  Dodaj artykuł
                </Link>
              </Nav>
              <Nav>
                <Link to={"/article-list"} className="nav-link">
                  Lista artykułów
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Welcome} />
                <Route path='/about' component={About} />
                <Route path="/create-article" component={CreateArticle} />
                <Route path="/edit-article/:id" component={EditArticle} />
                <Route path="/article-list" component={ArticleList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;