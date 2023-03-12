import { MemberContext } from '@/pages/Process';
import { Modal } from 'antd';
import React, { useContext, useEffect } from 'react';
interface propsType {
  // isOpen: boolean;
  cancelChooseMembers: () => void;
}
const ChooseMembers: React.FC<propsType> = (props) => {
  const { cancelChooseMembers } = props;
  const Members = useContext(MemberContext);
  useEffect(() => {
    console.log(Members);
  }, []);
  return (
    <Modal open={true} onCancel={cancelChooseMembers} title="选择成员">
      chooseMember
    </Modal>
  );
};
export default ChooseMembers;
