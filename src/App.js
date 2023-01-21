import {useEffect, useState} from "react";

const App = () => {
  const [launches, setLaunches] = useState([])
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => setLaunches(value))
  })
  return (
    <div className="App">
      {launches.map(item => {
        return (
            <div>
              flight_number: {item.flight_number} - mission_name: {item.mission_name}
            </div>
        )
      })}
    </div>
  );
}

export default App;
