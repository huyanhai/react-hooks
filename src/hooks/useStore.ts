import { useSnapshot } from "valtio";
import { counterStore } from "../store";

export const useStore = () => {
  const { count, increase, decrease } = useSnapshot(counterStore);

  return { count, increase, decrease };
};
