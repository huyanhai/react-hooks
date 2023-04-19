import { memo, useCallback, useEffect, useMemo, useState } from "react";
const Child = () => {
  const [val, setVal] = useState(1);



  /**
   * 没有依赖项，父组件change，该副作用会被重复执行，子组件有状态发生改变也会执行
   * useEffect会在页面渲染完成后执行
   */
  useEffect(() => {
    console.log("没有依赖项");
    val === val;
  });

  /**
   * 传递空数组，只会在组件挂载的时候执行，模拟didMount
   */
  useEffect(() => {
    console.log("挂载后执行");
    /**
     * 模拟组件卸载执行的回调函数，模拟willUnMount
     */
    return () => {
      console.log("执行卸载");
    };
  }, []);

  /**
   * 有依赖项，挂载的时候执行和依赖的数据发生变化才执行，模拟didUpdate生命周期
   */
  useEffect(()=>{
    console.log("useEffect val change");
  },[val])

  const add = useMemo(() => {
    return () => {
      setVal(val + 1);
    };
  }, [val]);

  /**
   * 只有当依赖项发生改变才会执行，与useEffect的区别是，useEffect第一次渲染也会执行
   */
  // const add = useCallback(() => {
  //   console.log("useCallback val change");
  //   setVal(val + 1);
  // }, [val]);
  return (
    <>
      <div>val:{val}</div>
      <button onClick={() => setVal(val + 1)}>改变值</button>
      <button onClick={add}>子组件add</button>
    </>
  );
};

// export default memo(Child, () => {
//   return false;
// });

export default Child;
