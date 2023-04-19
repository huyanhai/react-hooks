import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Form } from "antd";
import UserForms from "./Form";

import { useImmer } from "./hooks/useImmer";

import type { IClos } from "./Form";

function App() {
  const [state, setState] = useImmer({ name: "" });
  const ref = useRef();

  const cols: IClos[] = [
    {
      tag: "TextArea",
      key: "input",
      props: {},
      itemOptions: {
        label: "密码",
        name: "pwd",
      },
    },
    {
      tag: "AutoComplete",
      key: "autoComplete",
      props: {},
      itemOptions: {
        label: "自动完成",
        name: "pwd1",
      },
      children: 123,
    },
    {
      tag: "Custom",
      key: "custom1",
      props: {},
      itemOptions: {
        label: "自动完成",
        name: "pwd2",
      },
      children: () => {
        return <input value={state.name} onInput={inputChange} />;
      },
    },
  ];

  const inputChange = (e) => {
    setState((draft) => {
      draft.name = e.target.value;
    });
    (ref.current as any)?.form.setFieldValue("pwd2", e.target.value);
  };

  const submit = () => {
    console.log((ref.current as any).form.getFieldsValue());
  };

  useEffect(() => {
    setState((draft) => {
      draft.name = (ref.current as any)?.form.getFieldValue("pwd2");
    });
  }, []);

  return (
    <>
      {state.name}
      <UserForms cols={cols} ref={ref} formOptions={{ initialValues: { pwd: "111", pwd1: "222", pwd2: "333" } }} />
      <button onClick={submit}>submit</button>
    </>
  );
}

export default App;
