import { produce } from "immer";
import { useEffect, useRef, useState } from "react";
const Immer = () => {
  const [defaultState, setState] = useState({
    name: "123",
    age: 12,
    info: {
      address: "cq",
    },
  });

  const state = useRef(defaultState);

  useEffect(() => {
    state.current = defaultState;
  }, [defaultState]);

  const change = () => {
    setState(
      produce((darft) => {
        darft.name = "test";
      })
    );
  };

  return (
    <>
      {JSON.stringify(state.current)}
      {JSON.stringify(defaultState)}
      <button onClick={change}>change</button>
      <button onClick={getInfo}>获取属性</button>
    </>
  );
};

export default Immer;
