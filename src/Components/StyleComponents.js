import styled from "styled-components"

export const GridBorder = styled.div`
    display: grid;
    height: 100vh;
    color: white;
    grid-template-rows: 0.5fr 0.5fr ;
    grid-template-areas:
    "content content content"
    "content content content";
    text-align: center;
    grid-gap: 0.25rem;
    background-color: red;
    border: 2px solid white;
    padding: 20px;
`

export const Grid = styled.li`
    display: grid;
    height: 100vh;
    color: red;
    grid-template-rows: 0.5fr 0.5fr ;
    grid-template-areas:
    "content content content"
    "content content content";
    text-align: center;
    grid-gap: 0.25rem;
    background-color: white;
    border: 2px solid ridge;
    padding: 20px;
`