import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ placeholder, className = '', ...props }) => {
  return (
    <div className="input-wrapper">
      <input className={`input-box ${className}`} {...props} required />
      <label> {placeholder} </label>
    </div>
  );
};

const CustomTextArea = ({ placeholder, className = '', ...props }) => {
  return (
    <div className="input-wrapper">
      <textarea className={`input-box ${className}`} {...props} required></textarea>
      <label> {placeholder} </label>
    </div>
  );
};

const CustomDropdown = ({ placeholder, label_option = true, className = '', children, ...props }) => {
  return (
    <div className="input-wrapper">
      <select className={`input-box ${className}`} {...props} required>
        {label_option && <option disabled hidden value=""></option>}
        {children}
      </select>
      <label> {placeholder} </label>
    </div>
  );
};

export { CustomInput, CustomTextArea, CustomDropdown };
