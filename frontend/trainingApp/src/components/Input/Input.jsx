/* eslint-disable react/prop-types */
import style from './Input.module.scss'
export const Input = ({ type, name, handlechange, placeholder, onclick, value, autocomplete, classname }) => {
  return (
    <input className={`${style[classname]}`}
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
