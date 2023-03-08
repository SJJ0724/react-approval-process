import { getAllMember } from '@/services/test-api/process';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Tabs } from 'antd';
import React, { useEffect } from 'react';
import BaseSetting from './components/baseSetting';
import FormSetting from './components/formSetting';
import ProcessSetting from './components/processSetting';
const { TabPane } = Tabs;
const Process: React.FC = () => {
  useEffect(() => {
    getAllMember().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <PageContainer>
      <Card>
        <Tabs type="card" centered defaultActiveKey="1">
          <TabPane tab="1. 基础设置" key="1" forceRender={true}>
            <BaseSetting
            // infoData={infoData}
            // ref={getFormRef}
            // setToProcess={setToProcess}
            // getInitiator={getInitiator}
            />
          </TabPane>
          <TabPane tab="2. 表单设计" key="2" forceRender={true}>
            <FormSetting
            // delOptionsByIds={delOptionsByIds}
            // infoData={infoData}
            // delConditionsById={delConditionsById}
            // changeComponentsData={changeComponentsData}
            // ref={getProjectRef}
            />
          </TabPane>
          <TabPane tab="3. 流程设计" key="3" forceRender={true}>
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
          </TabPane>
          <TabPane tab="4. 高级设置" key="4" forceRender={true}>
            {/* <AdvancedSettingComponents
              changeRecallIds={changeRecallIds}
              infoData={infoData}
              ref={getSettingRef}
              allIds={allIds}
              recallIds={recallIds}
              toGetProcess={toGetProcess}
              componentsData={componentsData}
            /> */}
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};
export default Process;
