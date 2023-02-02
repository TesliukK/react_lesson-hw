import {Component} from "react";

import {postService} from "../../services";

import {Post} from "../Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                <div>{this.state.posts.map(post => <Post key={post.id} post={post}/>)}</div>
            </div>
        )
    }
}

export {
    Posts
}