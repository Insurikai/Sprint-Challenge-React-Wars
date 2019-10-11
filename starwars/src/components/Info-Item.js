import React from 'react'
import styled from 'styled-components';
import Value from './Value';

export default function Name(props){
    console.log(props);
    let Component = null;
    console.log(Array.isArray(props.values));
    if(props.type === 'Heading'){
        Component = styled.h3`
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;`;
        return (
            <Component>
                {props.text}
            </Component>
        );
    }else if(props.type ==='Values'){
        if(typeof(props.values) === "string"){
            Component = styled.p`
                width: 50%;
                font-size: 1.2rem;
                overflow-wrap: break-word;`;
            return (<Component>{props.values}</Component>);
        }else if(Array.isArray(props.values)){
            Component = styled.div`
                font-size: .6rem;
                overflow-wrap: break-word;
            `;
            return (
                <Component>
                    { 
                        props.values.map(value=>{
                            return <Value key={props.values.indexOf(value)} text={value}/>
                        })
                    }
                </Component>
            );
        }
    }
    return null;
}