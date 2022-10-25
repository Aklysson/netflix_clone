import styled from "styled-components";

export const Container = styled.div`
width: 100%;

`

export const Img = styled.img`
 background-size: cover;
 width: 100%;
 

`

export const Text = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 10px;
padding-left: 7%;
width: 50%;

button{
    
    border-radius: 5px;
    color: white;
    background-color: black;
    padding: 5px;
    margin: 10px;

    :hover{
        cursor: pointer;
    }
}

a{
   display: flex;
   align-items: center;
   justify-content: center;
}


.infos{
    display: flex;
    gap: 10px;
}
`



