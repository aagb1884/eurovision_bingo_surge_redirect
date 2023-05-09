// import React, {useRef } from "react";
import soundfile from "../audio/euphoria_excerpt.mp3";

const Winning = () => {

//    const audio = useRef(null)
//    const playAudio = () => {
//     console.log(audio.current);
//     audio.current.play();
//    }
    // const Bingo = () => {
    //     const [play] = useSound(audio);


    function play() {
                var audio = document.getElementById("audio");
                audio.play();

              }

// const audioElement = new Audio()
// audioElement.src = audio
// const playAudio = audioElement.play()
// } 





    return ( 
        <div className='bingo'>
            {/* <div id="display" onClick={playAudio}></div> */}
            <audio id="audio" src={soundfile}>BINGO</audio>
            <input type="button" id="bingo" value="BINGO" onClick={play}></input>
            {/* <button type="button" id="bingo" class="bingo-btn" onClick={playAudio}>BINGO!</button> */}
             </div>
    );
    }



export default Winning;


    
 // const audio = new Audio("./audio/euphoria_excerpt.mp3");
    // const audioButtons = document.querySelectorAll('.bingo');
    
    // audioButtons.forEach(button => {
    //   button.addEventListener("click", () => {
    //     audio.play();
    //   });
    // });

    // function play() {
    //     var audio = document.getElementById("audio");
    //     audio.play();
    //   }