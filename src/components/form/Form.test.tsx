import { useRef, useEffect } from "react";
import { useImmer } from "../hooks/useImmer";

import type { IClos } from "./types";
import UserForms from "./Form";

import {useRequest} from "alova"

import request from "../api";

const TestForm = () => {
  const [state, setState] = useImmer({ name: "" });
  const [options, setOptions] = useImmer<{ label: string; value: string; disabled?: boolean }[]>([{ value: "xxx", label: "xxx" }]);

  const ref = useRef();

  const cols: IClos[] = [
    {
      tag: "Select",
      key: "name",
      props: {
        options: options,
      },
      itemOptions: {
        label: "",
      },
    },
    {
      tag: "Custom",
      key: "custom1",
      props: {},
      itemOptions: {
        label: "自动完成",
      },
      children: () => {
        return <input value={state.name} onInput={(e) => inputChange(e, "custom1")} />;
      },
    },
  ];

  const inputChange = (e, name: string) => {
    setState((draft) => {
      draft.name = e.target.value;
    });
    (ref.current as any)?.form.setFieldValue(name, e.target.value);
  };

  const {loading,data,error,send} = useRequest(request.Get("health",{
    localCache:{
      mode:"restore",
      expire: Infinity,
    },
  }))


  const submit = () => {   
    send() 
    // console.log((ref.current as any).form.getFieldsValue());
  };

  const setOp = () => {
    setOptions((draft) => {
      draft.length = 0;
      draft.push({ value: "jack", label: "Jack" }, { value: "lucy", label: "Lucy" }, { value: "Yiminghe", label: "yiminghe" }, { value: "disabled", label: "Disabled", disabled: true });
    });
  };

  useEffect(() => {
    setState((draft) => {
      draft.name = (ref.current as any)?.form.getFieldValue("pwd2");
    });
  }, []);

  return (
    <>
    {
      loading && "loading..."
    }
      {JSON.stringify(options)}
      <UserForms cols={cols} />
      <button onClick={setOp}>设置配置</button>
      <button onClick={submit}>submit</button>
    </>
  );
};

export default TestForm;
