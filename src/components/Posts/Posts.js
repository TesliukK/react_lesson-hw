import {Component} from "react";
import {postService} from "../../services";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {arr: []}
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({arr: [...data]}))
    }

    render() {
        return (
            <div>
                <div>{}</div>
            </div>
        )
    }
}

export {
    Posts
}