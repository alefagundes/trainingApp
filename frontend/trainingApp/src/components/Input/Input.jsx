/* eslint-disable react/prop-types */

export const Input = ({ type, name, handlechange, placeholder, onclick, value, autocomplete }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={handlechange}
      placeholder={placeholder}
      onClick={onclick}
      value={value}
      autoComplete={autocomplete}
    />
  );
};
