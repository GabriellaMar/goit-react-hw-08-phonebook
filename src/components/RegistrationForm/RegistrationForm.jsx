import { useDispatch } from 'react-redux'
import { registerUserThunk } from 'redux/operations'
import styles from './RegistrationForm.module.css'

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
      // form.reset();
   }

   return <>
      <h1>Register Your Account</h1>
      <form className={styles.registrationForm}
         autoComplete='off' onSubmit={handleSubmit} >
         <label className={styles.registrationLabel}>
            Name
            <input className={styles.registrationInput}
               type="text"
               name="userName"
               required
            />
         </label>
         <label className={styles.registrationLabel}>
            Email
            <input className={styles.registrationInput}
               type="email"
               name="userEmail"
               required
            />
         </label>
         <label className={styles.registrationLabel}>
            Password
            <input className={styles.registrationInput}
               type="password"
               name="userPassword"
               required
               minLength={7}
            />
         </label>
         <button type="submit" className={styles.registrationBtn}>Sign up</button>
      </form>
   </>
}