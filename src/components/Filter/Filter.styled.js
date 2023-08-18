import styled from "styled-components";

export const StyledFilterInput = styled.input`
 font-size: 20px;
    padding: 13px 13px 13px 47px;
    margin-top: 12px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    /* width: 900px; */
    /* min-width: 500px; */
    border-color: transparent;
    box-shadow: 0px 1px 4px rgba(86, 114, 110, 0.856);

    &:focus {
   border-color: transparent; 
   box-shadow: 0px 1px 4px 1px #5fd38e; 
  }

  @media screen and (min-width: 768px){
    width: 500px;
    }
`

export const StyledFilterContainer = styled.div`
 position: relative;


.filterIcon{
    position: absolute;
    top:30px;
    left: 13px;
    color: rgb(87, 87, 87);
} 

`
export const StyledFilterTittle = styled.p`
font-size: 25px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 0px;
    color: rgb(68, 68, 68);
`