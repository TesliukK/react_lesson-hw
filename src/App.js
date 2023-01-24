import {CommentForm, Comments} from "./components";
import {useEffect, useState} from "react";
import {commentsService} from "./services";

import "../src/components/App.css"

const App = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div className="App">
            <CommentForm setComments = {setComments}/>
            <Comments comments = {comments}/>
        </div>
    );
}

export default App;
