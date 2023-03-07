import { getAllMember } from '@/services/test-api/process';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card } from 'antd';
import React, { useEffect } from 'react';
const Process: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  useEffect(() => {
    getAllMember().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      ></Card>
    </PageContainer>
  );
};
export default Process;
