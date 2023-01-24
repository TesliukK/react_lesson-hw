import {CommentForm, Comments} from "./components";
import {useEffect, useState} from "react";
import {commentsService} from "./services";

import "../src/components/App.css"

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div className="App">
            <CommentForm setUsers = {setUsers}/>
            <Comments users = {users}/>
        </div>
    );
}

export default App;
