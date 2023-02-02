import {Component} from "react";

import css from './comment.module.css'
class Comment extends Component {

    render() {
        const {id, postId, name, body} = this.props.comment;
        return (
            <div className={css.block}>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}