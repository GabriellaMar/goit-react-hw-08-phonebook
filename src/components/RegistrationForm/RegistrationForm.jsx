
import { useDispatch } from 'react-redux'
import { registerUserThunk } from 'redux/operations'
// import styles from './RegistrationForm.module.css'
import { UserOutlined, MailOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { FormInput, StyedFormTitle, StyledLoginBtn, StyledLoginForm, StyledLoginFormLabel } from 'components/LoginForm/LoginForm.styled';

export const RegistrationForm = () => {
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
               required
            />
         </StyledLoginFormLabel>
         <StyledLoginFormLabel >
            Email
            <MailOutlined  className='formIcon' />
            <FormInput className='registrationInput'
               type="email"
               name="userEmail"
               required
            />
         </StyledLoginFormLabel>
         <StyledLoginFormLabel >
            Password
            <EyeInvisibleOutlined  className='formIcon' />
            <FormInput className='registrationInput'
               type="password"
               name="userPassword"
               required
               minLength={7}
            />
         </StyledLoginFormLabel>
         < StyledLoginBtn type="submit">Sign up</ StyledLoginBtn>
      </StyledLoginForm>
   </div>
}