/* eslint-disable react/prop-types */
import style from './InputSelect.module.scss'
export const InputSelect = ({ text, option0, name, options, handleOnChange, value }) => {
  
  return (
    <div className={style.selectContainer}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option value={''}>{option0}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
