import React, { useState } from 'react';
import Select from "react-select";

const SelectInput = ({ options }) => {
  const [option, setOption] = useState(options[0]);
  const onchangeSelect = (item) => {
    setOption(item);
  };
  return (
    <div className="SelectInput">
       <Select
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