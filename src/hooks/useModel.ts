import {useState} from "react";
export const useModel = (val:any) => {
    const newVal = new Proxy(val,{
        get(target, key, receiver) {
            return target[key];
        },
        set(target, key, newValue, receiver) {
            console.log("key",key);
            setState({
                ...target,
                [key]:newValue
            })
            return true
            
        },
    })

    const [state,setState] = useState(newVal);

    return [state]
}