"use client"

import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { useState } from 'react';
import {defaultProps} from './_defaultProps'
import Image from 'next/image';
import Card from './Card/page';
import FormDisabledDemo from './Form/page';
import Link from 'next/link';


const Register =() => {
    const [pathname, setPathname] = useState('/welcome');
  
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        menuFooterRender={(props) => {
          return (
            <a
            style={{
              lineHeight: '48rpx',
              display: 'flex',
              height: 48,
              color: 'rgba(255, 255, 255, 0.65)',
              alignItems: 'center',
            }}
            href="https://preview.pro.ant.design/dashboard/analysis"
            target="_blank"
            rel="noreferrer"
          >
              <Image
    alt="pro-logo"
src=""
    width={16}
    height={16}
    style={{
      margin: '0 16px',
      marginInlineEnd: 10,
    }}
  />
  {!props?.collapsed && 'Preview Pro'}
</a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        
      >
       <PageContainer
          
          tabList={[
            {
              tab: 'Vendor',
              key: 'base',
            },
            {
              tab: 'PR',
              key: 'info',
            },
            {
                tab: 'Purchse',
                key: 'purchase',
              },
              {
                tab: 'RFQ',
                key: 'rfq',
              },
              {
                tab: 'Purchase order',
                key: 'purchase_order',
              },
              {
                tab: 'ASN',
                key: 'asn',
              },
              {
                tab: 'Gate',
                key: 'gate',
              },
              {
                tab: 'MIGO',
                key: 'migo',
              },
              {
                tab: 'OTD',
                key: 'otd',
              },
              {
                tab: 'Contact Us',
                key: 'contact_us',
              },
              {
                tab: 'System',
                key: 'system',
              },
          ]}
          
          
          
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
           <Card/>
            {/* <FormDisabledDemo/> */}
          </div>
        </PageContainer>
      </ProLayout>
     
    </div>
  );
};

export default Register;
