import logo from './logo.svg';
import './App.css';
import RickAndMorty from "./components/rick_and_morty/rick_and_morty";

const App = () => {
    return (
        <div className="App">
            <RickAndMorty
                id={1}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />
            <RickAndMorty
                id={2}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
            <RickAndMorty
                id={3}
                name={'Summer Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />
            <RickAndMorty
                id={4}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />
            <RickAndMorty
                id={5}
                name={'Jerry Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
            />
            <RickAndMorty
                id={6}
                name={'Abadango Cluster Princess'}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
            />
        </div>
    );
}

export default App;
