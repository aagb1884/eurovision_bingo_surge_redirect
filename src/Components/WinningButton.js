import React, { useState } from 'react';
import soundfile from "../audio/euphoria_excerpt.mp3";

const WinningButton = () => {

  const [buttonsActive, setButtonsActive] = useState(Array(6).fill(false));
  const [playSoundEffect, setPlaySoundEffect] = useState(false);

  const handleButtonClick = (index) => {
    const newButtonsActive = [...buttonsActive];
    newButtonsActive[index] = !newButtonsActive[index];
    setButtonsActive(newButtonsActive);
  };

  const isAllButtonsActive = buttonsActive.every((isActive) => isActive);

  const handlePlaySoundEffect = () => {
    if (isAllButtonsActive) {
      setPlaySoundEffect(true);
    }
  };

  const handleSoundEffectEnd = () => {
    setPlaySoundEffect(false);
  };

  return (
    <div>
      {buttonsActive.map((isActive, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          disabled={!isActive && !isAllButtonsActive}
        >
          Button {index + 1}
        </button>
      ))}
      <button onClick={handlePlaySoundEffect} disabled={!isAllButtonsActive}>
        Play Sound Effect
      </button>
      {playSoundEffect && (
        <audio src={soundfile} autoPlay onEnded={handleSoundEffectEnd} />
      )}
    </div>
  );
}

export default WinningButton;