import React,{useState} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const output = {
    "count": 87,
    "next": "https://swapi.co/api/people/?format=json&page=2",
    "previous": null,
    "results": [{
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": ["https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": ["https://swapi.co/api/species/1/"],
        "vehicles": ["https://swapi.co/api/vehicles/14/",
            "https://swapi.co/api/vehicles/30/"
        ],
        "starships": ["https://swapi.co/api/starships/12/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.co/api/people/1/"
    }]
}
  const [characterList, setCharacterList] = useState(output);
  // axios.get('https://swapi.co/api/people/?format=json').then(setCharacterList).catch(console.log);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        output.results.map(element=><Character characterInfo={element}/>)
      }
    </div>
  );
}

export default App;
