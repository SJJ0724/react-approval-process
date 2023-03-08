import { Form, Input, Select } from 'antd';
import React, { useRef } from 'react';
const BaseSetting: React.FC = () => {
  const formRef = useRef<any>();
  const formGroup = [
    { id: 1, group_name: '分组1' },
    { id: 2, group_name: '分组2' },
  ];
  return (
    <>
      <Form
        scrollToFirstError
        ref={formRef}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        // onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="表单名称"
          name="name"
          rules={[
            { required: true, message: '请输入表单名称!' },
            {
              max: 20,
              message: '请限制在20个字符内',
            },
          ]}
        >
          <Input placeholder="请输入表单名称" />
        </Form.Item>
        <Form.Item
          label="所在分组"
          name="group_id"
          rules={[{ required: true, message: '请选择分组!' }]}
        >
          <Select placeholder="请选择">
            {formGroup.map((val) => {
              return (
                <Select.Option key={val.id} value={val.id}>
                  {val.group_name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="表单说明"
          name="description"
          rules={[
            { required: true, message: '请输入表单说明!' },
            {
              max: 50,
              message: '请限制在50个字符内',
            },
          ]}
        >
          <Input.TextArea placeholder="请输入表单说明" />
        </Form.Item>
        <Form.Item
          label="谁可以发起"
          name="initiator"
          rules={[{ required: true, message: '请选择!' }]}
        >
          <Input
            placeholder="请选择"
            readOnly
            onClick={() => {
              //   setIsVisible(true);
            }}
          />
        </Form.Item>
        <Form.Item label="可见范围" name="visible" rules={[{ required: true, message: '请选择!' }]}>
          <Input
            placeholder="请选择可见范围"
            readOnly
            onClick={() => {
              //   setIsVisibleRange(true);
            }}
          />
        </Form.Item>
      </Form>
      {/* <ChooseMembers
        title={'选择部门与成员'}
        isVisible={isVisible}
        chooseType="memberDepartment"
        isOne={false}
        onChangeValue={chooseMember}
        onCancel={handleCancel}
        defaultData={memberData}
        targetKey={targetKeys}
        onlyMember={false}
      />
      <ChooseMembers
        title={'选择部门与成员'}
        isVisible={isVisibleRange}
        chooseType="memberDepartment"
        isOne={false}
        onChangeValue={chooseMemberRange}
        onCancel={handleCancel}
        defaultData={memberData}
        targetKey={targetKeysRange}
        onlyMember={false}
      /> */}
    </>
  );
};
export default BaseSetting;
