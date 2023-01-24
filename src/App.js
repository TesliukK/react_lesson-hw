import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

const App = () => {
    return (
        <div className="App">
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
}

export default App;
