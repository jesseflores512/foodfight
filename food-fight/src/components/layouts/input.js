import React from 'react';

const InputField = (props) => {
      const { value, onChanged} = props;
  return (
    <div className="wrap-input100 validate-input">
        <input className="input100" type="text" value={value} onChange={onChanged}/>
    </div>
  )
}

export default InputField;
