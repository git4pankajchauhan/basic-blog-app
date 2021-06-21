import { color } from 'Assets/Style/themes';
import CustomButton from 'Components/Button/CustomButton';
import { CustomInput } from 'Components/Input/CustomInput';
import React, { useState } from 'react';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setUser(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
  };
  return (
    <form className="user-form" onSubmit={onSubmit} autoComplete="off">
      <h2 className="form-title">Log In</h2>
      <CustomInput type="text" name="email" onChange={onChange} placeholder="Enter Email" />
      <CustomInput type="password" name="password" onChange={onChange} placeholder="Enter Password" />
      <CustomButton color={color.success}>Submit</CustomButton>
    </form>
  );
};

export default Login;
