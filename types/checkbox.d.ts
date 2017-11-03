// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Checkbox;

export interface Checkbox extends Vue {
  /**
   * 只在单独使用时有效。可以使用 v-model 双向绑定数据,默认值false
   */
  value: boolean;
  /**
   * 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中
   */
  label: string | number | boolean;
  /**
   * 是否禁用当前项,默认值false
   */
  disabled: boolean;
  /**
   * 设置 indeterminate 状态，只负责样式控制,默认值false
   */
  indeterminate: boolean;
  /**
   * 多选框的尺寸，可选值为 large、small、default 或者不设置
   */
  size: string;
  /**
   * 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用,默认值true
   */
  'true-value': string | number | boolean;
  /**
   * 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用,默认值false
   */
  'false-value': string | number | boolean;
  /**
   * 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发
   */
  $emit(eventName: 'on-change', value: boolean): this;
}

export interface CheckboxGroup extends Vue {
  /**
   * 指定选中项目的集合，可以使用 v-model 双向绑定数据,默认值[]
   */
  value: string[] | number[] | boolean[];
  /**
   * 多选框组的尺寸，可选值为 large、small、default 或者不设置
   */
  size: string;
  /**
   * 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发
   */
  $emit(eventName: 'on-change', values: boolean[]): this;
}