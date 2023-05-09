import soundfile from "../audio/euphoria_excerpt.mp3";

const Winning = () => {

    function play() {
                var audio = document.getElementById("audio");
                audio.play();

              }

function disableButton() {
    document.getElementById("bingo").disabled = true;
}
// get grid buttons working then set button below to be disabled until all six buttons are pressed/active

    return ( 
        <div className='bingo'>
            <audio id="audio" src={soundfile}>BINGO</audio>
            <input type="button" id="bingo" value="BINGO" onClick={play}></input>
             </div>
    );
    }


export default Winning;

