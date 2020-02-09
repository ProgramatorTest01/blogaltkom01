import React from 'react';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            about: '',
            id: null,
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <h1>Book title: {this.state.title} Book ID: {this.state.id} What is book about: {this.state.about}</h1>
                <p>Enter book title:</p>
                <input
                    type='text'
                    name='title'
                    onChange={this.myChangeHandler}
                />

                <p>Enter book ID:</p>
                <input
                    type='text'
                    name='id'
                    onChange={this.myChangeHandler}
                />

                <p>Enter what is book about:</p>
                <input
                    type='text'
                    name='about'
                    onChange={this.myChangeHandler}
                />


            </form>


        );
    }
}