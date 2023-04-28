import { proxy } from "valtio";

export const counterStore = proxy({
  count: 0,
  increase: () => {
    counterStore.count++;
  },
  decrease: () => {
    counterStore.count--;
  },
});
