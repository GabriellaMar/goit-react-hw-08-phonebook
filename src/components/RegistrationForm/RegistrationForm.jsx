
import { useDispatch } from 'react-redux'
import { registerUserThunk } from 'redux/operations'
// import styles from './RegistrationForm.module.css'
import { UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined } from '@ant-design/icons';
import { FormInput, StyedFormTitle, StyledLoginBtn, StyledLoginForm, StyledLoginFormLabel } from 'components/LoginForm/LoginForm.styled';
import { useState } from 'react';

export const RegistrationForm = () => {
   const [showPassword, setShowPassword] = useState(false);
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.currentTarget;
      console.log(form)

      dispatch(registerUserThunk({
         name: form.elements.userName.value,
         email: form.elements.userEmail.value,
         password: form.elements.userPassword.value
      })
      );
      form.reset();
   }

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

   return <div >
      <StyedFormTitle >Register Your Account</StyedFormTitle>
      <StyledLoginForm 
         autoComplete='off' onSubmit={handleSubmit} >
         <StyledLoginFormLabel>
            Name
            <UserOutlined  className='formIcon' />
            <FormInput className='registrationInput'
               type="text"
               name="userName"
               placeholder='Enter your email name'
               required
            />
         </StyledLoginFormLabel>
         <StyledLoginFormLabel >
            Email
            <MailOutlined  className='formIcon' />
            <FormInput className='registrationInput'
               type="email"
               name="userEmail"
               placeholder='Enter your email address'
               required
            />
         </StyledLoginFormLabel>
         <StyledLoginFormLabel >
            Password
            <LockOutlined className='formIcon'  style={{ fontSize: 23 }} />
            {showPassword ? ( <EyeOutlined className='passwordIcon' onClick={togglePasswordVisibility} />
            ) : (  <EyeInvisibleOutlined  onClick={togglePasswordVisibility} className='passwordIcon' />)}
     
            <FormInput className='registrationInput'
               // type="password"
               type={showPassword ? 'text' : 'password'}
               name="userPassword"
               required
               minLength={7}
               placeholder='Enter your password'
            />
         </StyledLoginFormLabel>
         < StyledLoginBtn type="submit">Sign up</ StyledLoginBtn>
      </StyledLoginForm>
   </div>
}