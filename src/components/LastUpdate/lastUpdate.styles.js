import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: rows;
   align-items: center;
   justify-content: flex-end;
   @media (max-width: 1024px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      margin-bottom: -3px;
   }
`;
export const DateContainer = styled.div`
   padding: 0.6em;
   height: 20px;
   color: white;
   font-weight: 700;
   border: 2px solid white;
   @media (max-width: 1024px) {
      text-align: center;
      padding: 15px;
   }

   margin-right: 15px;
   @media (max-width: 1024px) {
      font-size: 0.9em;
      margin-top: 15px;
      margin-left: 15px;
   }
`;
