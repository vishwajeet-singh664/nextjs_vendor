import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Meta } = Card;

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <Link href="/vendor_registration">
      <Card
        hoverable
        style={{ width: 200, marginRight: 20 }}
        cover={
          <div style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Image
              alt="vendor registration"
              src="/form.png"
              width={170}
              height={170}
            />
          </div>
        }
      >
        <Meta title="Vendor Registration" />
      </Card>
    </Link>
    <Link href="/vendor_approval">
      <Card
        hoverable
        style={{ width: 200 }}
        cover={
          <div style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Image
              alt="vendor approval"
              src="/form.png"
              width={170}
              height={170}
            />
          </div>
        }
      >
        <Meta title="Vendor Approval" />
      </Card>
    </Link>
  </div>
);

export default App;



// https://www.seekpng.com/png/detail/372-3720163_document-handling-charges-for-registration-registration-icon-png.png