import { FC, memo } from "react";

const Child:FC<{
    handler:any
}> = memo(({handler}) => {

    console.log("render child");
    

    return <>Child</>
})

export default Child;