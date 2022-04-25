import React from 'react';
import ProLayout, { DefaultFooter, PageContainer } from '@galiojs/pro-layout';
import defaultProps from './_defaultProps';

export default () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: '100vh',
    }}
    breakpoint={false}
    collapsed
    location={{
      pathname: '/welcome',
    }}
    footerRender={() => (
      <DefaultFooter
        links={[
          { key: 'test', title: 'layout', href: 'www.alipay.com' },
          { key: 'test2', title: 'layout2', href: 'www.alipay.com' },
        ]}
        copyright="这是一条测试文案"
      />
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);
