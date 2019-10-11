import React from 'react'
import styled from 'styled-components';
import Info from './Info';
import Name from './Name';

export default function Character(props){
    const Component = styled.div`
        width: 30%;
        height: fit-content;
        margin-bottom: 10px;
    `;
    return(
        <Component>
            <Name name={props.characterInfo.name}/>
            <Info even={true} heading='Height' values={props.characterInfo.height}/>
            <Info even={false} heading='Mass' values={props.characterInfo.mass}/>
            <Info even={true} heading='Hair Color' values={props.characterInfo.hair_color}/>
            <Info even={false} heading='Skin Color' values={props.characterInfo.skin_color}/>
            <Info even={true} heading='Eye Color' values={props.characterInfo.eye_color}/>
            <Info even={false} heading='Birth Year' values={props.characterInfo.birth_year}/>
            <Info even={true} heading='Gender' values={props.characterInfo.gender}/>
            <Info even={false} heading='Homeworld' values={props.characterInfo.homeworld}/>
            <Info even={true} heading='Films' values={props.characterInfo.films}/>
            <Info even={false} heading='Species' values={props.characterInfo.species}/>
            <Info even={true} heading='Vehicles' values={props.characterInfo.vehicles}/>
            <Info even={false} heading='Starships' values={props.characterInfo.starships}/>
        </Component>
    );
}