import { useCallback, useRef, useEffect, useState, useMemo } from "react";

const CallBack = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const sum = useCallback(() => {
    return countA + countB;
  }, [countA, countB]);

  const sum1 = useMemo(() => {
    return countA + countB;
  }, [countA, countB]);

  const sum2 = useCallback(()=>{
    setCountA(countA+1)
  },[])

  useEffect(()=>{
    sum2()
  },[countA])

  return (
    <div>
      <span>{sum1}</span>
      <span>{sum()}</span>
      <span>{countA}</span>
      <button onClick={() => setCountA(countA + 1)}>改变A</button>
      <button onClick={() => setCountB(countB + 1)}>改变B</button>
      <button
        onClick={() => {
          setCountA(countA + 1);
          setCountB(countB + 1);
        }}
      >
        改变AB
      </button>
    </div>
  );
};

export default CallBack;
