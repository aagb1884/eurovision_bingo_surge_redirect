import './cliche.css'
import Winning from "./Winning";
import styled from "styled-components";
import ActiveButtons from "./ActiveButtons";
import {useState} from 'react';

const BingoCard = () => {
    const [isHovering, setIsHovering] = useState(false);

    const EurovisionClicheArray = [
        'ciabatta smelling hipster\'s folksy simpering',
        'power ballad delivered by woman nailed to the floor',
        'nul points',
        'graham norton gives up',
        'graham norton is genuinely surprised',
        'graham norton mentions the staging',
        'KEY CHANGE',
        'this song\'s message is simply that the singer is incredibly horny',
        'gratuitous wind machine',
        'weird-shaped piano',
        'the hosts\' banter makes everyone clench',
        'the international jury rep tries to announce their points just as the host interrupts them by asking for their points',
        'the international jury representative sings while everyone waits for them to stop',
        'the international jury representative is drunk',
        'here\'s the esteemed old man who does the admin',
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
        '12 points to our neighbours',
        'fire',
        'someone expresses the sentiment that war is bad',
        'someone expresses the sentiment that racism is bad',
        'topless men',
        'oiled topless men',
        'banging techno',
        'plausible incel',
        'hot pants',
        'mime',
        'liberties taken with folklore',
        'the italian entry not doing drugs',
        'green room despair enclave',
        'stilts',
        'rhyming "fire" with "higher"',
        'monochrome (aesthetics)',
        'monochrome (point about society)',
        'puffy sleeves',
        'sexy folklore',
        'ska',
        'gymnasts from the ceiling',
        'riverdance (mention of)',
        'riverdance (the actual dance)',
        'ANOTHER KEY CHANGE',
        'dubstep breakdown',
        'the band are related to each other',
        'lyrics like "bingy bongy boogy bongy"',
        'matching outfits',
        'running on the spot',
        'booing',
        'dancers hiding behind the singer',
        'fetish gear',
        'former junior eurovision contestant',
        "ooh you'll have someone's eye out with that",
        "saxophone",
        'goth in the matrix',
        'dance track about being possessed by the spirit of Edgar Allen Poe',
        "we're not so different, you and i",
        'surprise eye of sauron',
        'song with faintly threatening aura',
        'niche kinks being catered to',
        'human centipede',
        'incredibly localised old ladies',
        'ice skating',
        'who is this childman?',
        "everybody's talking about those kinky boots",
        "that's not in Europe",
        "audience face paint",
        "METAL",
        "tonal whiplash",
        "bit in song that goes CLAPCLAPCLAPCLAPCLAPCLAPCLAPCLAPCLAP",
        "pleather",

    ]

    function getCliches(EurovisionClicheArray, num) {
        const shuffled = [...EurovisionClicheArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const cardArray = getCliches(EurovisionClicheArray, 6);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Wrapper>
            <ListStyle>
            <div>
            <div>
            <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
            <h2>How does this work then?</h2>
            </div>

            {isHovering && (
            <div>
        <ul>
            <li>Every time you click 'Get New Card' or refresh the page, you get six new Eurovision cliches.</li>
            <li>Every time you see or hear one of your cliches on screen during Eurovision, click it.</li>
            <li>The aim is to click all six.</li>
            <li>When you have got all six, make sure the sound is on on your device and click 'Bingo'.</li>
            <li>Play as many times as you want.</li>
            <li>To remove this message either move or click away from it.</li>
        </ul>
                </div>
            )}
            </div>
            </div>
            </ListStyle>
            <button type="button" id="get-cards" className="btn" onClick={() => document.location.reload(true)}>Get New Card</button>
            <ActiveButtons cardArray={cardArray} />
            <Winning />
        </Wrapper>
    );
}

export default BingoCard;

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const H1Style = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    box-sizing: border-box;
`
const ListStyle = styled.ul`
    margin-top: 20px;
    font-size: xx-large;
    text-align: left;
    margin-bottom: 10px;
    list-style-type: none;
`

const ButtonStyle = styled.button`
 width: 100%;
    height: 100%;
    font-size: xx-large;
    font-weight: bold;
    padding: 5px;
    text-align: center;
    position: relative;
    margin: 0.1em;
    padding: 0.4em;
    border: 0;
    border-radius: 0.2em;
    background-color: #ff1361;
    color:black;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
        cursor: pointer; 
`