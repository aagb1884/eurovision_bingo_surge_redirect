import EurovisionCliche from "./cliche";
import Winning from "./winning";
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
        'green room despaire enclave',
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
        'made-up words for lyrics (eg. bingy bongy boogy bongy)',
        'matching outfits',
        'running on the spot',
        'booing',
        
        
        
        
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
            <br />
             </H1Style>
             <PStyle>
            <p>Need Help? <a href="/howtoplay">Click here.</a></p>
            <br />
            </PStyle>
            <button type="button" id="get-cards" class="btn" onClick={() => document.location.reload(true)}>Get New Card</button>
                        <EurovisionCliche cardArray={cardArray} />    
                        <Winning />         
        </section>
        );
}
 
export default BingoCard;

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
`