import {useState} from "react"
export const useHooks = () => {
    const [count,setCount] = useState(0)

    const add = () => {
        setCount(count+1)
    }

    return {
        count,add
    }
}
