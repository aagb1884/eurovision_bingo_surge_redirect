import Header from "./header";
import styled from "styled-components";

const HowToPlay = () => {
    return ( 
        <>
        <Header />
        <div className="how-to">
        <LineHeight>
        <h1>How to play</h1>
        <ul>
            <li>Every time you click 'Get New Card' or refresh the page, you get six new Eurovision cliches.</li>
            <li>Every time you see or hear one of your cliches on screen during Eurovision, click it.</li>
            <li>The aim is to click all six.</li>
            <li>Play as many times as you want.</li>
        </ul>
        <p><a href= "/bingo">Click here to play</a></p>
        </LineHeight>
        </div>
        </>
     );
}
 
export default HowToPlay;

const LineHeight = styled.div`
    line-height: 2;
`