import styles from './LoginForm.module.css'
export const LoginForm =()=>{
    return <form className={styles.loginForm}
    // onSubmit={handleSubmit} 
    autoComplete = 'off'>
        <label className={styles.loginFormLabel}>
         Email
        <input className={styles.loginFormInput}
          type="email"
          name="email"
             required
        //   value={email}
        //   onChange={handleChange}
          />
        </label>
        <label className={styles.loginFormLabel}>
        Password
        <input className={styles.loginFormInput}
          type="password"
          name="password"
          required
        //   value={password}
        //   onChange={handleChange}
             />
        </label>
     <button  className={styles.loginFormBtn} type="submit">Log in </button>
   </form> 
}