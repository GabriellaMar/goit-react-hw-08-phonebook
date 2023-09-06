import styled from "styled-components";

export const StyledContactForm = styled.form`
display: block;
    /* max-width: 900px; */
    padding: 20px;
    flex-direction: column;
    box-shadow: 0px 1px  4px rgba(86, 114, 110, 0.856); 
    /* background-color:  rgba(243, 247, 247, 0.783); */
    background-color: radial-gradient(rgba(235, 237, 237, 0.783) 20%, rgba(188, 188, 187, 0.1) 100%, rgba(165, 166, 166, 0.856) 100%);
    /* background-color: rgba(249, 248, 248, 0.783); */
    background:  rgba(242, 247, 247, 0.92);
    border-radius: 3px;
    margin-top: 30px;
    margin-bottom: 48px;


    .iconInput{

    }

    @media screen and (min-width: 480px){
      padding: 35px;
      margin-bottom: 65px;
    }

    @media screen and (min-width: 768px){
    width: 800px;
    }
  
`
export const StyledContactLabel = styled.label`
   position: relative;
    display: flex;
    flex-direction: column;
   max-width: 660px;
    font-size: 23px;
    font-weight: 600;
    color: rgb(56, 54, 54); 

    &:not(:first-child){
    margin-top: 25px;
}


.iconPhone {
  position: absolute;
        left: 15px; 
        top: 59px; 
        transform: translateY(-50%);
        color: rgb(87, 87, 87);
      }

`

export const ContactInput = styled.input`
 font-size: 20px;
    padding: 13px 13px 13px 47px;
    margin-top: 10px;
    /* width: 830px; */
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    border-color: transparent;
    box-shadow: 0px 1px 2px 0px  rgba(107, 169, 174, 0.989);
    
    &:focus {
     border-color: transparent; 
   
     box-shadow: 0px 1px 4px 1px #5fd38e; 
 
  }
  @media screen and (min-width: 768px){
    width: 740px;
    }

`

export const StyledAddBtn = styled.button`
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    padding: 10px 13px;
    margin-top: 45px;
    border-radius: 4px;
     color: white;
   /* background-color: rgba(99, 212, 240, 0.989); */
   /* background: #6A9D67; */
   background: #83c080;
  
     border-color: transparent;
     box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); 
    cursor: pointer;
    letter-spacing: 0.5px;

    &:hover{
    /* background-color:rgba(122, 223, 249, 0.989); */
    background-color: #72ac6f;
    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856);  }

    @media screen and (min-width: 480px){
      padding: 15px 20px;
    }
`