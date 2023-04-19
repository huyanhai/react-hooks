import { produce, Draft } from "immer";
import { useState } from "react";

export const useImmer: <T extends Array<any> | Record<string, any>>(arsg: T) => [T, (cb: (args: Draft<T>) => void) => void] = (state) => {
  const [defaultState, setState] = useState(state);
  type T = typeof defaultState;

  const change = (cb: (args: Draft<T>) => void) => {
    setState(
      produce((draft: Draft<T>) => {
        cb && cb(draft);
      })
    );
  };

  return [defaultState, change];
};
