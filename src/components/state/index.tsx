import {useHooks} from "./hooks"

import Child from "./Child"
import { useCallback, useMemo, useState } from "react"

const State =() => {
    const {count,add} = useHooks()

    const [num,setNum] = useState(0)

    // const handler = useCallback(() => {
    //     return num;
    // },[num])

    const handler = useMemo(()=>{
        return num
    },[num])

    return <>
        count:{count}
        num:{num}
        <Child handler={handler}/>
        <button onClick={add}>add</button>
        <button onClick={()=>setNum(num+1)}>setNum</button>
    </>
}

export default State