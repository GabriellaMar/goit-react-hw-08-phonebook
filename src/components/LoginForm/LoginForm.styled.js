import styled from "styled-components";


export const StyledLoginForm = styled.form`
 display: flex;
    flex-direction: column;
    gap: 30px;
    /* max-width: 380px; */
    height: 300px;
    margin: 0 auto;

    @media screen and (min-width: 768px){
    width: 740px;
    }
`

export const StyedFormTitle = styled.h2`
 text-align: center;
    margin-top:50px;
    margin-bottom: 45px;
    font-size: 35px;
    font-weight: 700;
    color: rgb(40, 39, 39); 

`

export const StyledLoginFormLabel = styled.label`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    font-weight: 500;

    .formIcon{
        position: absolute;
        left: 15px; 
        top: 59px; 
        transform: translateY(-50%);
        color: rgb(87, 87, 87);
    }

`
export const FormInput = styled.input`
font-size: 20px;
    padding: 13px 13px 13px 47px;
    margin-top: 8px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    border-color: transparent;
    box-shadow: 0px 1px 2px 0px  rgba(107, 169, 174, 0.989);
    
    &:focus {
     border-color: transparent; 
     box-shadow: 0px 1px 4px 1px #5fd38e; }


    

`

export const StyledLoginBtn = styled.button`
 font-size: 17px;
    font-weight: 600;
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 4px;
     color: white; 
   background-color: rgba(99, 212, 240, 0.989);
  width: 130px;
  background: #83c080;
  border-color: transparent;
  box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); 

    cursor: pointer;
    letter-spacing: 0.5px;


    &:hover,
    &:focus{
        background-color: #72ac6f;
    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856); 
    }
`