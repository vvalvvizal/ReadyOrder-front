import react, { useState, createContext } from "react";
import Select from "react-select";
export const SelectedItemsContext = createContext();

const SelectButton = (props) => {
  const [selectedOption, setSelectedOption] = useState();

  const customStyles = {
    option: (provided, state) => ({
      ...provided, //기본 스타일유지하믄서 아래거 적용
      backgroundColor: "white", // 배경색을 흰색으로 설정
      color: "black",
    }),
  };
  if (!props.categories || props.categories.length === 0) {
    return (
      <div>
        <p>No Category found</p>
      </div>
    );
  }

  const options = props.categories.categories.map((category) => ({
    label: category,
    value: category,
  }));

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // console.log("선택된 옵션:", selectedOption.value);
  };

  // 0: {label: '간식 food', value: '간식 food'}
  // 1: {label: 'main food', value: 'main food'}
  // 2: {label: 'side food', value: 'side food'

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={options[0]} // 첫 번째 항목을 기본값으로 설정
      options={options}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};
export default SelectButton;
