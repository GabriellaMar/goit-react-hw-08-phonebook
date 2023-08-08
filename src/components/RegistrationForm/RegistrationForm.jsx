export const RegistrationForm =()=>{
    return <form  
    // onSubmit={handleSubmit} 
    autoComplete = 'off'>
       <label >
        Name
        <input 
          type="text"
          name="name"
          required
        //   value={name}
        //   onChange={handleChange}
             />
        </label>
        <label >
         Email
        <input 
          type="email"
          name="email"
             required
        //   value={email}
        //   onChange={handleChange}
          />
        </label>
        <label >
        Password
        <input 
          type="password"
          name="password"
          required
        //   value={password}
        //   onChange={handleChange}
             />
        </label>
     <button  type="submit">Register</button>
   </form> 
}