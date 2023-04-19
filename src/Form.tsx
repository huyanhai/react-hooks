import { Form, Input, AutoComplete,FormProps,FormItemProps } from "antd";
import React, { FC, Fragment, forwardRef, useImperativeHandle } from "react";

type TExcludeKey = "defaultProps" | "propTypes" | "displayName" | "$$typeof";

type TInput = Exclude<keyof typeof Input, TExcludeKey> | "Input" | "AutoComplete" | "Custom";

export interface IClos {
  tag: TInput;
  key: string;
  itemOptions?: FormItemProps;
  props?: any;
  children?: any;
}

const components: Record<TInput, any> = {
  Input: Input,
  TextArea: Input.TextArea,
  Search: Input.Search,
  Group: Input.Group,
  Password: Input.Password,
  AutoComplete: AutoComplete,
  Custom: Fragment,
};

const UserForms: FC<
  {
    cols: IClos[];
    formOptions?:FormProps,
  } & {
    ref: any;
  }
> = forwardRef(({ cols,formOptions }, parentRef) => {
  const [form] = Form.useForm();

  useImperativeHandle(parentRef, () => {
    return {
      form,
    };
  });

  return (
    <Form key="userForms" {...formOptions} form={form}>
      {cols.map((item: IClos, index: number) => {
        const Tag = components[item.tag];
        const options = Object.assign({ key: `item_${item.key}_${index}` }, item.itemOptions);
        const props = Object.assign({ key: `${item.key}_${index}` }, item.props);

        return (
          <Form.Item {...options}>
            <Tag {...props}>{typeof item.children === "function" ? <span>{item.children()}</span> : <span>{item.children}</span>}</Tag>
          </Form.Item>
        );
      })}
    </Form>
  );
});

export default UserForms;
