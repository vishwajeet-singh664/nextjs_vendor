"use client"
import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Search } = Input;

interface DataType {
  key: React.Key;
  status: string;
  company_type: string;
  company_name: string;
  sap_vendor_code: string;
  vendor_type: string;
  application_date: string;
  approved_date: string;
  reason_of_resignation: string;
  delete: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      compare: (a, b) => a.status.localeCompare(b.status),
      multiple: 3,
    },
  },
  {
    title: 'Company Type',
    dataIndex: 'company_type',
    sorter: {
      compare: (a, b) => a.company_type.localeCompare(b.company_type),
      multiple: 2,
    },
  },
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    sorter: {
      compare: (a, b) => a.company_name.localeCompare(b.company_name),
      multiple: 1,
    },
  },
  {
    title: 'SAP Vendor Code',
    dataIndex: 'sap_vendor_code',
  },
  {
    title: 'Vendor Type',
    dataIndex: 'vendor_type',
  },
  {
    title: 'Application Date',
    dataIndex: 'application_date',
  },
  {
    title: 'Reason of Resignation',
    dataIndex: 'reason_of_resignation',
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
  },
];


const data: DataType[] = [
  {
    key: '1',
    status: 'unapproved',
    company_name: 'Kia Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '2',
    status: 'approved',
    company_name: 'Texmotors Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '3',
    status: 'approved',
    company_name: 'softmetal Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '4',
    status: 'unapproved',
    company_name: 'Kia Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '5',
    status: 'unapproved',
    company_name: 'softmetal Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '6',
    status: 'unapproved',
    company_name: 'Kia Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '7',
    status: 'approved',
    company_name: 'samsung',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '8',
    status: 'unapproved',
    company_name: 'Kia Motors',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '9',
    status: 'approved',
    company_name: 'samsung',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
  {
    key: '10',
    status: 'unapproved',
    company_name: 'samsung',
    company_type: 'Company',
    sap_vendor_code: '-',
    vendor_type: 'Manufacturer',
    application_date: '12-06-2023 18:02:06',
    approved_date: '-',
    reason_of_resignation: '',
    delete: '',
  },
];


const VendorApproval: React.FC = () => {
  const [filteredData, setFilteredData] = useState<DataType[]>(data);
  const router = useRouter();

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onSearch = (value: string) => {
    const filteredData = data.filter((item) => {
      return (
        item.status.toLowerCase().includes(value.toLowerCase()) ||
        item.company_name.toLowerCase().includes(value.toLowerCase()) ||
        item.company_type.toLowerCase().includes(value.toLowerCase()) ||
        item.sap_vendor_code.toLowerCase().includes(value.toLowerCase()) ||
        item.vendor_type.toLowerCase().includes(value.toLowerCase()) ||
        item.reason_of_resignation.toLowerCase().includes(value.toLowerCase()) ||
        item.application_date.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(filteredData);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '5px' }}>
          <Button onClick={() => router.push('/')} style={{ width: '60px' }}>
            <ArrowLeftOutlined />
          </Button>
          <Search
            placeholder="Input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: '240px', marginLeft: 'auto', fontSize: 16 }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          onChange={onChange}
          pagination={{
            pageSize: 8,
            total: filteredData.length,
          }}
        />
      </div>
    </>
  );
};

const VendorApprovalPage: React.FC = () => {
  return (
    <div>
      <VendorApproval />
    </div>
  );
};

export default VendorApprovalPage;
