import { FC } from "react";

import { Input } from "antd";

const UserInput: FC<{
  keysName?: string;
  value: any;
  setValue: (value: any) => void;
}> = ({ keysName, value, setValue }) => {
  const update = (e) => {

    if (keysName) {
        const cache:any = {}
        const keysArr = keysName.split(".").reverse();
        keysArr.forEach((key:string,index:number)=>{
            const cacheKey = Object.keys(cache).join("");
            if (index === 0) {
                cache[key] = e.target.value;
            } else {
                cache[key] = {...cache }
            }
            cacheKey && delete cache[cacheKey];
        })
        setValue(cache)
    } else {
        setValue(e.target.value)
    }
  }

  return <Input value={value} onInput={update} />;
};

export default UserInput;
