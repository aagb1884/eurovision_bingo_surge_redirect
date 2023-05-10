import './cliche.css'
import Header from "./Header";
import styled from "styled-components";
import ActiveButtons from "./ActiveButtons";

const BingoCard = () => {

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




    ]

    function getCliches(EurovisionClicheArray, num) {
        const shuffled = [...EurovisionClicheArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);

    }

    const cardArray = getCliches(EurovisionClicheArray, 6);



    return (
        <Wrapper>
            <Header />
            <H1Style>
                Your Eurovision Bingo Card
            </H1Style>
            <PStyle>
                Need Help? <a href="/howtoplay">Click here.</a>
            </PStyle>
            <button type="button" id="get-cards" className="btn" onClick={() => document.location.reload(true)}>Get New Card</button>
            {/* <EurovisionCliche cardArray={cardArray} />     */}
            <ActiveButtons cardArray={cardArray} />
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
const PStyle = styled.p`
    margin-top: 20px;
    font-size: xx-large;
    text-align: center;
    margin-bottom: 10px;
`

