import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
`;

export const Information = styled.div`
  padding: 0 4rem 8rem 4rem;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
width: 23rem;
height: 30rem;
`
export const SectionImg = styled.div`
display: grid;
place-items: center;
`
export const Title = styled.h1`
font-size: 3em;
font-weight: 800;
`
export const Parragraph = styled.p`
font-size: 1em;
font-weight:300;
line-height: 1.2em;
`
export const Soft = styled.span`
font-size: .8em;
font-weight:300;
`
export const Br = styled.br `
line-height: 1rem;
`