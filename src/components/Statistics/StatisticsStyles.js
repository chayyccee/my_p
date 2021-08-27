import styled from 'styled-components';

export const ImgCont = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`

export const ContItem = styled.img`
height: auto;
@media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`