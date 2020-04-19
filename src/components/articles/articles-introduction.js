import React, { Component } from "react";
import axios from "axios";
import ArticleWelcome from "./welcome-articles";
import Navigation from "./../login/navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

export default class ArticlesIntro extends Component {
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
        <div className="wrapper">
          <main>
            <div>
              <h1>Artykuły - recenzje! Wprowadzenie!</h1>
            </div>
            <article>
              <div>{this.dataTable()}</div>
            </article>
            <article>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="./../../bookcovers/kapitanAlartriste.jpg"
                  alt="Alatriste"/>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus...
                  </p>
                </Media.Body>
              </Media>
              <Button variant="light">Rozwiń</Button> 
              
            </article>
            <article>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="./../../bookcovers/koniecSwiataSzwolezerow.jpg"
                  alt="szwolezerowie"/>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus...
                  </p>
                </Media.Body>
              </Media>
              <Button variant="light">Rozwiń</Button> 
            </article>
            <article>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="./../../bookcovers/walczylemPodNiebem.jpg"
                  alt="europaiafryka"/>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus...
                  </p>
                </Media.Body>
              </Media>
              <Button variant="light">Rozwiń</Button> 
            </article>
            <article>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="./../../bookcovers/odSniegowArktyki.jpg"
                  alt="arktykanormandia"/>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus...
                  </p>
                </Media.Body>
              </Media>
              <Button variant="light">Rozwiń</Button> 
            </article>
            <article>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="./../../bookcovers/asyLotnictwa.jpg"
                  alt="asylotnictwa"/>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus...
                  </p>
                </Media.Body>
              </Media>
              <Button variant="light">Rozwiń</Button> 
            </article>
          </main>
          <footer>
            Artur &amp; Grzegorz 2020. Wszelkie prawa wyłączone :-)
          </footer>
        </div>
        </Container>
      </div>
      </Container>
    );
  }
}
//bbbbb