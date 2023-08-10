import styled from "styled-components";


export const StyledApp = styled.div`
max-width: 1000px;
margin: 0 auto; 
box-shadow: 0px 1px  4px rgba(86, 114, 110, 0.856); 
 padding-bottom: 25px; 
 height: 100vh; 

  /* background: linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0.4) 100%); */
`;

export const StyledContainer = styled.div`
padding-bottom: 25px;
`
export const StyledHeader = styled.header`
display: flex;
    align-items: center;
    justify-content: space-between;
padding: 30px 20px;
border-bottom: 1px solid rgba(97, 130, 125, 0.856);
/* box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.1); */
 box-shadow: 0px 1px  3px rgba(97, 130, 125, 0.856); 
 position: relative;

  

.NavLink{
    display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        color: black;
    }
    .NavLink.active{
      color: red;
    }
`
export const StyledNav = styled.nav`
display: flex;
gap: 25px;
font-weight: 500;
    font-size: 18px;
/* justify-content: space-between; */

.headerNavContainer{
    display: flex;
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
      background-color: red; 
    }
  }
`