import React from 'react'
import styled from 'styled-components';
import InfoItem from './Info-Item';

export default function Info(props){
    let Component = undefined;
    if(props.even){
        Component = styled.div`
            background-color: #555; 
            width: 100%;
            display: flex;
            padding: 5px;
        `;
    }else{
        Component = styled.div`
            background-color: #bbb;
            width: 100%;
            display: flex;
            padding: 5px;
        `;
    }
    return (
        <Component>
            <InfoItem type="Heading" text={props.heading}/>
            <InfoItem type="Values" values={props.values}/>
        </Component>
    );
}