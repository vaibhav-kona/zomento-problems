import React, { useEffect, useState } from 'react';

// initially start button, timer value is 10
// when pause, show resume button 
// When stop(reset to 10)
// Increase 10


// State
// ========
// start -> pause -> resume
// timer 


// Final state
// ===========
// Timer should be stop automatically when it is 0

enum TIMER_STATUS {
  START = 'start',
  PAUSE = 'pause',
  RESUME = 'resume',
  RESET = 'reset',
}

const INITIAL_TIMER_VALUE = 10;
const TIMER_INCREMENT_VALUE = 10;
const TIMER_GAP = 1000 // in milleseconds;

function Timer() {

  const [timerValue, setTimerValue] = useState(INITIAL_TIMER_VALUE);
  const [timerStatus, setTimerStatus] = useState(TIMER_STATUS.RESET);

  let timerInterval: NodeJS.Timeout | null = null;

  function updateTimer() {
    if (timerValue >= 0) {
      setTimerValue(timerValue - 1);
    } else {
      resetTimer();
    }
  }

  let timeout: any = null;

  useEffect(() => {
    if (timerStatus === TIMER_STATUS.START) {
      if (timerValue >= 0) {
        timeout = setTimeout(() => {
          setTimerValue(timerValue - 1);
        }, 1000);
      } else {
        setTimerStatus(TIMER_STATUS.RESET);
        setTimerValue(INITIAL_TIMER_VALUE);
      }
    }
  }, [timerValue, timerStatus]);

  const startTimer = () => {
    setTimerStatus(TIMER_STATUS.START);
  }

  const pauseTimer = () => {
    setTimerStatus(TIMER_STATUS.PAUSE);
  }

  const resumeTimer = () => {
    setTimerStatus(TIMER_STATUS.START);
  }

  const resetTimer = () => {
    setTimerStatus(TIMER_STATUS.RESET);
    clearTimeout(timeout);
    setTimerValue(INITIAL_TIMER_VALUE);
  }

  const incrementTimer = () => {
    setTimerStatus(TIMER_STATUS.PAUSE);
    clearTimeout(timeout);
    setTimerValue(timerValue + TIMER_INCREMENT_VALUE);
    if (timerStatus === TIMER_STATUS.START) {
      setTimerStatus(TIMER_STATUS.START);
    }
  }


  return (
    <>
      <h1>Timer</h1>

      <div>{timerValue}</div>

      <button type="button" onClick={startTimer}>Start</button>

      <button type="button" onClick={pauseTimer}>Pause</button>

      <button type="button" onClick={resumeTimer}>Resume</button>

      <button type="button" onClick={resetTimer}>Reset</button>

      <button type="button" onClick={incrementTimer}>Increment</button>
    </>
  )
}

export default Timer;