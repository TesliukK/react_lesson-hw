import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

const App = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div className="App">
            <Form/>
            <hr/>
            {loading&&<h1>loading</h1>}
            <Cars/>
        </div>
    );
}

export default App;
