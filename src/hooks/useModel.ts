import {useState} from "react";
export const useModel = (val:any) => {
    const [state,setState] = useState(val);
    const newVal = new Proxy(val,{
        get(target, key, receiver) {
            return Reflect.get(target,key,receiver)
        },
        set(target, key, newValue, receiver) {
            setState({
                ...target,
                [key]:newValue
            })
            return true
            
        },
    })
    

    return [state,newVal]
}