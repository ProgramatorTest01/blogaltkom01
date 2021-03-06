import React, { Component } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateArticle extends Component {

    constructor(props) {
        super(props);

        this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
        this.onChangeArticleAuthor = this.onChangeArticleAuthor.bind(this);
        this.onChangeArticleContent = this.onChangeArticleContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            content: ''
        }
    }

    onChangeArticleTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeArticleAuthor(e) {
        this.setState({ author: e.target.value })
    }

    onChangeArticleContent(e) {
        ; this.setState({ content: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const article = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content,
        }

        axios.post('http://localhost:4000/articles/create-article', article)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            author: '',
            content: ''
        })
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Title">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={this.onChangeArticleTitle} />
                </Form.Group>

                <Form.Group controlId="Author">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" value={this.state.author} onChange={this.onChangeArticleAuthor} />
                </Form.Group>

                <Form.Group controlId="Content">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" value={this.state.content} onChange={this.onChangeArticleContent} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Dodaj artykuł
                </Button>

            </Form>
        </div>);
    }
}