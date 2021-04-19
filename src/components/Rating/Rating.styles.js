import styled from 'styled-components';
export const Container = styled.div`
   position: relative;
   height: 12rem;
   display: grid;
   grid-template-rows: 1.5fr 1fr;
   @media (max-width: 1024px) {
      display: grid;
      grid-template-rows: 1.2fr 1fr;
      margin-bottom: 2rem;
      }
`;
export const Find = styled.div`
   background-color: #6424ff;
   color: white;
   font-weight: 600;
   font-size: 1.5em;
   display: grid;
   place-items: center;
   text-align: center;
   @media (max-width: 1024px) {
      font-size: 1.2em;
      }
`;
export const ContBtn = styled.div`
   display: flex;
   justify-content: center;
   margin-top: -25px;
   @media (max-width: 1024px) {
      margin-top: -10px;
      background-color: #6424ff;
      }
`;
