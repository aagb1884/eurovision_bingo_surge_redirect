import soundfile from "../audio/euphoria_excerpt.mp3";
import { useRef, useState } from "react";

const Winning = () => {

    const [isActive, setIsActive] = useState(false)
    // const [play, setPlay] = useState(false)
    const audioRef = useRef(new Audio(soundfile))

    function play() {
        // is it active? If it is set it to inactive and stop playback
        if(isActive) {
            setIsActive(false)
            audioRef.current.pause();
        }
               // else set to active and play
        else {
            setIsActive(true)
            audioRef.current.play()
        }
    }
    // const buttonActivity() = {
    // if() {
    //  setIsActive(true)
    // }
    //  else {
    //     setIsActive(false)
    //  }
    // }

// function disableButton() {
//     document.getElementById("bingo").disabled = true;
// }




// get grid buttons working then set button below to be disabled until all six buttons are pressed/active

    return ( 
        <div className='bingo'>
            <audio id="audio" src={soundfile}>BINGO</audio>
            <input 
                type="button" 
                id={isActive ? "bingo" : "inactive-bingo"} 
                value="BINGO" 
                onClick={play}
                disabled="true"></input>
        </div>
    );
    }


export default Winning;

