import React from 'react'
import styled from 'styled-components';

export default function Name(props){
    const Component = styled.h1`
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #111;
        color: white;
    `;
    return (
        <Component>{props.name}</Component>
    );
}