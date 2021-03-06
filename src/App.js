import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateArticle from "./components/admin/create-article.component";
import EditArticle from "./components/admin/edit-article.component";
import ArticleList from "./components/admin/article-list.component";
import About from "./components/articles/about";
import Login from "./components/login/login";
import Profile from "./components/login/profile";
import Welcome from "./components/articles/welcome";
import Contact from "./components/articles/contact";
import ArticlesIntro from "./components/articles/articles-introduction";
import AdminLogin from "./components/admin/admin-login";

// import Navigation from './components/login/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navigation /> 
          </Container>
        </Navbar>
      </header> */}

          <Container>
            <Row>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route path="/create-article" component={CreateArticle} />
                    <Route path="/edit-article/:id" component={EditArticle} />
                    <Route path="/article-list" component={ArticleList} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/articles" component={ArticlesIntro} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={AdminLogin} />
                  </Switch>
                </div>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
