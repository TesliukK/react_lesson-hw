import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {userServices} from "./services";

import "../src/components/App.css"

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div className="App">
            <UserForm setUsers = {setUsers}/>
            <Users users = {users}/>
        </div>
    );
}

export default App;
