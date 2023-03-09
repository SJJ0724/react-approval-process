import { Modal } from 'antd';
import React from 'react';
interface propsType {
  isOpen: boolean;
  cancelChooseMembers: () => void;
}
const ChooseMembers: React.FC<propsType> = (props) => {
  const { isOpen, cancelChooseMembers } = props;
  return (
    <Modal open={isOpen} onCancel={cancelChooseMembers} title="选择成员">
      chooseMember
    </Modal>
  );
};
export default ChooseMembers;
