import {Component} from "react";

import css from './post.module.css'

class Post extends Component {
    render() {
        const {id, title, body} = this.props.post
        return(
            <div className={css.block}>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Post
}