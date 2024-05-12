import Select from "react-select";

const SelectButton = (props) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided, //기본 스타일유지하믄서 아래거 적용
      backgroundColor: "white", // 배경색을 흰색으로 설정
      color: "black",
    }),
  };
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={props.MenuGroup[0]}
      options={props.MenuGroup}
      styles={customStyles} //여기 select태그 스타일 적용
    ></Select>
  );
};
export default SelectButton;
