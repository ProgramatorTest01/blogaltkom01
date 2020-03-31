import React, { Component } from "react"


export default class ArticleWelcome extends Component {



    render() {
        return (
            <div className="article-box">
                <h2>{this.props.obj.title}</h2>
                <h3>{this.props.obj.author}</h3>
                <p>{this.props.obj.content}</p>
            </div>)
    }

}