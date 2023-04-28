import { Form, Input, AutoComplete, FormProps, FormItemProps, Calendar, Checkbox, DatePicker, InputNumber, Mentions, Radio, Rate, Slider, Switch, Select, TimePicker,Transfer ,TreeSelect,Upload} from "antd";
import React, { FC, Fragment, forwardRef, useImperativeHandle } from "react";

import type {TInput,IClos} from "./types"

const components: Record<TInput, any> = {
  Input: Input,
  TextArea: Input.TextArea,
  Search: Input.Search,
  Group: Input.Group,
  Password: Input.Password,
  AutoComplete: AutoComplete,
  Calendar: Calendar,
  Checkbox: Checkbox,
  DatePicker: DatePicker,
  InputNumber: InputNumber,
  Mentions: Mentions,
  Radio: Radio,
  Rate: Rate,
  Select: Select,
  Slider: Slider,
  Switch: Switch,
  TimePicker: TimePicker,
  Transfer: Transfer,
  TreeSelect: TreeSelect,
  Upload:Upload,
  Custom: Fragment,
};

const UserForms: FC<
  {
    cols: IClos[];
    formOptions?: FormProps;
  } & {
    ref?: any;
  }
> = forwardRef(({ cols, formOptions }, parentRef) => {
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
        const options = Object.assign({ key: `item_${item.key}_${index}`, name: item.key }, item.itemOptions);
        const props = Object.assign({ key: `${item.key}_${index}` }, item.props);
        return (
          <Form.Item {...options}>
            <Tag {...props}>{!!item.children ? typeof item.children === "function" ? <span>{item.children()}</span> : <span>{item.children}</span> : null}</Tag>
          </Form.Item>
        );
      })}
    </Form>
  );
});

export default UserForms;
