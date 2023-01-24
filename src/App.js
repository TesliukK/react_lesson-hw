import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {userServices} from "./services";

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div className="App">
            <UserForm setUsers = {setUsers}/>
            <hr/>
            <Users users = {users}/>
        </div>
    );
}

export default App;
