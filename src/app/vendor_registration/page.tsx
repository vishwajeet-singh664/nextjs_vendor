"use client"
import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Card } from 'antd';

const { Item } = Form;

interface CompanyDetailsFormProps {
  onFinish: (values: any) => void;
}

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({ onFinish }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card
      title="Company Details"
      extra={
        <Button type="link" onClick={toggleCard}>
          {isOpen ? 'Close' : 'Open'}
        </Button>
      }
      style={{ width: '80%', display: 'flex',flexDirection:"column" }}
      bordered={false}
    >
      {isOpen && (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
          <Item
            label="Company Name"
            name="companyName"
            rules={[{ required: true, message: 'Please enter the company name' }]}
          >
            <Input />
          </Item>
          <Item
            label="Company Type"
            name="companyType"
            rules={[{ required: true, message: 'Please enter the company type' }]}
          >
            <Input />
          </Item>
          <Item
            label="Owner Name"
            name="ownerName"
            rules={[{ required: true, message: 'Please enter the owner name' }]}
          >
            <Input />
          </Item>

          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
          <Item label="Company Website" name="companyWebsite" style={{ width: "20rem", marginRight: "10px" }}>
            <Input />
          </Item>
          <Item
            label="Established Year"
            name="establishedYear"
            rules={[{ required: true, message: 'Please enter the established year' }]}
            style={{ width: "20rem" }}
          >
            <Input />
          </Item>
          </div>

<div style={{display:"flex",flexDirection:"row"}}>
<Item
            label="Corporate Identification Number (CIN)"
            name="cin"
            rules={[{ required: true, message: 'Please enter the Corporate Identification Number (CIN)' }]}
            style={{width:"20rem", marginRight: "10px" }}
          >
            <Input />
          </Item>
          <Item
            label="CIN Date"
            name="cinDate"
            rules={[{ required: true, message: 'Please enter the CIN date' }]}
            style={{ width: "20rem" }}
          >
            <Input type="date" />
          </Item>

</div>
         <div style={{display:"flex",flexDirection:"row"}}>

         <Item
            label="Company Category"
            name="companyCategory"
            rules={[{ required: true, message: 'Please enter the company category' }]}
            style={{ width:"20rem",marginRight: "10px" }}
         >
            <Input />
          </Item>
          <Item
            label="If Existing Supplier"
            name="ifExistingSupplier"
            rules={[{ required: true, message: 'Please enter the company category' }]}
            style={{ width:"20rem",marginRight: "10px" }}
          >
            <Input />

          </Item>
          <Item label="First Time Supplier" name="firstTimeSupplier" valuePropName="checked"
          
          >
            <Checkbox style={{fontSize:"20px"}} />
          </Item>
         </div>
          
          
          <Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Item>
        </Form>
      )}
    </Card>
  );
};

export default CompanyDetailsForm;
