import styled from "styled-components"


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
    border: 2px solid red;
    padding: 20px;
    list-style-type: none;
`