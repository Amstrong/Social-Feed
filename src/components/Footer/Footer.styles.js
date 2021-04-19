import styled from 'styled-components';
export const Container = styled.div`
   background-color: #faf9fc;
   display: flex;
   flex-direction: row;
   padding: 2rem 4rem 2rem 4rem;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 1024px) {
      background-color: #6424ff;
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      align-items: center;
   }
`;

export const Text = styled.span`
   font-size: 0.8em;
   @media (max-width: 1024px) {
      font-weight: 500;
      font-size: 1em;
      color: white;
      font-weigth: 900;
      :nth-child(1) {
         display: none;
      }
      :nth-child(2) {
         display: none;
      }
      :nth-child(4) {
         display: none;
      }
   }
`;

export const Img = styled.img`
   display: none;
   @media (max-width: 1024px) {
      display: block;
      width: 60px;
      margin-right: 40px;
   }
`;
