import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [showInputs, setShowInputs] = useState(true);
  const [buttonText, setButtonText] = useState('Start');

  useEffect(() => {
    let intervalId;
    if (isActive && totalSeconds > 0) {
      intervalId = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      clearInterval(intervalId);
      console.log("Time's up!");
      setShowInputs(true); // Show inputs again when timer completes
      setButtonText('Start'); // Reset button text to 'Start' when timer completes
    }

    // Clear interval when unmounting component or timer reaches 0
    return () => clearInterval(intervalId);
  }, [isActive, totalSeconds]);

  const startTheDamnCountdown = () => {
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;
    const total = minutes * 60 + seconds;
    setTotalSeconds(total);
    setIsActive(true);
    setShowInputs(false); // Hide inputs when countdown starts
    setButtonText('Pause'); // Change button text to 'Pause' when countdown starts
  };

  const pauseTheInevitable = () => {
    setIsActive(false);
    setButtonText('Resume'); // Change button text to 'Resume' when countdown is paused
  };

  const stopTheMadness = () => {
    setIsActive(false);
    setTotalSeconds(0);
    setInputMinutes('');
    setInputSeconds('');
    setShowInputs(true); // Show inputs when timer is stopped
    setButtonText('Start'); // Reset button text to 'Start' when timer is stopped
  };

  const resumeTheFutileAttempt = () => {
    startTheDamnCountdown(); // Resume countdown from where it was paused
  };

  const resetTheFutileAttempt = () => {
    setIsActive(false);
    setTotalSeconds(0);
    setInputMinutes('');
    setInputSeconds('');
    setShowInputs(true); // Show inputs when timer is reset
    setButtonText('Start'); // Reset button text to 'Start' when timer is reset
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      {totalSeconds > 0 && (
        <div className="timer">{`${Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`}</div>
      )}
      {showInputs && ( // Conditionally render inputs based on showInputs state
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <input
            className="timer"
            style={{ backgroundColor: 'transparent', border: 'none', color: 'orange', width: '125px' }}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            placeholder="00"
            disabled={isActive}
          />
          <span className="timer">:</span>
          <input
            className="timer"
            style={{ backgroundColor: 'transparent', border: 'none', color: 'orange', width: '140px' }}
            type="number"
            value={inputSeconds}
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={(e) => setInputSeconds(e.target.value)}
            placeholder="00"
            disabled={isActive}
          />
        </div>
      )}
      
      {(buttonText === 'Start' || buttonText === 'Resume') && (
        <button onClick={buttonText === 'Start' ? startTheDamnCountdown : resumeTheFutileAttempt} disabled={isActive || (!inputMinutes && !inputSeconds)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {buttonText}
          </span>
        </button>
      )}

      {buttonText === 'Pause' && (
        <button onClick={pauseTheInevitable} disabled={!isActive} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Pause
          </span>
        </button>
      )}

      <button onClick={stopTheMadness} disabled={!isActive} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Stop
        </span>
      </button>

      <button onClick={resetTheFutileAttempt} disabled={isActive} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Reset
        </span>
      </button>
      
    </div>
  );
}

export default Timer;
