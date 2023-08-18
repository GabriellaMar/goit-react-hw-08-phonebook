import { useDispatch } from 'react-redux'
import { loginUserThunk } from 'redux/operations'
// import styles from './LoginForm.module.css'
import { MailOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { FormInput, StyedFormTitle, StyledLoginBtn, StyledLoginForm, StyledLoginFormLabel } from './LoginForm.styled';



export const LoginForm = () => {
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
                  required
               />
            </StyledLoginFormLabel>
            <StyledLoginFormLabel >
               Password
               <EyeInvisibleOutlined className='formIcon' />
               <FormInput 
                  type="password"
                  name="userPassword"
                  required
               />
            </StyledLoginFormLabel>
            <StyledLoginBtn  type="submit">Log in </StyledLoginBtn>
         </StyledLoginForm >

      </div>

   )
}