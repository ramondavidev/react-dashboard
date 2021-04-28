import React, { useState } from 'react';
import { useSelector } from '~/store/index';
import Select from "react-select";

const SelectInput = ({ options }) => {
  const [option, setOption] = useState(options[0]);
  const onchangeSelect = (item) => {
    setOption(item);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black'
    }),
    singleValue: (provided, state) => {
      return { ...provided };
    }
  }

  return (
    <div className="SelectInput">
       <Select
          styles={customStyles}
          value={option}
          onChange={onchangeSelect}
          options={options}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
       />
    </div>
  );
};

export default SelectInput;