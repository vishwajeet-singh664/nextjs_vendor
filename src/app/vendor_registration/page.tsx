"use client"
import React, { useState } from 'react';
import {  Menu, Progress } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

interface FormValues {
  dealerDetails: string;
  registeredAddress: string;
  contactPersonDetails: string;
  bankDetails: string;
  godownDetails: string;
  nearestWarehouse: string;
  propertyDetails: string;
  registrationDetails: string;
  financialInformation: string;
  taxInformation: string;
  fertilizerSale: string;
  agroInputs: string;
  salesCommitment: string;
  businessOperations: string;
  currentDealership: string;
  documents: string;
}

const RightBoxForm: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('dealerDetails');
  const [values, setValues] = useState<FormValues>({
    dealerDetails: '',
    registeredAddress: '',
    contactPersonDetails: '',
    bankDetails: '',
    godownDetails: '',
    nearestWarehouse: '',
    propertyDetails: '',
    registrationDetails: '',
    financialInformation: '',
    taxInformation: '',
    fertilizerSale: '',
    agroInputs: '',
    salesCommitment: '',
    businessOperations: '',
    currentDealership: '',
    documents: '',
  });

  const handleMenuClick = (e: any) => {
    setCurrentMenu(e.key);
  };

  const handleFormSubmit = (values: FormValues) => {
    setValues(values);
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(values).length;
    const completedFields = Object.values(values).filter((value) => value !== '').length;
    const progressPercentage = (completedFields / totalFields) * 100;
    return Math.round(progressPercentage);
  };

  const getTitleByMenuKey = (menuKey: string) => {
    switch (menuKey) {
      case 'dealerDetails':
        return 'Dealer Details';
      case 'registeredAddress':
        return 'Registered Address';
      case 'contactPersonDetails':
        return 'Contact Person Details';
      case 'bankDetails':
        return 'Bank Details';
      case 'godownDetails':
        return 'Godown Details';
      case 'nearestWarehouse':
        return 'Nearest Warehouse';
      case 'propertyDetails':
        return 'Details of Property of Proprietor/Partner/Firm';
      case 'registrationDetails':
        return 'Registration Details';
      case 'financialInformation':
        return 'Financial Information';
      case 'taxInformation':
        return 'Income Tax/ GST/Other';
      case 'fertilizerSale':
        return 'Fertilizer Sale';
      case 'agroInputs':
        return 'Agro Inputs';
      case 'salesCommitment':
        return 'Sales Commitment';
      case 'businessOperations':
        return 'Business Operations';
      case 'currentDealership':
        return 'Current dealership details / Fertilizer/seeds/Pesticides/Others';
      case 'documents':
        return 'Documents';
      default:
        return '';
    }
  };

  const cardTitle = getTitleByMenuKey(currentMenu);

  return (
    <div style={{ display: 'flex', height: '50vw' }}>
     <Menu
        mode="vertical"
        theme="light"
        style={{ width: 250 }}
        selectedKeys={[currentMenu]}
        onClick={handleMenuClick}
      >
        <Menu.Item
          key="registeredAddress"
          style={{ height: 50, background: '#9542ef', color: 'white', display: 'flex', alignItems: 'center' }}
        >
          <h3 style={{ margin: 10, marginRight: 9, marginTop: 30 }}>Form</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Progress percent={calculateProgress()} size="small" />
          </div>
        </Menu.Item>
        <Menu.Item key="dealerDetails">Dealer Details </Menu.Item>
        <Menu.Item key="registeredAddress">Registered Address</Menu.Item>
        <Menu.Item key="contactPersonDetails">Contact Person Details</Menu.Item>
        <Menu.Item key="bankDetails">Bank Details</Menu.Item>
        <Menu.Item key="godownDetails">Godown Details</Menu.Item>
        <Menu.Item key="nearestWarehouse">Nearest Warehouse</Menu.Item>
        <Menu.Item key="propertyDetails">
          Details of Property of Proprietor/Partner/Firm
        </Menu.Item>
        <Menu.Item key="registrationDetails">Registration Details</Menu.Item>
        <Menu.Item key="financialInformation">Financial Information</Menu.Item>
        <Menu.Item key="taxInformation">Income Tax/ GST/Other</Menu.Item>
        <Menu.Item key="fertilizerSale">Fertilizer Sale</Menu.Item>
        <Menu.Item key="agroInputs">Agro Inputs</Menu.Item>
        <Menu.Item key="salesCommitment">Sales Commitment</Menu.Item>
        <Menu.Item key="businessOperations">Business Operations</Menu.Item>
        <Menu.Item key="currentDealership">
          Current dealership details / Fertilizer/seeds/Pesticides/Others
        </Menu.Item>
        <Menu.Item key="documents">Documents</Menu.Item>
      </Menu>
    
    </div>
  );
};

export default RightBoxForm;