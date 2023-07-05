import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import React, { useState } from 'react';
import "../Form/formStyles.css"

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [formCollapsed, setFormCollapsed] = useState<boolean>(false);

  const toggleForm = () => {
    setFormCollapsed(!formCollapsed);
  };

  return (
    <>
      <div
  className={`form-header ${formCollapsed ? 'form-header-collapsed' : ''} cursor-pointer`}
  onClick={toggleForm}
>
  <h1>Form Example</h1>
  <PlusOutlined
    className={`form-header-icon ${formCollapsed ? 'form-header-collapsed' : ''}`}
  />
</div>

      {!formCollapsed && (
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          disabled={componentDisabled}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company type">
            <Input />
          </Form.Item>
          <Form.Item label="Owner Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Website">
            <Input />
          </Form.Item>
          <Form.Item label="Establish year">
            <DatePicker picker="year" />
          </Form.Item>
          <Form.Item label="Corporate Identification Number">
            <InputNumber />
            <Form.Item label="CID Date">
            <DatePicker  />
          </Form.Item>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default FormDisabledDemo;
