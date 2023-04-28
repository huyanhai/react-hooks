type TExcludeKey = "defaultProps" | "propTypes" | "displayName" | "$$typeof";

export type TInput =
  | Exclude<keyof typeof Input, TExcludeKey>
  | "Input"
  | "Checkbox"
  | "DatePicker"
  | "InputNumber"
  | "Mentions"
  | "Radio"
  | "Rate"
  | "Select"
  | "Slider"
  | "Switch"
  | "TimePicker"
  | "AutoComplete"
  | "Calendar"
  | "Transfer"
  | "TreeSelect"
  | "Upload"
  | "Custom";

export interface IClos {
  tag: TInput;
  key: string;
  itemOptions?: FormItemProps;
  props?: any;
  children?: any;
}