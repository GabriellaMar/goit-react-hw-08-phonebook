import { useDispatch } from 'react-redux'
import { loginUserThunk } from 'redux/operations'
// import styles from './LoginForm.module.css'
import { MailOutlined, EyeInvisibleOutlined, LockOutlined, EyeOutlined } from '@ant-design/icons';
import { FormInput, StyedFormTitle, StyledLoginBtn, StyledLoginForm, StyledLoginFormLabel } from './LoginForm.styled';
import { useState } from 'react';



export const LoginForm = () => {
   const [showPassword, setShowPassword] = useState(false);

   const dispatch = useDispatch()
   const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.currentTarget;
      dispatch(loginUserThunk({
         email: form.elements.userEmail.value,
         password: form.elements.userPassword.value
      }))
      form.reset();
   }

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

   return (
      <div className='loginContainer'>
         < StyedFormTitle >Login Into Your Account</ StyedFormTitle>
         <StyledLoginForm  onSubmit={handleSubmit}
            autoComplete='off'>
            <StyledLoginFormLabel >
               Email
               <MailOutlined className='formIcon'/>
               <FormInput 
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
               <FormInput 
                  type={showPassword ? 'text' : 'password'}
                  name="userPassword"
                  placeholder='Enter your password'
                  required
               />
            </StyledLoginFormLabel>
            <StyledLoginBtn  type="submit">Log in </StyledLoginBtn>
         </StyledLoginForm >

      </div>

   )
}