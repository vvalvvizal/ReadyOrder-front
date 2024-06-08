import React, { useRef, useState, useEffect } from "react";
import "./ImageUpload.css";
const ImageUpload = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader(); //브라우저 내에 내장된 javascript, 파일의 구분분석을 도움.
    fileReader.onload = () => {
      //fileReader가 새로운 파일을 로딩할 때, 혹은 파일 구문 분석이 끝날때마다 이 익명함수 실행
      setPreviewUrl(fileReader.result);
      //구문분석된 파일을 인수로 받는 것이 아닌 fileReader.result로부터 추출해야함.
    };

    fileReader.readAsDataURL(file);
  }, [file]); //새로운 파일 선택될 때마다 미리보기 생성

  //리렌더링 주기가 지나도 유지될 값들, DOM 요소로 연결 수립하는 값 저장하는데 사용
  //DOM 노드 안에 존재, 파일선택기를 열어줄 메서드
  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      console.log("Picked file:", pickedFile); // 파일 객체 출력
      console.log("File type:", pickedFile.type); // 파일 타입 출력
      if (pickedFile.type.startsWith("image/")) {
        // 이미지 파일인지 확인
        setFile(pickedFile);
        setIsValid(true);
        fileIsValid = true;
      } else {
        setIsValid(false);
        fileIsValid = false;
        console.error("선택된 파일이 이미지 파일이 아닙니다.");
      }
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    props.onInput(props.id, pickedFile, fileIsValid);
  };
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      {/*display: none으로 설정하면 React에서 인라인 스타일링 가능*/}
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      {/*accept : 사용자가 file에 입력 가능한 확장자들*/}
      <div className={`image-upload ${props.center && "center"}`}>
        {/*중앙정렬*/}
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>이미지를 선택해주세요.</p>}
        </div>
        <button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
