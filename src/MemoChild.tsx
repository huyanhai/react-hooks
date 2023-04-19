import {  Button } from "antd";
import { FC, memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
const MemoChild: FC<{
  propCount: number;
}> = ({ propCount }) => {
  console.log("render child");
  const [count, setCount] = useState(0);

//   const memoData = useMemo(()=>propCount,[propCount])

useLayoutEffect(()=>{
   console.log("useLayoutEffect");
})

useEffect(()=>{
    console.log("useEffect");
})

  return (
    <>
      child count:{count}<br/>
      propCount:{propCount}<br/>
      <Button onClick={() => setCount(count + 1)}>child setCount</Button>
    </>
  );
};

export default memo(MemoChild);
// export default MemoChild;
