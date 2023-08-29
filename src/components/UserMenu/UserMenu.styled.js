import styled from "styled-components";

export const StyledContainer = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .welcomeText, {
       
    font-weight: 600;
    font-size: 20px;
  }

`

export const StyledMenuBtn = styled.button`
 display: inline-block;
    font-size: 15px;
    font-weight: 600;
    padding: 10px ;
    border-radius: 4px;
    text-align: center;
    background-color: transparent;
    border: 3px solid  #5fd38e;
    color: rgb(40, 39, 39); 
    cursor: pointer;



    &:hover,
    &:focus{
   
    background-color: #83c080;
    border-color: transparent;
    box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); 
    color: white;
}
`