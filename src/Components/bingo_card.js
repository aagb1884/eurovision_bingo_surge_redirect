import EurovisionCliche from "./cliche";
import Header from "./header";
import styled from "styled-components";


const BingoCard = () => {

    const EurovisionClicheArray = [
        'ciabatta smelling hipster\'s folksy simpering',
        'power ballad delivered by woman nailed to the floor',
        'nul points',
        'graham norton gives up',
        'graham norton is genuinely surprised',
        'graham norton mentions the staging',
        'KEY CHANGE',
        'this song\'s message is simply that I am incredibly horny',
        'gratuitous wind machine',
        'weird-shaped piano',
        'the hosts\' banter makes everyone clench',
        'the international jury rep tries to announce their points just as the host interrupts them by asking for their points',
        'the international jury representative sings while everyone waits for them to stop',
        'the international jury representative is drunk',
        'here\'s the esteemed old man who does the admin',
        'has Scott Mills ever been happy?',
        'costume change',
        'Terry Wogan sardonic bitchiness compilation',
        'interpretive dance',
        'winking occurs',
        'fiddle playing intensifies',
        'running along the stage high-fiving the audience',
        'mullet',
        'big ass drums',
        'holding a note',
        'backing singer really going for it',
        'singer in green room notices they\'re on camera and pleads for votes',
        'actual tears',
        'parp',
        'traditional instrument',
        'singer looks into the camera',
        'singer brings in clenched fist',
        'dress is bigger than person wearing it',
        
    ]

    function getCliches(EurovisionClicheArray, num) {
        const shuffled = [...EurovisionClicheArray].sort(()=> 0.5 - Math.random());
        // return EurovisionClicheArray[Math.floor(Math.random()*EurovisionClicheArray.length)]};
        return shuffled.slice(0, num);
    
    }
  
    const cardArray = getCliches(EurovisionClicheArray, 6);
    

        // const newCard = cardArray.map((card) => {
        //     return <EurovisionCliche card={card} />
        //     console.log(newCard)
        // });
        



    return ( 
        <section>
            <Header />
            <H1Style>
            <h1>Your Eurovision Bingo Card</h1>
            </H1Style>
            <ButtonStyle>
            <button onClick={() => document.location.reload(true)}>Get New Card</button>
            </ButtonStyle>
                        <EurovisionCliche cardArray={cardArray} />               
        </section>
        );
}
 
export default BingoCard;

const H1Style = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    width: 200px;
    height: 100px;
    font-size: xx-large;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
`