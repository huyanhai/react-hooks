import React, { FC, useEffect, forwardRef, useImperativeHandle, useState } from "react";
import { Form, Input, Button, message, Checkbox } from "antd";

export interface IForm {
  phone: string;
  pwd: string;
  msgCode?: string;
  [key:string]: any;
}

const UserForm: FC<{
  forms: IForm;
  ref: any;
  emits: (data:IForm) => void
}> = forwardRef(({ forms, emits }, parentRef) => {
  const [form] = Form.useForm<IForm>();

  const [state,setState] = useState(1)

  

  /**
   * 挂载的时候初始化表单数据
   */
  useEffect(() => {
    form.setFieldsValue(forms);
  }, []);

  /**
   * 提交的时候触发
   */
  const submit = () => {
    return form
      .validateFields()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (err.errorFields && Array.isArray(err.errorFields) && err.errorFields.length > 0) {
          message.error(err.errorFields[0].errors);
        }
      });
  };

  /**
   * 取消的时候触发
   */
  const cancel = () => {
    form.resetFields();
  };

  /**
   * 只暴露部分数据给父组件
   */
  useImperativeHandle(parentRef, () => {
    return {
      submit,
      form,
    };
  });


  const emit = () => {
    emits(form.getFieldsValue())
  }

  const changeItem = () => {
    setState(state === 1 ? 2 : 1)

    console.log("state",state);
    
  }

  return (
    <Form form={form} name="form">
      <Form.Item name="phone" label="手机号" rules={[{ required: true, message: "手机号不能为空" }]}>
        <Input />
      </Form.Item>
      {
        state === 1 ? <Form.Item name="pwd" label="密码" rules={[{ required: true, message: "密码不能为空" }]}>
          <Input />
        </Form.Item> : <Form.Item name="pwd" label="密码" rules={[{ required: true, message: "密码不能为空" }]}>
          <Checkbox />
        </Form.Item>
      }
      <Form.Item name="msgCode" label="验证码">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button onClick={changeItem}>change</Button>
        <Button type="primary" onClick={submit}>
          登录
        </Button>
        <Button onClick={cancel}>重置</Button>
        <Button onClick={emit}>emit</Button>
      </Form.Item>
    </Form>
  );
});

export default UserForm;
