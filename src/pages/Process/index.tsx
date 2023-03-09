import store from '@/redux/store';
import { getAllMember } from '@/services/test-api/process';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import BaseSetting from './components/baseSetting';
import FormSetting from './components/formSetting';
import ProcessSetting from './components/processSetting';
const tabList = [
  {
    key: '1',
    tab: '1. 基础设置',
  },
  {
    key: '2',
    tab: '2. 表单设计',
  },
  {
    key: '3',
    tab: '3. 流程设计',
  },
  {
    key: '4',
    tab: '4. 高级设置',
  },
];
const contentList: Record<string, React.ReactNode> = {
  1: (
    <BaseSetting
    // infoData={infoData}
    // ref={getFormRef}
    // setToProcess={setToProcess}
    // getInitiator={getInitiator}
    />
  ),
  2: (
    <FormSetting
    // delOptionsByIds={delOptionsByIds}
    // infoData={infoData}
    // delConditionsById={delConditionsById}
    // changeComponentsData={changeComponentsData}
    // ref={getProjectRef}
    />
  ),
  3: (
    <ProcessSetting
    // infoData={infoData}
    // componentsData={componentsData}
    // delOptionsIds={delOptionsIds}
    // changeChildNode={changeChildNode}
    // changeAllIds={changeAllIds}
    // saveId={saveId}
    // changeSaveId={changeSaveId}
    // ref={getRrocessRef}
    // delConditionsId={delConditionsId}
    // setFormInitiator={setFormInitiator}
    // getProcess={getProcess}
    // // setToProcessStep={setToProcessStep}
    // checkedData={checkedData}
    />
  ),
  4: (
    <>6</>
    // <AdvancedSettingComponents
    // changeRecallIds={changeRecallIds}
    // infoData={infoData}
    // ref={getSettingRef}
    // allIds={allIds}
    // recallIds={recallIds}
    // toGetProcess={toGetProcess}
    // componentsData={componentsData}
    // />
  ),
};

const Process: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('1');
  useEffect(() => {
    store.subscribe(() => {
      console.log('app订阅');
    });
    getAllMember().then((res) => {
      console.log(res);
    });
  }, []);
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <PageContainer>
      <Card
        tabList={tabList}
        tabProps={{ activeKey: activeTabKey, centered: true, type: 'card', defaultActiveKey: '3' }}
        onTabChange={onTabChange}
      >
        {contentList[activeTabKey]}
      </Card>
    </PageContainer>
  );
};
export default Process;
