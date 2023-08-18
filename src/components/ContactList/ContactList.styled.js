import styled from "styled-components";


export const StyledContactList = styled.ul`
 font-size: 18px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
      padding: 20px; 
    /* max-width: 900px; */
    box-shadow: 0px 1px  4px rgba(86, 114, 110, 0.856); 
    background:  rgba(242, 247, 247, 0.92);
    border-radius: 3px;
    color: rgb(32, 32, 32);

    @media screen and (min-width: 580px){
      max-width: 800px;
      padding: 35px; 
      font-size: 22px;
    }
`
export const StyledContactItem = styled.li`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 20px 0px;
    /* align-items: center; */
    border-bottom: 1px solid rgba(193, 194, 194, 0.856);

    .contact{
    display: flex;
    gap: 60px;
    justify-content: space-between;
    align-items: center;

} 
@media screen and (min-width: 580px){
flex-direction: row; 
align-items: center;
justify-content: space-between;

    }
`

export const StyledDeleteBtn = styled.button`
position: relative;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
     width: 85px; 
    padding: 10px ;
    border-radius: 4px;
text-align: start;
    background: #83c080;
    border-color: transparent;
    color: rgb(40, 39, 39); 
    color: white;
    box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856);
    cursor: pointer;


    &:hover {
      background-color: #72ac6f;
    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856);  }

    .deleteIcon {
   position: absolute;
   top:13px;
   right: 10px;

  }
  @media screen and (min-width: 580px){
    font-size: 17px;
    padding: 13px 12px;
    width: 100px;
    }
`