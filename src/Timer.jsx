import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && totalSeconds > 0) {
      intervalId = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      clearInterval(intervalId);
      console.log("Time's up!");
    }

    // Clear interval when unmounting component or timer reaches 0
    return () => clearInterval(intervalId);
  }, [isActive, totalSeconds]);

  const handleStart = () => {
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;
    const total = minutes * 60 + seconds;
    setTotalSeconds(total);
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTotalSeconds(0);
    setInputMinutes('');
    setInputSeconds('');
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      {totalSeconds > 0 && (
        <div className="timer">{`${Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`}</div>
      )}
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
      
      <button onClick={handleStart} disabled={isActive || (!inputMinutes && !inputSeconds)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={() => handleClick('7')}>
    <span   className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start
    </span>
  </button>
  <button onClick={handlePause} disabled={!isActive} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={() => handleClick('7')}>
    <span   className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Pause
    </span>
  </button><button onClick={handleReset} disabled={!isActive} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={() => handleClick('7')}>
    <span   className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Reset
    </span>
  </button>
      
     
    </div>
  );
}

export default Timer;
