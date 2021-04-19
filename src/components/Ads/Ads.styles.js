import styled from 'styled-components';

export const Section = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-top: 4rem;
   @media (max-width: 1024px) {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;

export const Information = styled.div`
   padding: 0 4rem 8rem 4rem;
   display: flex;
   flex-direction: column;
   @media (max-width: 1024px) {
      text-align: center;
      padding: 0 1rem 3rem 1rem;
   }
`;

export const Img = styled.img`
   width: 28rem;
   height: 36rem;
`;
export const SectionImg = styled.div`
   display: grid;
   place-items: center;
`;
export const Title = styled.h1`
   font-size: 3em;
   font-weight: 800;
   @media (max-width: 1024px) {
      text-align: center;
      font-size: 2.5em;
   }
`;
export const Parragraph = styled.p`
   font-size: 1em;
   font-weight: 300;
   line-height: 1.2em;
`;
export const Soft = styled.span`
   font-size: 0.8em;
   font-weight: 300;
   @media (max-width: 1024px) {
      text-align: center;
   }
`;
export const Br = styled.br`
   line-height: 1rem;
`;
