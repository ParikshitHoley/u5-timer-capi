import { useRef, useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = ({ initial}) => {
  const [num, setNum] = useState(initial);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState(true);
  const value = useRef(null);

  function startInterval() {
    setTimer(false);
    value.current = setInterval(() => {
      setNum((p) => p + 1);
    }, 1000);
  }

  const reset = () => {
    setTimer(true);
    clearInterval(value.current);
    setNum(0);
    setMinute(0)
    setHour(0);
  };

  const stop = () => {
    clearInterval(value.current);
    setTimer(true);
  };

  useEffect(() => {
    if (num > 59) {
      setNum(0);
      setMinute((p) => p + 1);
    }
    if (minute > 59) {
      setMinute(0);
      setNum(0);
      setHour((p) => p + 1);
    }
  }, [num, minute]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h4>H</h4>
        <h4>:</h4>
        <h4>M</h4>
        <h4>:</h4>
      <h4>S</h4>
      </div>
   
      <div>
        <h1>Timer</h1>
        <div>
          <h1>{hour}</h1>
          <h1>:</h1>
          <h1>{minute}</h1>
          <h1>:</h1>
          <h1>{num}</h1>
        </div>
      </div>
    
      <div>
        
      {timer ? (
        <button onClick={startInterval}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}

      <button onClick={reset}>Reset</button>
      </div>
     
    </div>
  );
};

export default Timer;
