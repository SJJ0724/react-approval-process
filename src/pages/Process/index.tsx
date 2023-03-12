import { getAllMember } from '@/services/test-api/process';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import BaseSetting from './components/baseSetting/baseSetting';
import FormSetting from './components/formSetting/formSetting';
import ProcessSetting from './components/processSetting/processSetting';
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

export const MemberContext = createContext([] as any[]);
const Process: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('1');
  const [allMember, setAllMember] = useState<any[]>([]);
  const contentList: Record<string, React.ReactNode> = {
    1: (
      <MemberContext.Provider value={allMember}>
        <BaseSetting
        // infoData={infoData}
        // ref={getFormRef}
        // setToProcess={setToProcess}
        // getInitiator={getInitiator}
        />
      </MemberContext.Provider>
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

  useEffect(() => {
    getAllMember().then((res) => {
      setAllMember(res.data.department_list);
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
