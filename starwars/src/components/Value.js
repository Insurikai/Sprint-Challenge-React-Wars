import React from 'react'
import styled from 'styled-components';

export default function Name(props){
    const Component = styled.p`
    text-align: center;
    `;
    return (
        <Component>{props.text}</Component>
    );
}