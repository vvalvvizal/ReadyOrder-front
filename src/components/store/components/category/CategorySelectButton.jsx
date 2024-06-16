import react, { useState, useEffect } from "react";
import Select from "react-select";

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
        <Select />
      </div>
    );
  }

  const options = props.categories.categories.map((category) => ({
    label: category,
    value: category,
  }));

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (props.onCategoryChange) {
      props.onCategoryChang                                                                                                                                 e(selectedOption.value);
    }
    //console.log("선택된 옵션:", selectedOption.value);
  };
  const findInitialOption = (initialCategory) => {
    return (
      options.find((option) => option.value === initialCategory) || options[0]
    );
  };

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={findInitialOption(props.initialCategory)} // 첫 번째 항목을 기본값으로 설정
      options={options}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};
export default SelectButton;
