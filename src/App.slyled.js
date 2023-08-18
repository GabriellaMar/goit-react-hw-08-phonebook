import styled from "styled-components";


export const StyledApp = styled.div`
 /* max-width: 1000px;  */
margin: 0 auto; 
/* box-shadow: 0px 1px  4px rgba(86, 114, 110, 0.856);  */
 padding-bottom: 25px; 
 height: 100vh; 

  /* background: linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0.4) 100%); */
`;

export const StyledContainer = styled.div`
padding: 20px 17px;
margin: 0 auto;

@media screen and (min-width: 480px){
  padding: 25px 55px;
  }
`
export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;
    padding: 30px 15px ;

 position: relative;

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);}

  @media screen and (min-width: 768px){
    flex-direction: row;
    padding: 30px 20px;
    justify-content: space-between;
  }
  

.NavLink{
    display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        color: black;
        font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-left: 20px;
    /* margin-left: 10px; */

    @media screen and (min-width: 480px){
      font-size: 17px;
    font-weight: 700;
    }
    
    }
    .NavLink.active{
      /* color: rgba(15, 200, 213, 0.989); */
      color: #5fd38e;
    }
`
export const StyledNav = styled.nav`
/* display: flex; */
gap: 20px;
font-weight: 500;
    font-size: 18px;

.headerNavContainer{
    display: flex;
    gap: 25px;
}

@media screen and (min-width: 480px){
  gap: 25px;
    }
`
export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;


  .ant-spin-dot {
    .ant-spin-dot-item {
      background-color: rgba(54, 210, 248, 0.989);
    }
  }
`

export const StyledTittle = styled.h2`
    margin-top:20px;
    font-size: 30px;
    font-weight: 700;
    color: rgb(40, 39, 39); 

    @media screen and (min-width: 480px){
      margin-top:50px;
      font-size: 38px;
      font-weight: 700;
    }
`

export const StyledMainTittle = styled.h1`
 font-size: 50px;
    font-weight: 700;
    color: rgb(40, 39, 39); 
    text-align: center;
    margin-top: 130px;
`
export const StyledParagraph = styled.p`
 font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: rgb(56, 54, 54); 
`