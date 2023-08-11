import { useDispatch } from 'react-redux'
import { loginUserThunk } from 'redux/operations'
import styles from './LoginForm.module.css'
import { MailOutlined, EyeInvisibleOutlined } from '@ant-design/icons';



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
      <div className={styles.loginContainer}>
         <h2 className={styles.LoginTittle}>Login Into Your Account</h2>
         <form className={styles.loginForm} onSubmit={handleSubmit}
            autoComplete='off'>
            <label className={styles.loginFormLabel}>
               Email
               <MailOutlined className={styles.formIcon} />
               <input className={styles.loginFormInput}
                  type="email"
                  name="userEmail"
                  required
               />
            </label>
            <label className={styles.loginFormLabel}>
               Password
               <EyeInvisibleOutlined className={styles.formIcon} />
               <input className={styles.loginFormInput}
                  type="password"
                  name="userPassword"
                  required
               />
            </label>
            <button className={styles.loginFormBtn} type="submit">Log in </button>
         </form>

      </div>

   )
}