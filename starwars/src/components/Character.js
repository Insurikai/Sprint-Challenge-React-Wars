import React from 'react'
import styled from 'styled-components';

export default (props) =>{
    const Char = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 300px;
    height: 500px;`;
    return(
        <Char/>
    );
}