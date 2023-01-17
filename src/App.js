import './App.css';
import {Simpson_family} from "./components/Simpson_family/Simpson_family";
import {Homer} from "./components/homer/homer";
import Bart from "./components/bart/bart";
import Marge from "./components/Marge/Marge";
import Lisa from "./components/lisa/lisa";

const App = () => {
    return (
        <div className="App">
            <Simpson_family />
            <Homer />
            <Marge/>
            <Bart/>
            <Lisa/>
        </div>
    )
        ;
}

export default App;
