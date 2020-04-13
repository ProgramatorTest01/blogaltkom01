import React, { Component } from "react";
import axios from "axios";
import ArticleWelcome from "./welcome-articles";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/articles/")
      .then(res => {
        this.setState({
          articles: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.articles.map((res, i) => {
      return <ArticleWelcome obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Container>
      <div>
      <Container>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navigation />
            </Container>
          </Navbar>
        </header>
      </Container>
        <div className="wrapper">
        <Container>
          <main>
            <div>
              <h1>
                To będzie powitanie i kilka słów o blogu - co to jest, z czym
                sie je i dlaczego!
              </h1>
            </div>
            <article>
              <div>{this.dataTable()}</div>
            </article>
          </main>
          <footer>
            Artur &amp; Grzegorz 2020. Wszelkie prawa wyłączone :-)
          </footer>
        </Container>        
        </div>
      </div>
      </Container>
    );
  }
}
