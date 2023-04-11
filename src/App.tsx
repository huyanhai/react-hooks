import { useState, useRef, useEffect } from "react";

import UserForm from "./UserForm";
import UserInput from "./UserInput";

import { IForm } from "./UserForm";

import {useModel} from "./hooks/useModel"

function App() {
  const [state,setState] = useModel({
    phone: "1234",
    pwd: "123",
    msgCode: "xxx",
    info:{
      age:20,
      address:{
        street:"xxx"
      }
    }
  })
  const [forms,updateForms] = useState<IForm>({
    phone: "1234",
    pwd: "123",
    msgCode: "xxx",
    info:{
      age:20,
      address:{
        street:"xxx"
      }
    }
  });

  const [count,setCount] = useState(0)

  const ref = useRef<{
    submit: () => Promise<IForm>;
    form: any;
  }>();



  const submit = async () => {
    const data = await ref.current?.submit();
    if (data) {
      updateForms({
        ...forms,
        ...data
      });
    }
  };

  const emits = (data:IForm) => {
    console.log("子组件传值",data);
    updateForms({
      ...forms,
      ...data
    });
  }

  const update = (value:Record<string,any>) => {
    updateForms({
      ...forms,
      ...value
    })
  }


  return (
    <>
      forms:{JSON.stringify(forms)}
      count:{count}
      newVal:{JSON.stringify(state)}
      <UserForm forms={forms} ref={ref} emits={emits}/>
      <UserInput value={forms.info.address.street} setValue={update} keysName="info.address.street" />
      <UserInput value={count} setValue={setCount} />
      <input value={state.phone} onInput={(e)=>state.phone= e.target.value}/>
      <button onClick={submit}>父组件提交</button>

    </>
  );
}

export default App;
