import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import StateTest from "./components/state/index.test";
import StoreTest from "./components/store/index.test";
import CallBackTest from "./components/callback/index.test";

import {useStore} from "./hooks/useStore"


function App() {
  const { count } = useStore();
  return (
    <>
      app count:{count}
      <br />
      <StoreTest />
      <StateTest />
      <CallBackTest />
    </>
  );
}

export default App;
