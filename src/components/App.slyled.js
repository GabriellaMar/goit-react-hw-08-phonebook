import styled from "styled-components";

export const StyledHeader = styled.header`
/* display: flex;
justify-content: space-between; */
padding: 30px 20px;
box-shadow: 0px 0px 6px 0px rgb(138, 138, 138);

.NavLink{
    display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
    }
    .NavLink.active{
      color: red;
    }
`
export const StyledNav = styled.nav`
display: flex;
gap: 25px;
/* justify-content: space-between; */

.headerNavContainer{
    display: flex;
    gap: 25px;
}
`