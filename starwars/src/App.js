import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterList, setCharacterList] = useState({});
  let characters = null;
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/?format=json').then((results)=>{
      setCharacterList(results);
    }).catch(console.log);
  },[]);
  console.log(!(typeof(characterList.data)==='undefined'));
  console.log(characterList.data);
  if(!(typeof(characterList.data)==='undefined')){
    characters = characterList.data.results.map(character=>{
      return <Character characterInfo={character}/>
    });
  }
  const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: space-evenly;
      box-sizing: border-box;`;
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="container">
        {characters}
      </Container>
    </div>
  );
}

export default App;
