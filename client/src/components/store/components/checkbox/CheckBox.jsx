import React from "react";
import "./CheckBox.css"; // 스타일 파일 불러오기
import { ReactComponent as CheckCircle } from "../../util/icon/CheckCircle.svg";
import { ReactComponent as CheckCircleOutlined } from "../../util/icon/CheckCircleOutlined.svg";

const Checkbox = (props) => {
  const { checked, onClick, itemId } = props; // props에서 필요한 값들을 추출합니다.

  return (
    <div className="checkbox-container" onClick={() => onClick(itemId)}>
      {checked ? <CheckCircle /> : <CheckCircleOutlined />}
    </div>
  );
};

export default Checkbox;
