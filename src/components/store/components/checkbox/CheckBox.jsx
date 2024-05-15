import React, { useState } from "react";
import "./CheckBox.css"; // 스타일 파일 불러오기
import { ReactComponent as CheckCircle } from "../../util/icon/CheckCircle.svg";
import { ReactComponent as CheckCircleOutlined } from "../../util/icon/CheckCircleOutlined.svg";

const Checkbox = (props) => {
  const { defaultChecked, onClick, itemId } = props; // props에서 필요한 값들을 추출합니다.
  const [checked, setChecked] = useState(defaultChecked || false); // 기본값은 false로 설정합니다.

  const handleClick = () => {
    setChecked(!checked); // 클릭할 때마다 checked 상태를 반전시킵니다.
    onClick(itemId); // 부모 컴포넌트에서 전달된 onClick 함수를 호출합니다.
  };

  return (
    <div className="checkbox-container" onClick={handleClick}>
      {checked ? <CheckCircle /> : <CheckCircleOutlined />}
    </div>
  );
};

export default Checkbox;
